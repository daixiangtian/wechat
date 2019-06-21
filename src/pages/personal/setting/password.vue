<template>

  <div class="pad-r-30 pad-l-30 pad-t-30 pad-b-30">
    <p class="col-9 fon-size-26 lineH-36">请设置微信密码。你可以用微信绑定的帐号+微信密码登录，比如使用手机号+微信密码登录微信，更快捷</p>

    <div class="flex mar-t-50 br-b-b h-80">
      <span class="col-9 fon-size-36 min-w-180 flex-0">微信号</span><span class="col-9 fon-size-36">J809002582</span>
    </div>
    <ul class="mar-b-30">
      <li class="flex flex-y-center pad-t-15 pad-b-15">
        <span class=" fon-size-36 min-w-180 flex-0">原密码</span>
        <input placeholder="填写原密码"
               class="fon-size-36 flex-1 br-e pad-l-10 pad-r-10 outline-n bg-e h-80"
               @focus="index = 0"
               :class="index == 0 && 'br-b-main'"
        />
      </li>
      <li class="flex flex-y-center pad-t-15 pad-b-15">
        <span class=" fon-size-36 min-w-180 flex-0">新密码</span>
        <input placeholder="填写新密码"
               class="fon-size-36 flex-1 br-e pad-l-10 pad-r-10 outline-n bg-e h-80"
               @focus="index = 1"
               :class="index == 1 && 'br-b-main'"
        />
      </li>
      <li class="flex flex-y-center pad-t-15 pad-b-15">
        <span class=" fon-size-36 min-w-180 flex-0">确认密码</span>
        <input placeholder="再次填写确认"
               class="fon-size-36 flex-1 br-e pad-l-10 pad-r-10 outline-n bg-e h-80"
               @focus="index = 2"
               :class="index == 2 && 'br-b-main'"
        />
      </li>
    </ul>
    <p class="col-9 fon-size-26">密码必须是8-16位的数字、字符组合（不能是纯数字）</p>
    <span class="col-link  fon-size-26">忘记密码？</span>
  </div>

</template>

<script>

  export default {
    data () {
      return {
        index: null
      }
    }
  }

</script>
