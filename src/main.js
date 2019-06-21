// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store'

import {PlugIn} from './until/plugIn'

Vue.config.productionTip = false

import WxDiv from './components/template/public/wx-div'
import WxCell from './components/template/other/wx-cell'
import WxSwitch from './components/template/form/wx-switch'


Vue.use(PlugIn)
Vue.component('WxDiv', WxDiv)
Vue.component('WxCell', WxCell)
Vue.component('WxSwitch', WxSwitch)


/* eslint-disable no-new */
new Vue({
  el: '#wechat',
  router, store,
  components: {App},
  template: '<App/>'
})
