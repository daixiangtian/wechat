<template>
  <div id="wx-container">
    <wx-header :title="$route.meta.title" v-if="$route.meta.showFooter"/>
    <div :class="{'posi-f w100 over-a bg-d t98 b98':$route.meta.showFooter || $route.meta.showComment }">
      <router-view/>
    </div>
    <wx-footer v-if="$route.meta.showFooter"/>

  </div>
</template>

<script>

  import WxHeader from '../components/template/wx-header'
  import WxFooter from '../components/template/wx-footer'

  import WxConversationTitle from '../components/template/other/wx-conversation-title'

  export default {
    components: {WxHeader, WxFooter, WxConversationTitle},    //组件引入
    data () {   //变量集
      return {
        title: '微信(10)'
      }
    },
    created () {
      // if(this.$route.path == '/')this.goPointPage("/first")
    }
  }


</script>
