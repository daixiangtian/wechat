<template>

  <div class="bg-e posi-r">
    <div class="flex flex-center fon-size-48">
      <slot name="cover"/>
      <input type="file" accept="image/*" ref="wxFile" @change="getFiles" :multiple="multiple"
             class="posi-a w100 h100 t0 l0 op-0 "/>

    </div>
  </div>
</template>

<script>

  import WxImage from '../public/wx-image'

  export default {
    components: {WxImage},
    props: {
      multiple: {     //是否可以多选，默认false => 单选
        type: Boolean,
        default: false
      },
      value: {
        default: ''
      }
    },
    data () {
      return {
        urls: [],
      }
    },
    methods: {
      getFiles (e) {
        const files = this.$refs.wxFile.files
        this.urls = []
        for (let f in files) if (parseInt(f) >= 0) this.urls.push(URL.createObjectURL(files[f]))

        this.log(this.value, this.getType(this.value, 'string'))

        this.log(this.getType(this.value));
        this.log(this.value);
        this.log(this.getType(this.value, 'string'));

        this.getType(this.value, 'string')
          ? this.$emit('input', this.urls[0])
          : this.getType(this.value, 'array')
          ? this.$emit('input', this.urls) : void 0

        this.$emit('change', {
          url: this.urls,
          files,
        })

      }
    }
  }

</script>
