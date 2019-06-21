<template>
  <div>
    <router-view/>
    <wx-picture-view ref="pic" v-model="pictureViewConfig.show" v-bind="pictureViewConfig"/>

  </div>
</template>

<script>

  import {mapActions, mapState} from 'vuex'
  import WxPictureView from './components/template/public/wx-picture-view'

  export default {
    name: 'App',
    components: {WxPictureView},
    data () {
      return {
        styleText: '',
        pictureViewConfig: {
          show: false,
          pictures: [],
          index: 0
        },
        arr: [
          // {key: '.z-', value: 'z-index:', unit: ''},
          // {key: '.min-w_', value: 'min-width:', unit: 'vw'},
          // {key: '.max-w_', value: 'max-width:', unit: 'vw'},
          // {key: '.w_', value: 'width:', unit: 'vw'},
          {key: '.op-', value: 'opacity:', unit: '', double: 0.1},

        ]
      }
    },
    methods: {
      openPictureView ({pictures, index = 0}) {
        if (pictures.length) {
          this.pictureViewConfig.pictures = pictures
          this.pictureViewConfig.index = index
          this.pictureViewConfig.show = true
        }
      }
    },
    computed: {
      ...mapState({
        contents: s => s.contents,
        self: s => s.self
      })
    },
    created () {
      // let str = ''
      // for (let item in this.arr) {
      //   for (let i = 0; i <= 10; i++) {
      //     str += `${this.arr[item].key}${i}{${this.arr[item].value}${(i * this.arr[item].double).toFixed(1)}${this.arr[item].unit}}`
      //   }
      // }
      // console.log(str)

      if (localStorage.self) {
        this.log('localStorage.self', localStorage.self)
        this.log(this)
        this.$store.commit("UPDATE_SELF_INFO",JSON.parse(localStorage.self))
      }

      if (!this.self.userId) this.goPointPage('/login')
    }
  }
</script>

<style lang="scss">
  @import "assets/css/wx-public";

</style>
