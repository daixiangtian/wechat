import Vue from 'vue'
import Vuex from 'vuex'
import {requestByGet, requestByPost, requestUploadFiles} from '../until/request'
import {getSuccessData} from '../until/wx-until'
import {API} from '../until/api'

Vue.use(Vuex)
export const store = new Vuex.Store({
  state: {
    self: {},
    friends: {
      '2': {
        nickname: '大白兔奶糖',
        face: 'https://b-ssl.duitang.com/uploads/item/201902/21/20190221125414_rsoui.thumb.700_0.jpeg',
        userId: 2,
        tel: '150****8451',
        city: '武汉',
        sex: 0,
        sign: '看什么看，没见过美女么？',
        remarks: '小甜心'
      }
    },
    conversationList: {
      '2': [],
    },
  },
  mutations: {
    PUSH_COMMENT (state, params) {
      if (params.userId && params.friendsUserId) {
        let obj = state.conversationList[params.friendsUserId]
        if (obj) {
          state.conversationList[params.friendsUserId].push(params)
        } else {
          state.conversationList[params.friendsUserId] = [params]
        }
      }
    },
    UPDATE_SELF_INFO (state, params) {
      state.self = params
    }
  },
  actions: {
    async pushComment ({commit}, params) {
      await commit('PUSH_COMMENT', params)
      return {
        code: 200
      }
    },
    async registerUsre ({commit}, params) {

      const {data} = await requestByPost(API.register, params)

      if (data.code == 200) {
        commit('UPDATE_SELF_INFO', params)

        localStorage.self = JSON.stringify(params);

      }
      return getSuccessData(data, {})

    },
    async uploadFile ({commit}, params) {
      const {data} = await requestUploadFiles(API.uploadImage, params)
      return getSuccessData(data, {})
    },
    async userLogin ({commit}, params) {
      const {data} = await requestByPost(API.login, params)

      if (data.data) {

        const self = {
          ...data.data,
          sessionKey: data.sessionKey
        }

        commit('UPDATE_SELF_INFO', self)
        localStorage.self = JSON.stringify(self);
      }

      return data

    }
  }
})
