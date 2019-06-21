<template>

  <div>
    <div class="mar-t-30">
      <div v-for="(cell,c) in getRightNoticeList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" @click="item.link&&goPointPage(item.link)" :key="i"
                 :more="item.more">
          <wx-switch slot="right" v-if="item.hasSwitch" v-model="bool"/>
        </wx-cell>
      </div>
    </div>
    <div class="mar-t-30">
      <p class="pad-l-30 pad-r-30 pad-b-15">聊天记录</p>
      <div v-for="(cell,c) in getRightConfigList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" @click="item.link&&goPointPage(item.link)" :key="i"
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
        bool: false,
        noticeList: [
          [
            {
              name: '使用听筒播放语音',
              hasSwitch: true,
            },
            {
              name: '回车键发送消息',
              hasSwitch: true,
            },
            {
              name: '聊天背景',
              more: true
            },
            {
              name: '表情管理',
              more: true
            }
          ],
        ],
        configList: [
          [
            {
              name: '聊天记录备份与迁移',
              more: true,
            },
            {
              name: '清空聊天记录',
              more: true,
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

