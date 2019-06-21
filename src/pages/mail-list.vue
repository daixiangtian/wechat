<template>
  <div>
    <wx-cell v-for="(item,k) in testData" :info="item" :key="k"/>
    <wx-chunk :serial="item.serial" v-for="(item,k) in friendsList" :key="'s'+k">
      <div class="" slot="content">
        <wx-cell v-for="(item,k) in item.friends" :info="item" :key="item.serial"/>
      </div>
    </wx-chunk>
  </div>
</template>

<script>

  import WxCell from '@/components/template/other/wx-cell'
  import WxChunk from '@/components/template/other/wx-chunk'

  export default {
    components: {WxCell,WxChunk},
    data () {
      return {
        testData: [
          {logo:'',nickname:'新的朋友'},
          {logo:'',nickname:'群聊'},
          {logo:'',nickname:'标签'},
          {logo:'',nickname:'公众号'},
        ],
        friendsList:[
          {
            serial:'A',
            friends:[
              {logo:'',nickname:'A小鱼儿'},
              {logo:'',nickname:'A花无缺'},
              {logo:'',nickname:'A张卫健'},
              {logo:'',nickname:'A谢霆锋'},
            ]
          },{
            serial:'B',
            friends:[
              {logo:'',nickname:'B小鱼儿'},
              {logo:'',nickname:'B花无缺'},
              {logo:'',nickname:'B张卫健'},
              {logo:'',nickname:'B谢霆锋'},
            ]
          }
        ]
      }
    }
  }

</script>
