<template>

  <div class="" ref="wxHtml" v-html="html"></div>

</template>

<script>

  export default {
    props: {
      html: String
    },
    methods: {
      load () {
        if (this.$refs.wxHtml) {
          const wxHtml = this.$refs.wxHtml
          const images = wxHtml.querySelectorAll('img')
          this.$emit('load', {
            name: 'wx-dynamic',
            value: {
              images,
              innerText: wxHtml.innerText
            }
          })
        } else {
          window.requestAnimationFrame(this.load)
        }
      }
    },
    created () {
      this.load()
    }
  }

</script>
