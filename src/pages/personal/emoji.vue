<template>

  <div class="bg-f">
    <div class="posi-r br-b-e">
      <div class="flex h-80 flex-y-center">
        <div class="flex-1 t-c col-main fon-size-28">朋友表情</div>
        <div class="flex-1 t-c col-6 fon-size-28">更多表情</div>
      </div>
    </div>
    <wx-image :src="banner" :width="7.5" :height="3.75"/>
    <div>
      <p class="fon-size-28 h-100 mar-l-15 pad-r-30 flex-y-center flex br-b-e">朋友最近新添加</p>
      <ul>
        <li v-for="(emoji,e) in emojiList" :key="e">
          <wx-cell :info="emoji" class="pad-l-15">
            <div class="bg-main col-f fon-size-28 pad-r-30 pad-l-30 pad-t-15 pad-b-15 br-ra-10" slot="right">添加</div>
          </wx-cell>
        </li>

      </ul>

    </div>

  </div>

</template>
<script>
  import WxCell from '../../components/template/other/wx-cell'
  import WxImage from '../../components/template/public/wx-image'

  export default {
    components: {WxImage, WxCell},
    data () {
      return {
        banner:'https://b-ssl.duitang.com/uploads/item/201905/21/20190521175139_dvrxg.thumb.700_0.jpg',
        emojiList: [

          {
            logo: 'https://b-ssl.duitang.com/uploads/item/201903/08/20190308202646_nsxcs.thumb.700_0.jpg',
            nickname:'柴犬Oka日常',
            desc:'2个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/23/20190223163120_elsvp.thumb.700_0.jpg',
            nickname:'吃饭第一名搞事情',
            desc:'2个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201906/01/20190601195445_iwcdv.thumb.700_0.jpeg',
            nickname:'长草颜团子日常',
            desc:'2个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }, {
            logo: 'https://b-ssl.duitang.com/uploads/item/201902/27/20190227163117_nqzid.thumb.700_0.jpg',
            nickname:'小破孩有点烦',
            desc:'4个朋友在用'

          }
        ],

      }
    }
  }
</script>
