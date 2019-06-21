<template>
  <div class="h_100 bg-f">
    <div class="t-c">
      <div class="tc pad-b-150">
        <i class="iconfont fon-size-98 iconweixin col-9"></i>
      </div>
      <div class="fon-size-48">轻触头像以切换帐号</div>
      <div class="flex flex-center mar-t-90">
        <div class="w-240 br-b-e"></div>
      </div>
    </div>
    <div class="mar-t-90">
      <ul class="flex-wrap flex flex-center">
        <li class="w-150 mar-l-30 mar-r-30 t-c">
            <wx-image
              class="mar-l-15"
              src="https://b-ssl.duitang.com/uploads/item/201906/10/20190610234430_EWLuU.thumb.700_0.jpeg"
              :width="1.2"
              :height="1.2"
            />
          <div class="hide-e fon-size-28 mar-t-20 mar-b-30">+86150****9115</div>
          <div class="flex flex-center fon-size-28 col-9  h-30">
            <span class="bg-main br-ra-20 w-15 h-15"></span>
            当前使用
          </div>
        </li>
        <li class="w-150 mar-l-30 mar-r-30 t-c">
          <wx-div :w="1.2" :h="1.2" class="mar-l-15 flex-center flex br-e">
            <i class="iconfont col-9 iconplus fon-size-48"></i>
          </wx-div>
          <div class="hide-e fon-size-28 mar-t-20 mar-b-30">切换帐号</div>
          <div class="flex flex-center fon-size-28 col-9 h-30">

          </div>
        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import WxImage from '../../../components/template/public/wx-image'
  export default {
    components: {WxImage}
  }
</script>
