<template>


  <div id="friendsCircle" class="">

    <div class="posi-r">
      <wx-image
        src="http://t12.baidu.com/it/u=1891290512,460032970&fm=175&app=25&f=JPEG?w=640&h=360&s=1F2765817670578ECE9CECDC0300C0B8"
        :width="7.5"
        :height="5"
      />
      <div class="posi-a r0 b0 mar-b-090 mar-r-30 flex">
        <div class="fon-size-30 col-f mar-r-30 pad-t-30 text-s-0">{{self.nickname}}</div>
        <wx-image :src="self.face" :width="1.8" :height="1.8" :fillet="0.2"/>
      </div>
    </div>
    <div class="mar-t-90">
      <wx-dynamic :config="config" v-for="(config,key) in getDynamicList" :key="key"/>
    </div>


  </div>

</template>
<script>
  import WxImage from '../components/template/public/wx-image'
  import Face from '../components/template/user/face'

  import {mapState} from 'vuex'
  import WxDynamic from '../components/template/public/wx-dynamic'

  export default {
    components: {WxDynamic, Face, WxImage},
    data () {
      return {
        dynamicList: [{
          face: 'https://b-ssl.duitang.com/uploads/people/201607/15/20160715152438_SksrF.jpeg',
          nickname: '量子位',
          body: 'IEEE，Institute of Electrical and Electronics Engineers，国际电气与电子工程师协会，当今世界电子、电气、计算机、通信、自动化工程技术研究领域最著名、规模最大的非营利性跨国学术组织。\n' +
            '然而现在，IEEE被曝对华为说不。\n' +
            '最新曝光的相关邮件要求，禁止华为员工作为旗下期刊杂志的编辑和审稿人。\n' +
            '接下来，华为相关的投稿、文章、会议赞助，以及分支协会职务，可能都会受到关联影响。\n' +
            '难怪有网友惊呼：',
          pictures: [
            'http://p9.pstatp.com/large/pgc-image/52dc33d30d9c4f5faa78cea9dfdfc371',
            'http://p1.pstatp.com/large/pgc-image/bb9fd836e0b3473d8fbbd2b8090e3c20',
            'http://p1.pstatp.com/large/pgc-image/9fed0c79e643472d800aba5cc6ba7c9c',
            'http://p3.pstatp.com/large/pgc-image/bc56ab659290443abbbeac0860d4c95f',
          ],
          time: '1559659534939',
          comments: [
            {
              face: 'https://a-ssl.duitang.com/uploads/item/201903/22/20190322154414_yfffp.thumb.700_0.jpeg',
              nickname: 'A阿勇',
              body: '华为系统出来，我第一批购买。等这一天头发快白了',
            },
            {
              face: 'https://b-ssl.duitang.com/uploads/item/201905/07/20190507002742_vQtGR.thumb.700_0.jpeg',
              nickname: 'like 739',
              body: '我买华为鸿蒙系统手机，就算有缺陷我也绝不吐槽，我会跟厂家交换改进意见，如果中国人都这样，鸿蒙系统会在短短几年内彻底完善。华为，十四亿中国人贴钱给你打工。',
              reply: {
                userId: 5,
                nickname: 'A阿勇'
              }
            }, {
              face: 'https://p3.pstatp.com/thumb/173b90029b06c46d3f760',
              nickname: '漫长的告别78899076',
              body: '在商言商。就像苹果说，以后苹果不支持微信支付宝。你看看结果怎么样。系统阿里早就做出来了。就是没有基数，所以根本不能推广。就像当年米聊和微信。安卓不会那么傻',

            }, {
              face: 'https://p0.pstatp.com/origin/3797/2889309425',
              nickname: '用户828013239681',
              body: '联想苟且偷生、中兴秒跪、只有华为在战斗！其中很重要一点，华为没有上市，如果是上市公司这么多的不利消息就让华为倒下了。',
            },
          ]
        }]
      }
    },
    methods: {
      formatBody (body) {
        let hide = false
        if (!body) return {body, hide}

        if (body.length > 60) {
          body = body.slice(0, 60)
          body += body + '...'
          hide = true
        }
        return {
          hide,
          body
        }
      }
    },
    computed: {
      ...mapState({
        self: s => s.self
      }),
      getDynamicList () {
        return this.dynamicList.map(item => {

          let dynamic = this.formatBody(item.body)
          return {
            face: item.face,
            nickname: item.nickname,
            text: item.body,
            ...dynamic,
            time: item.time,
            comments: item.comments || [],
            pictures: item.pictures || []
          }
        })
      }
    }
  }
</script>
