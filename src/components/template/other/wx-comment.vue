<template>

  <div class="posi-f b0 r0 l0 bg-e">
    <div class=" flex flex-y-center h-100 pad-l-15 pad-r-15">
      <div class="flex-0 mar-r-15 pad-l-30">
        <i class="iconfont icon84qiehuanyuyin fon-size-48"></i>
      </div>
      <div class="flex flex-1 bg-f hide-e br-ra-4">
        <input v-model="params.value.body" @keyup.enter="send"
               class="w100 br-n outline-n w100 hide-e h-70 pad-l-10 pad-r-10"/>
      </div>
      <div class="flex-0 flex flex-y-center h-40 pad-l-15">
        <span class="h-40 flex flex-y-center mar-l-15"><i class="iconfont iconemojilight  fon-size-48"></i></span>
        <span class="h-40 flex flex-y-center mar-l-15" v-if="!params.value.body"><i
          class="iconfont iconadd  fon-size-48"></i></span>
        <span
          v-else
          class="col-f bg-5FB878  h-50 flex-center flex mar-l-15 br-ra-10 w-80 flex-1"
          @click="send"
        >发送</span>
      </div>
    </div>
  </div>

</template>

<script>

  import {mapActions, mapState} from 'vuex'

  export default {
    name: 'WXComment',
    props: {
      userId: {
        type: Number,
        default: null,
      }
    },
    data () {
      return {
        params: {
          value: {
            body: '',
            type: 'self'
          }
        },
      }
    },
    methods: {
      ...mapActions(['pushComment']),
      AIComment (str) {
        // str = str.replace('吗', '')
        // str = str.replace(/?/, '!')
        // str = str.replace('你', '我')
        // str = str.replace('我', '')
        return '滚，别烦我'
      },

      async send () {

        if (this.userId) {
          const body = this.params.value.body

          if (body) {
            this.params.value.time = new Date().getTime()
            this.params.value.face = this.self.face
            this.params.value.userId = this.self.userId
            this.params.value.type = 'self'
            this.params.value.friendsUserId = this.userId
            const params = JSON.parse(JSON.stringify(this.params))
            const {code} = await this.pushComment(params.value)
            if (code == 200) {
              console.log('发送成功')
              this.params.value.body = null
              let newParams = JSON.parse(JSON.stringify(params))
              newParams.value.face = this.friends[this.userId].face
              newParams.value.type = 'other'
              newParams.value.body = this.AIComment(body)
             setTimeout(this.pushComment,1000,newParams.value)

            } else {
              console.log('发送失败')
            }
          }
        } else {
          console.log('无效的对话对象')
        }

      }
    },
    computed: {
      ...mapState({
        self: s => s.self,
        friends: s => s.friends
      })
    }
  }

</script>
