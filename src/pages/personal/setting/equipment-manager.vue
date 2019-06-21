<template>

  <div>
    <wx-div :pad="[0.3]" :fon-s="0.26" c="#666">
      最近登录设备：你可以删除列表中的设备，删除后在该设备登录微信需要进行身份验证
    </wx-div>
    <wx-div bg="#fff" :pad="[0,0,0,0.3]">
      <ul>
        <li class="br-b-e flex flex-bt flex-y-center pad-t-15 pad-b-15" v-for="i in 10" :key="i">
          <div>
            <div class="fon-size-30">SKY-20180618PZC</div>
            <p class="fon-size-30 col-9">19-06-11 10:36:32</p>
          </div>
          <div>
            <i class="iconfont iconright col-9"></i>
          </div>
        </li>
      </ul>
    </wx-div>

  </div>

</template>
