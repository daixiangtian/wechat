import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/pages/container'
import WxFirst from '@/pages/first'
import WxMailList from '@/pages/mail-list'
import WxPersonal from '../pages/personal/container'
import WxFind from '../pages/find/container'
import WxConversation from '@/pages/conversation'
import WxFriendsCircle from '@/pages/friends-circle'
import WxRegister from '../pages/register'
import WxLogin from '../pages/login'
import WxAddFriend from '../pages/common/add-friend'

import {PersonalRouter} from './personal/personal-router'
import {FindRouter} from './find/find-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:
    [
      {
        path: '/',
        name: 'Container',
        component: Container,
        children: [
          {
            path: '/',
            meta: {title: '注册'},
            name: 'WxRegister',
            component: WxRegister
          },
          {
            path: 'first',
            meta: {title: '微信', showFooter: true, index: 0},
            name: 'WxFirst',
            component: WxFirst
          }, {
            path: 'mailList',
            meta: {title: '通讯录', showFooter: true, index: 1},
            name: 'WxMailList',
            component: WxMailList
          }, {
            path: 'find',
            meta: {title: '发现', showFooter: true},
            name: 'WxFind',
            component: WxFind,
            children: FindRouter
          }, {
            path: 'personal',
            meta: {title: '我的', showFooter: true},
            name: 'WxPersonal',
            component: WxPersonal,
            children: PersonalRouter
          }, {
            path: 'conversation',
            meta: {title: '对话', showComment: true},
            name: 'WxConversation',
            component: WxConversation
          }, {
            path: 'friendsCircle',
            meta: {title: '朋友圈'},
            name: 'WxFriendsCircle',
            component: WxFriendsCircle
          }, {
            path: 'login',
            meta: {title: '登录'},
            name: 'WxLogin',
            component: WxLogin
          }, {
            path: 'addFriend',
            meta: {title: '添加朋友'},
            name: 'WxAddFriend',
            component: WxAddFriend
          }
        ]
      }
    ]
})
