<template>
  <div>
    <div v-for="(cell,c) in getRightList" :key="c" class="mar-b-30">
      <wx-cell :info="item" v-for="(item,i) in cell" :showAllDesc="item.showAllDesc"
               @click="item.link&&goPointPage(item.link)" :key="i"
               :more="item.more">
        <div slot="right" v-if="item.right" v-html="item.right"></div>
        <div slot="auxiliary" v-if="item.auxiliary" v-html="item.auxiliary"></div>
      </wx-cell>
    </div>
  </div>

</template>

<script>
  import WxCell from '../../../components/template/other/wx-cell'

  export default {
    components: {WxCell},
    data () {
      return {
        list: [
          [
            {name: '微信号', right: `<span class="col-9 fon-size-32">J809002582</span>`},
            {
              name: '手机号', more: true, link: 'accountSecurity/bindPhone',
              right: `<i class="iconfont iconicon col-main"></i><span class="fon-size-32 col-6">150****9115</span>`
            }
          ], [
            {name: '微信密码', more: true, link: 'accountSecurity/password'},
            {
              name: '声音锁', more: true, link: '/personal/setting/accountSecurity/soundlock',
              auxiliary: `<span class="col-f bg-FF5722 dis-l-b pad-t-10 pad-b-5 pad-l-10 pad-r-10 br-ra-10 mar-l-20">NEW</span>`
            }
          ], [
            {name: '应急联系人', more: true, link: 'accountSecurity/emergencyContact'},
            {name: '登入设备管理', more: true, link: 'accountSecurity/equipmentManager'},
            {name: '更多安全设置', more: true, link: 'accountSecurity/moreSecurity'},
          ], [
            {name: '微信安全中心', more: true, desc: '如果你遇到微信被盗，无法登录等问题，可以前往安全中心', showAllDesc: true},
          ],

        ]
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
