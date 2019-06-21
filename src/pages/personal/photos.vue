<template>

  <div class="bg-f">
    <div class="posi-r br-b-e">
      <div class="flex h-80 flex-y-center">
        <div class="flex-1 t-c col-main fon-size-28">朋友圈相册</div>
        <div class="flex-1 t-c col-6 fon-size-28">视频动态</div>
      </div>
    </div>

    <div class="flex pad-l-30 pad-r-30 pad-t-30" v-for="(source,s) in sourceMap" :key="s">
      <div class="font-40 w-120 t-c">{{source.month}}</div>
      <div class="flex-1 flex flex-wrap flex-bt pad-l-30 pad-r-30">
        <wx-image v-for="(item,key) in source.images" class="mar-b-30" :width="1.6" :height="1.6" :key="key" :src="item.src">
          <i class="iconfont iconplay2 posi-a text-s-0 col-f font-68" v-if="item.type == 2"></i>
        </wx-image>
      </div>
    </div>

  </div>
</template>
<script>
  import WxImage from '../../components/template/public/wx-image'

  export default {
    components: {WxImage},
    data () {
      return {
        sourceMap: [
          {
            month: '今天',
            images: [
              {type:1,src: 'https://a-ssl.duitang.com/uploads/item/201901/25/20190125110350_QKxzz.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/item/201901/23/20190123182420_y3vi5.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/people/201903/06/20190306153332_vuVaT.thumb.36_36_c.jpeg'},
              {type:2,src: 'https://hbimg.huabanimg.com/651377be47ebb7d776e150a58c870cf3aa79f8dddf47-WAe0dF_fw658'},
            ]
          },{
            month: '本周',
            images: [
              {type:1,src: 'https://a-ssl.duitang.com/uploads/item/201901/25/20190125110350_QKxzz.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/item/201901/23/20190123182420_y3vi5.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/people/201903/06/20190306153332_vuVaT.thumb.36_36_c.jpeg'},
              {type:2,src: 'https://hbimg.huabanimg.com/651377be47ebb7d776e150a58c870cf3aa79f8dddf47-WAe0dF_fw658'},
            ]
          },{
            month: '6月',
            images: [
              {type:1,src: 'https://a-ssl.duitang.com/uploads/item/201901/25/20190125110350_QKxzz.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/item/201901/23/20190123182420_y3vi5.thumb.700_0.jpeg'},
              {type:1,src: 'https://b-ssl.duitang.com/uploads/people/201903/06/20190306153332_vuVaT.thumb.36_36_c.jpeg'},
              {type:2,src: 'https://hbimg.huabanimg.com/651377be47ebb7d776e150a58c870cf3aa79f8dddf47-WAe0dF_fw658'},
            ]
          }
        ]
      }
    }
  }
</script>
