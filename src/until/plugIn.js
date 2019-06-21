import {
  formatTime,
  getMaxZIndex,
  getSuccessData,
  getType,
  isPhone,
  operation,
  showDialog,
  touch,
} from './wx-until'
import {backstageUrl, isDev} from '../project-config'

const PlugIn = new Object(null)

PlugIn.install = function (Vue, option) {
  Vue.mixin({
    data () {
      return {
        backstageUrl
      }
    },
    methods: {
      log (v) {   //如果是开发的时候就会进行输出打印
        isDev && console.log(v)
      },
      alert (v) {//如果是开发的时候就会进行弹窗提示
        isDev && alert(v)
      },
      getImageRightPath(url){
        return this.backstageUrl + url
      },
      goPointPage (params = {}) {
        if (this.getType(params, 'json')) {
          this.$router.push(params)
        } else if (this.getType(params, 'string')) {
          this.$router.push(params)
        }
      },
      getType,
      formatTime,
      getScreenWH () {
        return {
          width: window.screen.width,
          height: window.screen.height
        }
      },
      touch,
      /** 获取当前页面z-index最高的层级 */
      getMaxZIndex,
      showDialog,
      operation,
      getSuccessData,
      isPhone
    }
  })
}

export {PlugIn}
