import SettingIndex from '../../pages/personal/setting/index'
import AccountSecurity from '../../pages/personal/setting/account-security'
import SettingContainer from '../../pages/personal/setting/container'
import BindPhone from '../../pages/personal/setting/bind-phone'
import SetPassword from '../../pages/personal/setting/password'
import Soundlock from '../../pages/personal/setting/sound-lock'
import EmergencyContact from '../../pages/personal/setting/emergency-contact'
import EquipmentManager from '../../pages/personal/setting/equipment-manager'
import MoreSecurity from '../../pages/personal/setting/more-security'
import NewMessageTips from '../../pages/personal/setting/new-message-tips'
import NotDisturb from '../../pages/personal/setting/not-disturb'
import Chat from '../../pages/personal/setting/chat'
import Privacy from '../../pages/personal/setting/privacy'
import Currency from '../../pages/personal/setting/currency'
import AboutWx from '../../pages/personal/setting/about-wx'
import ChangeAccount from '../../pages/personal/setting/change-account'

export const SettingRouter = [
  {
    path: '/',
    meta: {title: '设置'},
    name: 'SettingIndex',
    component: SettingIndex
  }, {
    path: 'accountSecurity',
    meta: {title: '帐号与安全'},
    name: 'SettingContainer',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '帐号与安全'},
        name: 'AccountSecurity',
        component: AccountSecurity,
      }, {
        path: 'bindPhone',
        meta: {title: '绑定手机号'},
        name: 'BindPhone',
        component: BindPhone
      }, {
        path: 'password',
        meta: {title: '设置密码'},
        name: 'SetPassword',
        component: SetPassword
      }, {
        path: 'soundLock',
        meta: {title: '声音锁'},
        name: 'SoundLock',
        component: Soundlock
      }, {
        path: 'emergencyContact',
        meta: {title: '应急联系人'},
        name: 'EmergencyContact',
        component: EmergencyContact
      }, {
        path: 'equipmentManager',
        meta: {title: '登录设备管理'},
        name: 'EquipmentManager',
        component: EquipmentManager
      }, {
        path: 'moreSecurity',
        meta: {title: '更多安全设置'},
        name: 'MoreSecurity',
        component: MoreSecurity
      }
    ]
  }, {
    path: 'newMessageTips',
    name: 'SettingContainer2',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '新消息提醒'},
        name: 'NewMessageTips',
        component: NewMessageTips,
      }
    ]
  }, {
    path: 'notDisturb',
    name: 'SettingContainer3',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '勿扰模式'},
        name: 'NotDisturb',
        component: NotDisturb
      }
    ]
  }, {
    path: 'chat',
    name: 'SettingContainer4',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '聊天'},
        name: 'SettingChat',
        component: Chat
      }
    ]
  }, {
    path: 'privacy',
    name: 'SettingContainer5',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '隐私'},
        name: 'Privacy',
        component: Privacy
      }
    ]
  }, {
    path: 'currency',
    name: 'SettingContainer6',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '通用'},
        name: 'currency',
        component: Currency
      }
    ]
  }, {
    path: 'aboutWx',
    name: 'SettingContainer7',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '关于微信'},
        name: 'AboutWx',
        component: AboutWx
      }
    ]
  },{
    path:'changeAccount',
    name: 'SettingContainer8',
    component: SettingContainer,
    children: [
      {
        path: '/',
        meta: {title: '切换帐号'},
        name: 'ChangeAccount',
        component: ChangeAccount
      }
    ]
  }
]
