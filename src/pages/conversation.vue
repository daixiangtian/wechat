<template>
  <div>
    <wx-conversation-title :title="getFriendInfo.remarks || getFriendInfo.nickname"/>
    <div class="pad-l-30 pad-r-30 over-a pad-t-30 pad-b-30 bg-f min-h_100">
      <div
        v-for="(item,key) in getConversationList"
        :key="key"
      >

        <div v-if="item.type == 'other'" class="flex">
          <face :src="item.face" :size="86"/>
          <div class="flex-1 pad-r-150 pad-l-30 mar-l-15 pad-t-30">
            <span class="fon-size-28 pad-t-15 pad-b-15 pad-l-15 pad-r-15  bg-d br-ra-10 lineH-48">{{item.body}}</span>
          </div>
        </div>

        <div v-if="item.type == 'self'" class="flex">
          <div class="flex-1 pad-l-150 mar-r-15 pad-r-30 pad-t-30 flex flex-x-end">
            <span class="fon-size-28 pad-t-15 pad-b-15 pad-l-15 pad-r-15 bg-d br-ra-10 lineH-48">{{item.body}}</span>
          </div>
          <face :src="item.face" :size="86"/>
        </div>
      </div>
    </div>
    <wx-comment :userId="userId"/>
  </div>

</template>

<script>
  import WxHeader from '../components/template/wx-header'
  import Face from '../components/template/user/face'
  import WxComment from '../components/template/other/wx-comment'
  import {mapState} from 'vuex'
  import WxConversationTitle from '../components/template/other/wx-conversation-title'

  export default {
    components: {WxConversationTitle, Face, WxHeader,WxComment},
    data () {
      return {
        userId: null,
      }
    },
    computed: {
      ...mapState({
        conversationList: s => s.conversationList,
        friends: s => s.friends
      }),
      getConversationList () {
        if (this.userId) {
          return this.conversationList[this.userId]
        } else {
          return []
        }
      },
      getFriendInfo () {
        if (this.userId) {
          return this.friends[this.userId]
        } else {
          return {}
        }
      }
    },
    created () {
      this.userId = +this.$route.query.userId
    }
  }

</script>
