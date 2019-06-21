<template>

  <div>
    <div class="pad-t-30 pad-b-30 pad-l-30 pad-r-30 bg-f br-b-e" v-for="(card,key) in cardList" :key="key">
      <div class="flex-y-center flex">
        <wx-image :src="card.logo" :width="0.8" :height="0.8" :fillet="0.8"/>
        <span class="fon-size-38 mar-l-30">{{card.nickname}}</span>
      </div>
      <div class="mar-l-60 pad-l-60 mar-t-30">
        <wx-image v-for="(c ,l) in card.cardArray" :key="l" :src="c.cover" :width="5.4" :height="1.8" :fillet="0.1">
          <div class="posi-a w100">
            <div class="pad-l-30 pad-r-30">
              <p class="fon-size-48 col-f text-s-0">{{c.title}}</p>
              <span class=" col-f text-s-0">{{card.nickname}}</span>
            </div>

          </div>
        </wx-image>
      </div>
    </div>
  </div>

</template>
<script>
  import WxCell from '../../components/template/other/wx-cell'
  import WxImage from '../../components/template/public/wx-image'
  export default {
    components: {WxImage, WxCell},

    data(){
      return{
        cardList:[
          {
            logo:'https://img.25pp.com/uploadfile/app/icon/20190530/1559216120319620.jpg@140w_140h',
            nickname:'肯德基',
            cardArray:[
              {cover:'http://img.mp.itc.cn/upload/20160523/3ee4f3b3cba94f3aa20463a567c0b163_th.jpg',title:'会员卡'}
            ]
          }, {
            logo:'http://img.mp.itc.cn/upload/20160523/50d5de0b0e1c495780f2720180dad538_th.jpg',
            nickname:'麦当劳',
            cardArray:[
              {cover:'http://img.mp.itc.cn/upload/20160523/50d5de0b0e1c495780f2720180dad538_th.jpg',title:'会员卡'}
            ]
          }, {
            logo:'https://img.25pp.com/uploadfile/app/icon/20190530/1559216120319620.jpg@140w_140h',
            nickname:'肯德基',
            cardArray:[
              {cover:'http://img.mp.itc.cn/upload/20160523/3ee4f3b3cba94f3aa20463a567c0b163_th.jpg',title:'会员卡'}
            ]
          }
        ]
      }
    }

  }
</script>
