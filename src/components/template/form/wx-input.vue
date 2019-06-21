<template>

  <div class="flex flex-y-center">
    <div class="flex flex-1 br-b-d pad-b-10 pad-t-10">
      <div class="flex-1 flex flex-y-center">
        <i class="iconfont mar-r-30" v-if="icon" :class="icon"></i>
        <div class="min-w-150 fon-size-36 col-3" v-if="label">{{label}}</div>

        <input
          class="flex-1 h-80 bg-tra br-n fon-size-36 outline-n"
          v-model="v"
          :type="type"
          @input="$emit('input',v)"
          :placeholder="placeholder"/>
      </div>
    </div>
    <slot name="right"/>
  </div>

</template>

<script>

  export default {
    props:{
      label:{
        type:String,
        default:null,
      },
      icon:{
        type:String,
        default:null
      },
      type:{
        default:'text'
      },
      value:{
        type:String,
        default: ''
      },
      placeholder:{
        type:String,
        default:'请输入...'
      }
    },
    data(){
      return{
        v:''
      }
    },
    watch:{
      value(newVal){
        this.v = newVal
      }
    },
    created () {
      this.v = this.value
    }
  }

</script>
