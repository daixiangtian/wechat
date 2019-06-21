<template>

  <div class="pad-l-30 pad-r-30 bg-f h_100 pad-t-30" >
    <!--    <span class="fon-size-48">X</span>-->
    <div class="fon-size-48 pad-t-30 mar-t-30 pad-b-100">手机号注册</div>
    <wx-input v-model="params.nickname" placeholder="例如：戴向天" label="昵称">
      <div slot="right" class="posi-r  mar-l-30">
        <wx-image class="posi-a l0 r0" :src="faceCopy" :width="1" :height="1"/>
        <wx-file class="w-100 h-100 t0 l0 posi-a-i"
                 @change="changeHandel"
                 :class="faceCopy&&'op-0'" v-model="faceCopy">
          <div slot="cover" class="posi-a w100 h100 flex-center flex bg-d t0 l0">
            <i class="iconfont iconphotobzhaoxiang fon-size-48"></i>
          </div>
        </wx-file>
      </div>
    </wx-input>
    <p class="fon-size-30 pad-t-30 pad-b-30">国家/地区<span class="col-main fon-size-30">中国（+86）</span></p>
    <wx-input label="手机号" placeholder="填写手机号" v-model="params.mobile"/>
    <wx-input label="密码" placeholder="填写密码" type="password" v-model="params.password"/>
    <wx-button name="注册" @click="beginRegister" class="mar-t-30 " :class="!getType(judgeParams,'boolean')&&'op-5'"/>
    <p class="mar-t-15">
      点击上面的“注册”按钮，即表示你同意
      <span class="col-link t-d-c"> 《微信软件许可及服务协议》></span>和
      <span class="col-link t-d-c">《微信隐私保护指引》></span>
    </p>
  </div>

</template>
<script>
  import WxInput from '../components/template/form/wx-input'
  import WxFile from '../components/template/form/wx-file'
  import WxImage from '../components/template/public/wx-image'
  import WxButton from '../components/template/form/wx-button'

  import {mapActions} from 'vuex'

  export default {
    components: {WxButton, WxImage, WxFile, WxInput},
    data () {
      return {
        params: {
          nickname: '',
          mobile: '',
          password: '',
          face: ''
        },
        file: null,
        faceCopy: '',
      }
    },
    methods: {
      ...mapActions(['registerUsre', 'uploadFile']),
      async changeHandel (e) {
        console.log(e)

        this.file = e.files[0]

      },
      async beginRegister () {

        if (this.judgeParams) {

          this.log('开始上传头像')

          const image = new Image(),
            that = this
          let width = null,
            height = null

          image.src = this.faceCopy
          image.onload = async function () {
            width = image.width
            height = image.height

            const {url} = await that.uploadFile({
              file: that.file,
              userId: 0,
              width,
              height
            })

            that.params.face = url

            that.log('开始注册用户')
            const result = await that.registerUsre(that.params)

            if (result.code == 200) {
              that.log('注册成功')

              if(await that.showDialog("注册成功，是否立即登入",'提示')){
                that.goPointPage("/login")
              }else{
                that.params.face = '';
                that.params.nickname = '';
                that.params.password = '';
                that.params.mobile = '';
              }

            } else if(result.code == 3) {

              that.showDialog("该号码已注册",'',true);

            }else if(result.code == 1){
              that.showDialog("注册失败",'',true);
            }

          }

        }

      }
    },
    computed: {
      judgeParams () {
        if (!this.params.nickname.trim()) return '请输入昵称'
        if (!this.isPhone(this.params.mobile)) return '请输入手机号'
        if (!this.params.password.trim()) return '请输入密码'
        if (this.params.password.length < 6) return '密码至少6位'
        if (!this.faceCopy.trim()) return '请选择头像'
        return true
      },
    }
  }
</script>
