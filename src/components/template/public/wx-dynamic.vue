<template>

  <div class="wx-dynamic pad-l-30 pad-r-30 flex pad-t-30 pad-b-30 br-b-e">

    <wx-image :src="config.face" :width="0.86" :height="0.86" :fillet="0.1"/>
    <div class="flex-1 mar-l-30">
      <div class="fon-size-38 col-link">{{config.nickname}}</div>
      <wx-html :html="config.hide && !showAll ?config.body:config.text" class="mar-t-20 mar-b-20 fon-size-38 lineH-40"/>

      <span class="col-link fon-size-38" v-if="config.hide && !showAll" @click="showAll = !showAll">全文</span>

      <div class="flex flex-wrap flex-bt mar-t-30" v-if="config.pictures.length">
        <wx-image class=" mar-b-15"
                  @click="openPicture(key)"
                  :width="1.8" :height="1.8" :src="src" v-for="(src,key) in config.pictures"
                  :key="key"/>
      </div>
      <div class="flex flex-bt h-40 flex-y-center">
        <span class="col-9">{{formatTime(config.time,'computed')}}</span>
        <div class="flex flex-y-center">
          <div class="bg-0 col-f flex mar-r-30 br-ra-8" v-show="showOperation">
            <span class="col-f h-40 flex flex-y-center pad-r-20 pad-l-20 pad-t-20 pad-b-15 fon-size-28">
              <i class="iconfont iconheart col-f mar-r-10"></i>赞
            </span>
            <span class="col-f h-40 flex flex-y-center pad-r-20 pad-l-20 pad-t-20 pad-b-15 fon-size-28">
              <i class="iconfont iconue603comment col-f mar-r-10"></i>评论
            </span>
            <dd></dd>
          </div>
          <i class="iconfont iconcomment1 col-9 fon-size-38" @click="operation"></i>
        </div>

      </div>

      <div class="bg-e pad-t-20 pad-b-20 pad-l-20 pad-r-20 mar-t-30" v-if="config.comments">
        <div class="fon-size-28 mar-b-10" v-for="(comment,key) in config.comments">
          <span class="col-link fon-size-28">{{comment.nickname}}</span>
          <span class="col-3 fon-size-28" v-if="comment.reply">回复
              <span class="col-link fon-size-28">{{comment.reply.nickname}}</span>
            </span>：{{comment.body}}
        </div>
      </div>
    </div>

  </div>

</template>
<script>
  import WxImage from './wx-image'
  import WxHtml from './wx-html'

  export default {
    components: {WxHtml, WxImage},
    props: {
      config: {
        type: Object,
        default: Object
      }
    },
    data () {
      return {
        showOperation: false,
        showAll: false
      }
    },
    methods: {
      operation () {
        this.showOperation = !this.showOperation
      },
      openPicture(index){
        this.$root.$children[0].openPictureView({pictures:this.config.pictures,index});
      }
    },
    created () {
    }
  }
</script>
