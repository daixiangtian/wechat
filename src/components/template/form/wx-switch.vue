<template>
  <div class="h-50 br-ra-50 br-e w-100 posi-r tr-du-3"
       :class="value?'bg-main':'bg-f'"
       @click.stop="change">
    <div class="posi-a w-50 h-50 br-r-c shadow-rb bg-f tr-du-3"
         :class="value?'r0':'l0'"
    ></div>
  </div>
</template>
<script>

  import {showDialog} from '../../../until/wx-until'

  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      deliver: {
        type: Boolean,
        default: false,
      },
      confirm: {
        type: String,
        default: null
      }
    },
    methods: {
      async change () {

        if (this.confirm) {
          if (await showDialog(this.confirm)) {
            this.$emit('input', !this.value)
            this.$emit('change', this.value)
          }
        } else {
          this.$emit('input', !this.value)
          this.$emit('change', this.value)
        }
      }
    }
  }

</script>
