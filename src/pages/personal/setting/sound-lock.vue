<template>

  <div>
    <div class="flex flex-center">
      <div class="t-c pad-t-30">
        <span><i class="iconfont iconyuyin col-main" style="font-size: 2rem"></i></span>
        <div class="fon-size-48 mar-t-50">声音锁{{bool?'已开启':'已关闭'}}</div>
      </div>
    </div>

    <wx-cell class="mar-t-99" :info="{nickname:'登录微信',desc:'可使用声音登录微信'}">
      <wx-switch slot="right" v-model="bool"/>
    </wx-cell>
  </div>

</template>
<script>
  import WxCell from '../../../components/template/other/wx-cell'
  import WxSwitch from '../../../components/template/form/wx-switch'

  export default {
    components: {WxSwitch, WxCell},
    data () {
      return {
        bool: false,    //switch 是关键字，不建议使用switch做变量值
      }
    }
  }
</script>
