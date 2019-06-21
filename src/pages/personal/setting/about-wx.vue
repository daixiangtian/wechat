<template>
  <div class="bg-f h_100 flex-d-c flex-bt flex">
    <div>
      <wx-div :h="4" class="flex flex-center">
        <div class=" t-c">
          <div class="mar-b-50">
            <i class="iconfont col-main iconweixinzhifu" style="font-size: 1.2rem"></i>
          </div>
          <div>
            <h3><b class="fon-size-38">微信WeChat</b></h3>
            <p class="fon-size-28">Version 7.0.4</p>
          </div>
        </div>
      </wx-div>
      <div class="mar-l-30 mar-r-30 br-t-e br-b-e">
        <wx-cell :info="{nickname:'功能介绍'}" :more="true"/>
        <wx-cell :info="{nickname:'投诉'}" :more="true"/>
        <wx-cell :info="{nickname:'检查新版本'}" :hide-br="true" :more="true"/>
      </div>
    </div>


    <div class="t-c pad-b-30">
      <p class="col-link">《微信软件许可及服务协议》</p>
      <span>和</span>
      <p class="col-link">《微信隐私保护指引》</p>
      <p class="col-9">TX公司 版权所有</p>
      <p class="col-9">Copyright © 2011-2019 Clover.</p>
      <p class="col-9">All Rights Reserved.</p>
    </div>
  </div>
</template>
