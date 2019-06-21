<template>
  <!--消息-->
  <div class="pad-l flex flex-y-center bg-f" @click="$emit('click')">
    <div v-if="info.icon" class="mar-b-10">
      <i class="iconfont fon-size-54 " :class="info.icon"></i>
    </div>
    <wx-face v-else-if="info.logo" :size="info.logoSize || 86" :src="info.logo"/>
    <div class=" mar-l-20 pad-b pad-t flex-1 pad-r flex-bt flex flex-y-center" :class="{'br-b-e':!hideBr}">
      <div class="flex-1">
        <div class="flex flex-bt flex-y-center">
          <div class="flex flex-y-center" :style="{'fontSize':(info.fontSize || 36)/100+'rem'}">
            {{info.nickname}}
            <slot name="auxiliary"/>
          </div>
          <span class="col-9">{{info.time}}</span>
        </div>
        <div class="col-6 mar-t-10  flex flex-bt " :class="!showAllDesc&&'hide-e'">
          <span>{{info.desc}}</span>
        </div>
        <slot name="desc"></slot>
      </div>
      <slot name="right"/>
      <div class="flex flex-y-center" v-if="info.face || more">
        <wx-face :size="58" v-if="info.face" :src="info.face"/>
        <i class="iconfont iconright mar-l-10 col-9"></i>
      </div>
    </div>
  </div>

</template>

<script>
  import WxFace from '../../../components/template/user/face'

  export default {
    components: {WxFace},
    props: {
      info: {
        type: Object,
        default: {}
      },
      hideBr: {
        type: Boolean,
        default: false
      },
      showAllDesc:{
        type: Boolean,
        default: false
      },
      more: {
        type: Boolean,
        default: false
      }
    }
  }

</script>
