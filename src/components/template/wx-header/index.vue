<template>
  <!--微信头部-->
  <div class="wx-header flex dh flex-y-center pad-lr bg-d flex-bt ">
    <div class="font-36">{{title}}</div>
    <div>
      <i class="iconfont iconsearch1 mar-l"></i>
      <i class="iconfont iconadd mar-l" @click="showMore = !showMore"></i>
    </div>
    <wx-div :w="250" bg="rgba(0,0,0,.8)" v-if="showMore" :br-r="10" :pad="[30]" :mar="[110,10,0]"
            class="posi-f t0 r0 z-10">
      <wx-div :mar="[-60,10]" class="br-san-b-30 t0 r0 posi-a"/>
      <wx-div class="col-f flex-y-center flex fon-size-30":h="80"><i class="iconfont col-f iconcomment2 mar-r-20"></i>发起群聊
      </wx-div>
      <wx-div class="col-f flex-y-center flex fon-size-30" @click="goPointPage('/addFriend')"  :h="80"><i
        class="iconfont col-f iconzhucetianjiahaoyou mar-r-20"></i>添加朋友
      </wx-div>
      <wx-div class="col-f flex-y-center flex fon-size-30" :h="80"><i class="iconfont col-f iconsaoyisao mar-r-20"></i>扫一扫
      </wx-div>
      <wx-div class="col-f flex-y-center flex fon-size-30" :h="80"><i
        class="iconfont col-f iconshoujichongzhi mar-r-20"></i>收付款
      </wx-div>
      <wx-div class="col-f flex-y-center flex fon-size-30" :h="80"><i
        class="iconfont col-f iconxinfengtianchong mar-r-20"></i>帮助与反馈
      </wx-div>

    </wx-div>
  </div>
</template>
<script>

  export default {
    props: {
      title: {
        type: String,
        default () {
          return '微信'
        }
      }
    },
    data () {
      return {
        showMore: false,
      }
    }
  }

</script>
