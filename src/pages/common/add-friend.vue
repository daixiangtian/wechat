<template>
  <wx-div mi-h="100vh" class="bg-e flex flex-d-c">
    <wx-title title="添加朋友" class="bg-e" v-model="type" :placeholder="placeholder"/>

    <wx-div class="flex-1 bg-f" v-if="type == 1">
      <wx-div class="flex flex-y-center" @click="type=2">
        <wx-div :pad="[30]" class="flex flex-y-center">
          <i class="iconfont iconsearch1 fon-size-48 mar-r-30"></i>
          <span class="col-9">微信号/手机号</span>
        </wx-div>
      </wx-div>
      <wx-div class="col-9 t-c bg-e fon-size-28" :pad="[30,0,60]">我的微信号：{{self.userId}}</wx-div>
      <wx-cell :info="info" v-for="(info,key) in searchList" @click="clickHandle(info)" :key="key" :more="true"/>
    </wx-div>

  </wx-div>

</template>
<script>
  import WxInput from '../../components/template/form/wx-input'
  import WxTitle from '../../components/template/wx-header/wx-title'

  import {mapState} from 'vuex'

  export default {
    components: {WxTitle, WxInput},
    data () {
      return {
        type: 1,
        placeholder: '微信号/手机号',
        searchList: [
          {
            nickname: '雷达加朋友',
            desc: '添加身边的朋友',
            icon: 'iconDisplayBoard',
            link: 'a'
          }, {
            nickname: '面对面建群',
            desc: '与身边的朋友进入同一个群聊',
            icon: 'iconusers',
            link: 'a'
          }, {
            nickname: '扫一扫',
            desc: '扫描二维码名片',
            icon: 'iconsaoyisao',
            link: 'a'
          }, {
            nickname: '手机联系人',
            desc: '添加或邀请通讯录中的朋友',
            icon: 'iconzhucetianjiahaoyou',
            link: 'a'
          }, {
            nickname: '公众号',
            desc: '获取更多资讯和服务',
            icon: 'iconren',
            placeholder: '搜索公众号'
          }, {
            nickname: '企业微信联系人',
            desc: '通过手机号搜索企业微信用户',
            icon: 'iconue603comment',
            placeholder: '通过手机号搜索企业微信用户'
          }
        ]
      }
    },
    methods: {
      clickHandle (item) {
        if (item.placeholder) {
          this.placeholder = item.placeholder
          this.type = 2
        }
      }
    },
    computed: {
      ...mapState({
        self: s => s.self
      })

    }
  }
</script>
