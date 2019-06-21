<template>
  <div class="flex flex-d-c h_100 bg-e">
    <wx-title :title="$route.meta.title" v-if="$route.meta.title"/>
    <div class="bg-e flex-1 over-a">
      <router-view/>
    </div>

  </div>

</template>
<script>
  import WxTitle from '../../components/template/wx-header/wx-title'
  export default {
    components: {WxTitle}
  }
</script>
