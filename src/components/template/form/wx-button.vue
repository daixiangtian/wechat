<template>

  <div @click="$emit('click')">
    <div v-if="type=='confirm'" class="bg-main col-f h-95 fon-size-36 br-ra-8 flex flex-center">{{name}}</div>
  </div>

</template>


<script>

  export default {
    props: {
      type: {
        type: String,
        default: 'confirm'
      },
      name: {
        type: String,
        default: '确认'
      }
    }
  }

</script>
