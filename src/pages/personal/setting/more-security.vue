<template>
  <div>
    <div v-for="(cell,c) in getRightList" :key="c" class="mar-b-30">
      <wx-cell :info="item" v-for="(item,i) in cell" @click="item.link&&goPointPage(item.link)" :key="i"
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
            {
              name: 'QQ号', right: `<span class="fon-size-30 col-9">未绑定</span>`, more: true
            },
            {
              name: '邮件地址', right: `<span class="fon-size-30 col-9">未绑定</span>`, more: true
            }
          ],
          [
            {
              name: '手机安全防护', more: true
            }
          ]
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
