<template>
  <!--微信头部-->
  <div class="wx-header flex dh flex-y-center pad-lr flex-bt ">
    <div class="flex-y-center flex flex-1 fon-size-36">
      <div class="fon-size-36" @click="value==1?$router.go(-1):$emit('input',1)">
        <i class="iconfont iconleft-copy"></i>
      </div>
      <div class="fon-size-36" v-if="value==1">{{title}}</div>
      <div class="flex-1" v-else-if="value==2">
        <wx-input class="flex-1" :placeholder="placeholder"/>
      </div>
    </div>

    <div class="" v-if="more">
      <i class="iconfont iconmore fon-size-48"></i>
    </div>
  </div>
</template>
<script>

  import WxInput from '../form/wx-input'

  export default {
    components: {WxInput},
    props: {
      title: {
        type: String,
        default () {
          return '微信'
        }
      },
      more: {
        type: Boolean,
        default: false,
      },
      value: {
        type: Number,
        default: 1
      },
      placeholder: {
        type: String,
        default: '请输入...'
      }
    },
    data () {
      return {}
    }
  }

</script>
