<template>

  <div class="posi-f l0 r0 b0 t0 bg-0 z-10" v-if="value">
    <div class="posi-a pad-l-30 pad-r-30 pad-t-30 pad-b-30 col-f fon-size-32">
      <span class="fon-size-48 col-f">{{~key + 2}}</span>/<span class="fon-size-30  col-f">{{pictures.length}}</span>
    </div>
    <ul class="h_100 flex" ref="wxPicBox" :style="{width:`${getScreenWH().width * pictures.length }px`}">
      <li
        class="flex flex-center w_100 h_100"
        v-for="(src,key) in pictures"
        :key="key">
        <img :src="src" class="max-w_100 max-h_100">
      </li>
    </ul>
  </div>

</template>

<script>

  export default {
    props: {
      pictures: {
        type: Array,
        default: []
      },
      index: {
        type: Number,
        default: 1
      },
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        key: 0
      }
    },
    methods: {
      bindTouch () {
        console.log('bindTouch')
        if (this.$refs.wxPicBox) {
          console.log('this.$ref.wxPicBox', this.$refs.wxPicBox)
          const dom = this.$refs.wxPicBox,
            that = this
          this.key = -this.index

          dom.style.transform = `translateX(${this.key * that.getScreenWH().width}px)`

          let data = {
            traX: 0,
          }
          this.touch({
            dom,
            start () {
              data.traX = dom.style.transform ? dom.style.transform.split('(')[1].split(')')[0] : 0
              dom.style.transitionDuration = '0ms'
            },
            move ({dx}) {
              dom.style.transform = `translateX(${parseFloat(data.traX) + dx}px)`
            },
            end ({dx}) {
              if (!dx) that.$emit('input', false)
            },
            change ({direction}) {
              dom.style.transitionDuration = '300ms'
              switch (direction) {
                case 'left':
                  that.key--
                  break
                case 'right':
                  that.key++
                  break
                case 'origin':
                  that.$emit('input', false)
                  return
              }

              if (that.key < 0 && Math.abs(that.key) >= that.pictures.length - 1) that.key = -(that.pictures.length - 1)
              if (that.key >= 0) that.key = 0

              dom.style.transform = `translateX(${that.key * that.getScreenWH().width}px)`

            }
          })

        } else {
          window.requestAnimationFrame(this.bindTouch)
        }
      }
    },
    watch: {
      value (nowValue) {
        nowValue && this.bindTouch()
      }
    },
    created () {
      this.value && this.bindTouch()
    }
  }


</script>
