<template>

  <wx-div h="100vh">
    <wx-div :pad="[0,0,60]">
      <wx-div :pad="[180,10,10]" class="flex-center flex">
        <wx-image :src="getImageRightPath(self.face)" class="dis-l-b" :width="1.2" :height="1.2"/>
      </wx-div>
      <p class="t-c fon-size-36">{{self.mobile}}</p>
    </wx-div>

    <wx-div :pad="[30]">
      <wx-input label="手机号" v-if="!self.mobile" class="mar-b-60"  placeholder="请输入手机号" v-model="params.mobile"/>
      <wx-input label="密码" class="mar-b-60" type="password" placeholder="请输入密码" v-model="params.password"/>


      <wx-button name="登入" @click="beginLogin" class="mar-t-30 mar-b-30 " :class="!judgeParams&&'op-5'"/>

      <p class="col-link t-c" @click="goPointPage('/')">立即注册</p>
    </wx-div>
  </wx-div>

</template>
<script>
  import WxImage from '../components/template/public/wx-image'

  import {mapActions, mapState} from 'vuex'
  import WxInput from '../components/template/form/wx-input'
  import WxButton from '../components/template/form/wx-button'

  export default {
    components: {WxInput, WxImage, WxButton},
    data () {
      return {
        params: {
          mobile:'',
          password: ''
        },
      }
    },
    methods: {
      ...mapActions(['userLogin']),
      async beginLogin () {

        if (this.judgeParams) {
          const result = await this.userLogin(this.params)

          if (result.data) {
            this.goPointPage('/first')
          } else {
            if (result.code == 5) {
              this.showDialog('密码错误', '', true)
            } else if (result.code == 4) {
              this.showDialog('用户不存在', '', true)
            }
          }

          this.log('登入的结果=>>' + JSON.stringify(result))
        }

      }
    },
    computed: {
      ...mapState({
        self: s => s.self
      }),
      judgeParams () {

        return !!this.params.password.trim() && this.params.password.length >= 6

      }
    }
  }
</script>
