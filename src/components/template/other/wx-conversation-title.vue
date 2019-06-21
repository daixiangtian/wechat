<template>

  <div class="pad-r-15 pad-l-15 h-100 bg-e posi-f l0 r0 t0 flex flex-y-center flex-bt">

    <div class="flex flex-y-center" @click="$router.go(-1)">
      <i class="iconfont iconleft-copy"></i>
      <span class="fon-size-36 mar-l-30">{{title}}</span>
    </div>
    <div class="">
      <i class="iconfont iconmore"></i>
    </div>

  </div>

</template>

<script>

  export default {
    props:{
      title:{
        type:String,
        default:'对话'
      }
    },
    methods: {
      goPoinPage (params) {
        this.$router.push(params)
      }
    }
  }


</script>
