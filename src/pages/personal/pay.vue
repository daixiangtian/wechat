<template>

  <div class=" mar-l-15 mar-r-15 mar-t-15 mar-b-15 ">
    <div class="pad-b-120 bg-main pad-t-60 pad-l-30 pad-r-30 flex flex-y-center flex-bt br-ra-20">
      <div class="col-f flex-1 t-c">
        <div class="col-f mar-b-30">
          <i class="iconfont col-f icon20 font-68"></i>
        </div>
        <span class="col-f fon-size-36">收付款</span>
      </div>
      <div class="col-f flex-1 t-c">
        <div class="mar-b-30">
          <i class="iconfont  col-f iconqianbao  font-68"></i>
        </div>
        <span class="col-f fon-size-36">钱包</span>
      </div>
    </div>


    <div class="bg-f mar-t-30 br-ra-20">
      <div class="flex flex-y-center fon-size-28 col-6 pad-l-30 pad-r-30 h-120 br-b-e">微信服务</div>
      <ul class="flex flex-wrap pad-t-30 pad-b-30">
        <li class="w-240 t-c posi-r pad-t-30 pad-b-30"
            v-for="(item,key) in serviceList" :key="key"
        >
          <div class="mar-b-30">
            <i class="iconfont font-68" :class="item.icon"></i>
          </div>
          <span class="fon-size-28">{{item.name}}</span>
        </li>
      </ul>
    </div>

    <div class="bg-f mar-t-30 br-ra-20">
      <div class="flex flex-y-center fon-size-28 col-6 pad-l-30 pad-r-30 h-120 br-b-e">第三方服务</div>
      <ul class="flex flex-wrap pad-t-30 pad-b-30">
        <li class="w-240 t-c posi-r pad-t-30 pad-b-30"
            v-for="(item,key) in otherServiceList" :key="key"
        >
          <div class="mar-b-30">
            <i class="iconfont font-68" :class="item.icon"></i>
          </div>
          <span class="fon-size-28">{{item.name}}</span>
        </li>
      </ul>
    </div>

  </div>

</template>

<script>

  export default {
    data () {
      return {
        serviceList: [
          {name: '信用卡还款', icon: 'iconxinyongqia'},
          {name: '手机充值', icon: 'iconshoujichongzhi'},
          {name: '生活缴费', icon: 'iconshenghuojiaofei'},
          {name: 'Q币充值', icon: 'iconqq'},
          {name: '城市服务', icon: 'iconts-tubiao_city'},
          {name: '微信公益', icon: 'iconpublic-welfare'},
          {name: '保险服务', icon: 'iconbaoxianchanpin'},
        ],
        otherServiceList:[
          {name: '火车票机票', icon: 'iconhuochepiao'},
        ]
      }
    }
  }

</script>
