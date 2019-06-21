<template>
  <div>
    <wx-cell class="pad-t-50 pad-b-50 mar-b-20" :info="getSelfInfo" :hideBr="true">
      <div slot="desc" class="flex flex-bt mar-t">
        <div class="col-9">{{getSelfInfo.code}}</div>
        <div>
          <i class="iconfont iconqrcode font-20 col-9"></i>
          <i class="iconfont iconright font-20 col-9"></i>
        </div>
      </div>
    </wx-cell>
    <div class="mar-b-20" v-for="(item,k) in testData" :key="k">
      <wx-cell
        @click="goPointPage(fn.link)"
        v-for="(fn,f) in item"
        :info="fn" :key="f" :more="!!fn.link"/>
    </div>
  </div>
</template>

<script>

  import WxCell from '../../components/template/other/wx-cell'
  import {defaultFace} from '../../project-config'
  import {mapActions, mapState} from 'vuex'

  export default {
    components: {WxCell},
    data () {
      return {
        testData: [
          [{icon: 'iconwechat-pay-line', nickname: '支付', link: '/personal/pay'}],
          [
            {icon: 'iconheziguanligenduoshangpinkeji', nickname: '收藏', link: '/personal/collection'},
            {icon: 'iconxiangce', nickname: '相册', link: '/personal/photos'},
            {icon: 'iconqiapian', nickname: '卡包', link: '/personal/cardBag'},
            {icon: 'iconbiaoqing', nickname: '表情', link: '/personal/emoji'}
          ],
          [{icon: 'iconset', nickname: '设置', link: '/personal/setting'}]
        ]
      }
    },
    computed: {
      ...mapState({
        self: s => s.self,
      }),
      getSelfInfo () {
        return {
          nickname:this.self.nickname,
          fontSize: 48,
          logoSize: 138,
          logo: this.getImageRightPath(this.self.face),
          code: '微信号：' + this.self.userId,
        }
      }
    }

  }

</script>
