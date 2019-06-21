<template>

  <div>

    <wx-cell :info="{nickname:'勿扰模式',desc:'开启后，在设定时间内收到新消息时不会响铃或振动'}"  :showAllDesc="true">
      <wx-switch slot="right" v-model="bool"/>
    </wx-cell>
    <wx-cell v-if="bool" :info="{nickname:'开始时间'}" :more="true">
      <div class="col-9 fon-size-36" slot="right">晚上11:00</div>
    </wx-cell>
    <wx-cell v-if="bool" :info="{nickname:'结束时间'}" :more="true">
      <div class="col-9 fon-size-36" slot="right">早上08:00</div>
    </wx-cell>

  </div>

</template>
<script>
  import WxSwitch from '../../../components/template/form/wx-switch'

  export default {
    components: {WxSwitch},
    data () {
      return {
        bool: false
      }
    }
  }
</script>
