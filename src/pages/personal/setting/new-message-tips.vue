<template>

  <div>
    <div class="mar-t-30">
      <p class="pad-l-30 pad-r-30 pad-b-15">通知开关</p>
      <div v-for="(cell,c) in getRightNoticeList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" :showAllDesc="item.showAllDesc" @click="item.link&&goPointPage(item.link)" :key="i"
                 :more="item.more">
          <wx-switch slot="right" v-if="item.hasSwitch" v-model="bool"/>
        </wx-cell>
      </div>
    </div>
    <div class="mar-t-30">
      <p class="pad-l-30 pad-r-30 pad-b-15">声音与振动</p>
      <div v-for="(cell,c) in getRightConfigList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" :showAllDesc="item.showAllDesc"  @click="item.link&&goPointPage(item.link)" :key="i"
                 :more="item.more">
        </wx-cell>
      </div>
    </div>
  </div>

</template>

<script>

  import WxSwitch from '../../../components/template/form/wx-switch'

  export default {
    components: {WxSwitch},
    data () {
      return {
        bool:false,
        noticeList: [
          [
            {
              name: '接受新消息通知',
              hasSwitch: true,
            },
            {
              name: '接受语音和视频通话邀请通知',
              hasSwitch: true,
            }
          ],
          [
            {
              name: '通知显示消息详情',
              desc: '关闭后，当收到微信消息时，通知提示将不显示发信人和内容摘要',
              showAllDesc:true,
              hasSwitch: true,
            }
          ]
        ],
        configList:[
          [
            {
              name: '新消息系统通知',
              more:true,
              showAllDesc:true,
              desc:'前往系统设置中修改声音与振动'

            },
            {
              name: '语音和视频通话邀请',
              more:true,
              showAllDesc:true,
              desc:'收到语言和视频通话邀请的声音与振动'
            }
          ]
        ]
      }
    },
    computed: {
      getRightNoticeList () {
        return this.noticeList.map(cell => {
          return cell.map(item => {
            return {
              nickname: item.name,
              ...item,
            }
          })
        })
      },
      getRightConfigList () {
        return this.configList.map(cell => {
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

