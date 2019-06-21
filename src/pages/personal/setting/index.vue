<template>

  <div>
    <div v-for="(cell,c) in getRightList" :key="c" class="mar-b-30">
      <wx-cell :info="item" v-for="(item,i) in cell"
               @click="item.link?goPointPage(item.link):item.method?openOperation():'void 0'"
               :key="i" :more="true">
        <span v-if="item.auxiliary" slot="auxiliary">
          <i class="iconfont icontishi"></i>
        </span>
      </wx-cell>
    </div>
  </div>

</template>


<script>

  import WxCell from '../../../components/template/other/wx-cell'
  import WxSwitch from '../../../components/template/form/wx-switch'

  export default {
    components: {WxSwitch, WxCell},
    data () {
      return {
        list: [
          [
            {name: '帐号与安全', link: '/personal/setting/accountSecurity'},
          ],
          [
            {name: '新消息提醒', link: '/personal/setting/newMessageTips'},
            {name: '勿扰模式', link: '/personal/setting/notDisturb'},
            {name: '聊天', link: '/personal/setting/chat'},
            {name: '隐私', link: '/personal/setting/privacy'},
            {name: '设备'},
            {name: '通用', link: '/personal/setting/currency'},
          ],
          [
            {name: '关于微信', link: '/personal/setting/aboutWx'},
            {name: '帮助与反馈'},
          ],
          [
            {name: '插件', auxiliary: true},
          ],
          [
            {name: '切换帐号', link: '/personal/setting/changeAccount'},
            {name: '退出', method: 'openOperation'}
          ]
        ]
      }
    },
    methods: {
      async openOperation () {
        const res = await this.operation({
          list: [
            {icon: 'iconren1', name: '退出登录'},
            {icon: 'iconexit', name: '关闭微信'}
          ]
        })
        console.log('res==》', res)
      }
    },
    computed: {
      getRightList () {
        return this.list.map(cell => {
          return cell.map(item => {
            return {
              nickname: item.name,
              ...item,
            }
          })
        })
      }
    },
  }

</script>
