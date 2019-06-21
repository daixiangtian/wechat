<template>

  <div>
    <wx-cell :info="item" v-for="(item,i) in cells" :showAllDesc="item.showAllDesc"
             @click="item.link&&goPointPage(item.link)" :key="i"
             :more="item.more">
      <wx-switch slot="right" v-if="item.hasSwitch" v-model="bool"/>
      <div v-if="item.right" slot="right"  class="fon-size-36 col-9">{{item.right}}</div>
    </wx-cell>
  </div>

</template>


<script>

  export default {
    data () {
      return {
        bool: false,
        cells: [
          {
            nickname: '开启横屏模式',
            hasSwitch: true
          },
          {
            nickname: '多语言',
            more: true,
            right: '跟随系统'
          },
          {
            nickname: '字体大小',
            more: true
          },
          {
            nickname: '照片、视频和文件',
            more: true
          },
          {
            nickname: '发现页管理',
            more: true
          },
          {
            nickname: '辅助功能',
            more: true
          },
          {
            nickname: '流浪统计',
            more: true
          },
          {
            nickname: '微信存储空间',
            more: true
          },
        ]
      }
    }
  }

</script>
