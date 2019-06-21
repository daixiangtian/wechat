<template>

  <div class="mar-b-30 mar-t-30 mar-r-30 mar-l-30">

    <div class="bg-f flex-wrap flex pad-t-30 pad-l-30 pad-r-30 br-ra-10">
      <span class="col-link  w-155 t-c mar-b-30 "
            v-for="(item,key) in categoryList"
            :key="key">{{item.name}}</span>
    </div>

    <div class="bg-f pad-t-30 pad-l-30 pad-r-30 pad-b-30 mar-t-30 br-ra-10" v-for="(item,key) in collectionList"
         :key="key">
      <div class="" v-if="item.type == 1">
        <div v-if="item.content.images&&item.content.images.length > 0">
          <wx-image v-for="(image,s) in item.content.images" :key="s" :src="image.src" :width="1.5" :height="1.5"/>
        </div>
        <div v-if="item.content.videos&&item.content.videos.length > 0">
          <wx-image v-for="(video,s) in item.content.videos" :key="s" :src="video.src" :width="1.5" :height="1.5">
            <i class="iconfont iconplay2 posi-a text-s-0 col-f font-68"></i>
            <span class="col-f posi-a r0 b0 mar-r-10 text-s-0 mar-b-10">{{video.longTime}}</span>
          </wx-image>
        </div>

      </div>
      <div class="" v-else-if="item.type == 2">
        <wx-cell class="pad-l-0" :info="getLinkInfo(item.content.link)" :hideBr="true"/>
      </div>
      <div class="" v-else-if="item.type == 3"></div>
      <div class="" v-else-if="item.type == 4"></div>
      <div class="" v-else-if="item.type == 5">
        <div class="fon-size-28 lineH-32">{{item.content.context}}</div>
      </div>
      <div class="" v-else-if="item.type == 6"></div>
      <div class="" v-else-if="item.type == 7"></div>
      <div class="" v-else-if="item.type == 8"></div>
      <p class="col-9 fon-size-20 mar-t-20">{{item.from}} <span
        class="col-9">{{formatTime( item.time,'computed')}}</span></p>
    </div>
  </div>

</template>


<script>

  import WxImage from '../../components/template/public/wx-image'
  import WxCell from '../../components/template/other/wx-cell'

  /**
   *
   *  type : {
   *      1 :图片与视频
   *      2 :链接
   *      3 :文件
   *      4 :音乐
   *      5 :聊天记录
   *      6 :语音
   *      7 :笔记
   *      8 :位置
   *  }
   *
   * */

  export default {
    components: {WxCell, WxImage},
    data () {
      return {
        categoryList: [
          {name: '图片与视频'},
          {name: '链接'},
          {name: '文件'},
          {name: '音乐'},
          {name: '聊天记录'},
          {name: '语音'},
          {name: '笔记'},
          {name: '位置'},
        ],
        collectionList: [
          {type: 5, content: {context: '你这个老司机，坏得很！'}, from: '向天交流群', time: 1560088532992},
          {
            type: 1, content: {
              images: [{src: 'http://n.sinaimg.cn/sinacn03/281/w640h441/20180327/561f-fysqfnh1454464.jpg'}]
            }, from: '向天交流群', time: 1560088532992
          }, {
            type: 1, content: {
              videos: [{
                src: 'http://n.sinaimg.cn/sinacn03/281/w640h441/20180327/561f-fysqfnh1454464.jpg',
                longTime: 6 * 1000
              }]
            }, from: '向天交流群', time: 1560088332992
          }, {
            type: 2, content: {
              link: {
                src: 'https://www.baidu.com/',
                title: '百度一下',
                cover: 'https://pic.jycypt.com/images/2/2017/08/L7KzHxv6h8Vm8HOh4HE8oEEdDFkKK8.jpg'
              },
            }, from: '向天交流群', time: 1560088232992
          },
        ]
      }
    },
    methods: {
      getLinkInfo (linkInfo) {
        return {
          logo: linkInfo.cover,
          nickname: linkInfo.title,
          logoSize: 100,
          fontSize:32
        }
      }
    }
  }

</script>
