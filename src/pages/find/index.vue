<template>
  <div>
    <div class="mar-b-20" v-for="(item,k) in testData" :key="k">
      <wx-cell
        @click="fn.path&&$router.push(fn.path)"
        v-for="(fn,f) in item" :info="fn" :key="f" :more="true"/>
    </div>
  </div>
</template>

<script>
  import WxCell from '@/components/template/other/wx-cell'

  export default {
    components: {WxCell},
    data () {
      return {
        testData: [
          [
            {
              icon: 'iconhaofangtuo400iconfontpengyouquan',
              nickname: '朋友圈',
              face: 'http://img.52z.com/upload/news/image/20180108/20180108121626_95368.jpg',
              path: 'friendsCircle'
            }],
          [
            {icon: 'iconsaoyisao', nickname: '扫一扫'},
            {icon: 'iconweixinyaoyiyaoicon', nickname: '摇一摇'},
          ],
          [
            {icon: 'iconDisplayBoard', nickname: '看一看'},
            {icon: 'iconsouyisou', nickname: '搜一搜'}
          ],
          [{icon: 'icon7', nickname: '附件的人'}],
          [
            {icon: 'icongouwu', nickname: '购物'},
            {icon: 'icon94', nickname: '游戏'}
          ],
        ]
      }
    }
  }


</script>
