<template>

  <div class="wx-face flex flex-center bg-d" :style="{'width':(size/100)+'rem','height':(size/100)+'rem'}">
    <img v-if="src" :src="src" width="100%" height="100%">
    <i v-else class="iconfont iconiconzhucetouxiang" :style="{fontSize:(size/100)+'rem'}"></i>
  </div>

</template>

<script>

  export default {
    props: {
      src: {
        type: String,
        default: null,
      },
      size: {
        type: Number,
        default: 68
      }
    },
  }

</script>
