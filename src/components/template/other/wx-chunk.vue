<template>

  <div class="wx-chunk">
    <p class="pad-lr br-b-e bg-d">{{serial}}</p>
    <div class="bg-f">
      <slot name="content"/>
    </div>
  </div>

</template>

<script>

  export default {
    props: {
      serial: {
        type: String,
        default: null,
      }
    }
  }
</script>
