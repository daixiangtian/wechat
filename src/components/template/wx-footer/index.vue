<template>
  <div class="wx-footer posi-f l0 b0 w100 bg-f">
    <ul class="flex dh bg-f flex-y-center">
      <li class="flex-1 t-c"
          v-for="(item,key) in footerConfig"
          :key="key"

          @click="goPointPage(item.path)"
      >
        <div>
          <i class="iconfont font-40" :class="[item.icon,$route.meta.index == key &&'col-main']"></i>
        </div>
        <span :class="$route.meta.index  == key &&'col-main'">{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    data () {
      return {
        footerConfig: [
          {
            name: '微信',
            icon: 'iconcomment',
            path: 'first'
          }, {
            name: '通讯录',
            icon: 'iconcebianlan_tongxunlu',
            path: 'mailList'
          }, {
            name: '发现',
            icon: 'iconfaxian1',
            path: 'find'
          }, {
            name: '我的',
            icon: 'iconren',
            path: 'personal'
          }
        ]
      }
    }
  }

</script>
