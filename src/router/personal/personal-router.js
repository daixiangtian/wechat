import PersonalIndex from '../../pages/personal/index'
import Pay from '../../pages/personal/pay'
import Photos from '../../pages/personal/photos'
import Collection from '../../pages/personal/collection'
import Emoji from '../../pages/personal/emoji'
import SettingContainer from '../../pages/personal/setting/container'
import CardBag from '../../pages/personal/cardBag'

import {SettingRouter} from './setting'

export const PersonalRouter = [
  {
    path: '/',
    meta: { showFooter: true, index: 3},
    name: 'PersonalIndex',
    component: PersonalIndex,
  }, {
    path: 'pay',
    meta: {title: '支付'},
    name: 'Pay',
    component: Pay
  }, {
    path: 'photos',
    meta: {title: '相册'},
    name: 'Photos',
    component: Photos
  }, {
    path: 'collection',
    meta: {title: '收藏'},
    name: 'Collection',
    component: Collection
  }, {
    path: 'emoji',
    meta: {title: '表情'},
    name: 'Emoji',
    component: Emoji
  }, {
    path: 'cardBag',
    meta: {title: '卡包'},
    name: 'CardBag',
    component: CardBag

  }, {
    path: 'setting',
    meta: {title: '设置'},
    name: 'SettingContainer',
    component: SettingContainer,
    children:SettingRouter,
  },
]
