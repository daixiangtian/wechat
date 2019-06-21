<template>
  <div>
    <wx-cell
      @click="goPointPage('conversation?userId=2')"
      v-for="(item,k) in 10" :info="testData" :key="k"/>
  </div>
</template>

<script>

  import WxCell from '@/components/template/other/wx-cell'

  export default {
    components: {WxCell},
    data () {
      return {
        testData: {
          logo: 'http://b-ssl.duitang.com/uploads/item/201801/13/20180113134906_Qhva3.jpeg',
          nickname: '戴向天',
          desc: '你好，我叫戴向天。很高兴认识你！',
          time: '20:24'
        }
      }
    }
  }

</script>
