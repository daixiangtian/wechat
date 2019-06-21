<template>
  <div class="bg-e over-h flex-center posi-r flex"
       @click.stop="$emit('click')"
       :style="{'width': width+unit,height: height+unit,'min-width':width+unit,'min-height':height+unit,'borderRadius':fillet?fillet+unit:''}">
    <img :src="src" class="dis-n" ref="ddImg" @load="layer">
    <slot/>
  </div>
</template>

<script>

  export default {
    props: {
      width: {
        type: Number,
        default: 0.45
      },
      height: {
        type: Number,
        default: 0.45
      },
      src: {
        type: String,
        default: ''
      },
      unit: {
        type: String,
        default: 'rem'
      },
      type: {
        type: String,
        default: 'auto'
      },
      fillet: {
        type: Number,
        default: 0
      },
    },
    methods: {
      layer() {
        let item = this.$refs.ddImg,
          parent = item.parentNode,
          pw = parent.clientWidth,
          ph = parent.clientHeight,
          w = item.width,
          h = item.height
        // 父级是一个正方形
        if (this.width == this.height) {
          if (w == h) {// 图片是正方形
            if (w >= pw) {
              item.style.width = '100%'
            } else {
              item.style.height = '100%'
            }
          } else if (w > h) { //图片是一个横向的矩形
            item.style.height = '100%'
          } else if (w < h) {   //图片是一个纵向的矩形
            item.style.width = '100%'
          } else {
            item.style.height = '100%'
          }
        } else if (this.width > this.height) {
          if (w == h) {// 图片是正方形
            item.style.width = '100%'
          } else if (w > h) { //图片是一个横向的矩形
            if (w > pw) {
              if (pw / w * h > ph) {
                item.style.width = '100%'
              } else {
                item.style.height = '100%'
              }
            } else {
              item.style.height = '100%'
            }
          } else if (w < h) {   //图片是一个纵向的矩形
            if (pw / w * h > ph) {
              item.style.width = '100%'
            } else {
              item.style.height = '100%'
            }
          } else {
            item.style.height = '100%'
          }
        }
        item.style.display = 'block'
      }
    }
  }
</script>
