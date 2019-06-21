<template>

  <div>
    <div class="mar-t-30">
      <p class="pad-l-30 pad-r-30 pad-b-15">通讯录</p>
      <div v-for="(cell,c) in getRightNoticeList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" :showAllDesc="item.showAllDesc"
                 @click="item.link&&goPointPage(item.link)" :key="i"
                 :more="item.more">
          <wx-switch slot="right" v-if="item.hasSwitch" v-model="bool"/>
        </wx-cell>
      </div>
    </div>
    <div class="mar-t-30">
      <p class="pad-l-30 pad-r-30 pad-b-15">朋友圈和视频动态</p>
      <div v-for="(cell,c) in getRightConfigList" :key="c" class="mar-b-30">
        <wx-cell :info="item" v-for="(item,i) in cell" :showAllDesc="item.showAllDesc"
                 @click="item.link&&goPointPage(item.link)" :key="i"
                 :more="item.more">
          <wx-switch slot="right" v-if="item.hasSwitch" v-model="bool"/>
        </wx-cell>
      </div>
    </div>

    <wx-cell :info="{nickname:'授权管理'}"
             :more="true">
    </wx-cell>

    <div class="t-c mar-t-50 fon-size-28 mar-b-10 col-6">隐私保护的详细内容请见：<span class="col-link fon-size-28">《微信隐私保护指引》</span></div>

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
              name: '加我为朋友时需要验证',
              hasSwitch: true,
            },
            {
              name: '向我推荐通讯录朋友',
              desc: '开启后，为你推荐已经开通微信的手机联系人',
              hasSwitch: true,
            },
            {
              name: '添加我的方式',
              more: true
            },
            {
              name: '通讯录黑名单',
              more: true
            }
          ],
        ],
        configList: [
          [
            {
              name: '不让他(她)看',
              more: true,
            },
            {
              name: '不看他(她)',
              more: true,
            },
            {
              name: '允许陌生人查看十条朋友圈',
              hasSwitch: true,
            },
            {
              name: '允许朋友查看朋友圈的范围',
              more: true,
              right: `<span class="fon-size-36 col-9">最近半年</span>`
            },
            {
              name: '朋友圈更新提醒',
              desc: '关闭后，有朋友更新照片时，界面下方“发现”切换按钮上不再出现红点提示',
              showAllDesc: true,
              hasSwitch: true,
            },
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

