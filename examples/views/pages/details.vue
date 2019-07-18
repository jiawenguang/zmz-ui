<template>
  <div class="zmz-article--box">
    <zmz-article class="zmz-article--details">
      <zmz-breadcrumb segmenter="/" class="zmz-article--breadcrumb">
        <zmz-breadcrumb-item>首页</zmz-breadcrumb-item>
        <zmz-breadcrumb-item>内容页</zmz-breadcrumb-item>
        <zmz-breadcrumb-item>详情</zmz-breadcrumb-item>
      </zmz-breadcrumb>
      <zmz-header class="zmz-article__header">{{details.b_ar_title}}</zmz-header>
      <div class="zmz-article__user--info">
        <span>
          <i class="zmz-icon-user"></i>
          {{details.b_ar_author}}
        </span>
        <span>
          <i class="zmz-icon-time"></i>
          {{details.addtime}}
        </span>
        <span>
          <i class="zmz-icon-eye-l"></i>
          {{details.b_ar_readcount}}
        </span>
      </div>
      <zmz-section class="zmz-article__section">
        <div class="zmz-article--content" v-html="details.b_ar_content">
        </div>
      </zmz-section>
      <zmz-footer class="zmz-article__footer">
        <div class="zmz-article__footer__top">最后一次编辑于 {{details.addtime}} （{{$language.explain}}）</div>
        <div class="zmz-article__footer__bottom">
          <div class="footer__bottom__1">
            <span>
              <i></i>
              浏览
              <em>{{details.b_ar_readcount}}</em>
            </span>
            <span>
              <i></i>
              评论
              <em>{{details.b_ar_commendcount}}</em>
            </span>
          </div>
          <div class="footer__bottom__2">
            <span @click="followorcancel">关注问题</span>
            <span @click="writeAnAnswer(details.b_ar_id)">写回答</span>
          </div>
        </div>
      </zmz-footer>
    </zmz-article>
    <zmz-section class="zmz-article--comment">
      <div class="quill-deitor__box" v-show="isanswer">
        <div class="zmz-article__author">
          <span></span>
          <p>上九天揽月</p>
        </div>
        <!-- <quill-editor class="zmz-article__quill--deitor" ref="myTextEditor" :options="editorOption" v-model="content" :config="editorOption"></quill-editor> -->
         <zmz-textarea v-model="content"></zmz-textarea>
         <zmz-button @click="publish(id, '', '')">发表</zmz-button>
      </div>
      <div class="zmz-comment__box">
        <div class="zmz-comment__title">5个评论</div>
        <div class="zmz-comment__content">
          <div class="zmz-comment__li" v-for="(item,index) in commentList" :key="index">
            <div class="comment-item--info">
              <span></span>
              <p>{{item.com_username}}<small><zmz-formattime :horizontime="item.addtime"></zmz-formattime></small></p>
            </div>
            <div class="comment-item--content">
              {{item.com_content}}
            </div>
            <div class="comment-item--toolbar">
              <span>赞同</span>
              <span>没有帮助</span>
              <span @click="commentEvent(index,0,'parent')">评论</span>
              <span>复制</span>
            </div>
            <div class="comment-item--quill" v-if="item.iscomment">
              <div class="quill-deitor__box">
                <div class="zmz-article__author">
                  <span></span>
                  <p>上九天揽月</p>
                </div>
                <!-- <quill-editor class="zmz-article__quill--deitor" ref="myTextEditor" :options="editorOption" v-model="content" :config="editorOption"></quill-editor> -->
                <zmz-textarea v-model="content"></zmz-textarea>
                <div class="zmz-article__post"><span @click="publish(id, item.com_id, '')">回复</span><span>收起</span></div>
              </div>
            </div>
            <div class="zmz-comment__content" v-if="item.children&&item.children.length>0">
              <div class="zmz-comment__li" v-for="(items,indexs) in item.children" >
                <div class="comment-item--info">
                  <span></span>
                  <p v-if="item.com_id==items.com_cid&&items.com_rid==0">1{{items.com_username}} 回复 {{getname(item.com_id)}}<small><zmz-formattime :horizontime="items.addtime"></zmz-formattime></small></p>
                  <p v-else>{{items.com_username}} 回复 {{getname(items.com_rid)}}<small><zmz-formattime :horizontime="items.addtime" ></zmz-formattime></small></p>
                </div>
                <div class="comment-item--content">
                  {{item.com_content}}
                </div>
                <div class="comment-item--toolbar">
                  <span>赞同</span>
                  <span>没有帮助</span>
                  <span @click="commentEvent(index,indexs,'child')">评论</span>
                  <span>复制</span>
                </div>
                <div class="comment-item--quill" v-show="items.iscomment">
                  <div class="quill-deitor__box">
                    <div class="zmz-article__author">
                      <span><i class="zmz-icon-angerfill"></i></span>
                      <p>上九天揽月</p>
                    </div>
                    <!-- <quill-editor class="zmz-article__quill--deitor" ref="myTextEditor" :options="editorOption" :content="content" :config="editorOption"></quill-editor> -->
                    <zmz-textarea v-model="content"></zmz-textarea>
                    <div class="zmz-article__post"><span @click="publish(id, items.com_id, item.com_id)">回复</span><span>收起</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </zmz-section>
  </div>
</template>

<script>
import hljs from 'highlight.js'
// import { addQuillTitle } from '../public/quill-title.js'
import { GetBugDetails, PostComments, Follow } from '../../api/api.js'
export default {
  name: 'app',
  data () {
    return {
      content: '',
      editorOption: {
        placeholder: 'placeholder',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ],
          history: {
            // Enable with custom configurations
            delay: 2500,
            userOnly: true
          }
        },
        readOnly: true,
        theme: 'snow',
        syntax: {
          highlight: text => hljs.highlightAuto(text).value
        }
      },
      id: '',
      details: {},
      commentList: [],
      oldcommentList: [],
      isanswer: false,
      userinfo: {},
      suffixtext: {Y: '年前新', M: '月前新', W: '周前新', D: '天前新', H: '小时前新', B: '分钟前新', S: '刚刚新'}
    }
  },
  watch: {
    '$route': 'getQuery'
  },
  mounted () {
    // addQuillTitle()
    this.getBugList()
    console.log(this)
    console.log(this.$language)
  },
  methods: {
    followorcancel () {
      var that = this
      var param = {
        userid: this.userinfo.jwg_id,
        articleid: this.id
      }
      Follow(param).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          that.$message(res.data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    publish (parentid, childid, replyid) {
      var that = this
      var param = {
        parentid: parentid,
        childid: childid,
        replyid: replyid,
        content: this.content,
        userid: 'a937a6e6fd89aa969c554a667fd3b919c5e886c2'
      }
      PostComments(param).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          that.$message(res.data.msg)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    writeAnAnswer (id) {
      // 写回答
      if (id == this.id) {//eslint-disable-line
        this.isanswer = !this.isanswer
      }
    },
    commentEvent (parendindex, childindex, name) {
      // 相关评论回复框
      if (name === 'parent' && childindex === 0) {
        this.commentList[parendindex].iscomment = !this.commentList[parendindex].iscomment
      } else {
        this.commentList[parendindex].children[childindex].iscomment = !this.commentList[parendindex].children[childindex].iscomment
      }
    },
    getname (id) {
      // 根据id获取对应的名称
      var obj = this.oldcommentList.find(function (item) {
        if (item.com_id === id) {
          return item.com_id === id
        }
      })
      return obj.com_username
    },
    htmlTag (value) {
      // 转义html
      var s = ''
      if (value.length === 0) return ''
      s = value.replace(/&amp;/g, '&')
      s = s.replace(/&lt;/g, '<')
      s = s.replace(/&gt;/g, '>')
      s = s.replace(/&nbsp;/g, ' ')
      s = s.replace(/&#39;/g, '\'')
      s = s.replace(/&quot;/g, '"')
      s = s.replace(/<br\/>/g, '\n')
      return s
      // 正则去掉所有的html标记
    },
    getBugList () {
      // 获取bug列表
      var that = this
      GetBugDetails({id: this.id}).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          var details = res.data.data.details
          details.b_ar_content = that.htmlTag(details.b_ar_content)
          that.details = details
          that.userinfo = res.data.data.userinfo
          var commentList = res.data.data.commentList
          var lists = []
          var childrens = []
          commentList.forEach((item) => {
            item.iscomment = false
            if (item.com_cid === 0) {
              lists.push(item)
            } else {
              childrens.push(item)
            }
          })
          that.oldcommentList = commentList
          lists.forEach((item) => {
            item.children = []
            childrens.forEach((items) => {
              if (item.com_id === items.com_cid) {
                item.children.push(items)
              }
            })
          })
          that.commentList = lists
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getQuery () {
      this.id = this.$route.query.id
    }
  },
  components: {},
  created () {
    this.getQuery()
  },
  beforeDestroy () {
    this.$root.eventHub.$off('scenickey')
  }
}
</script>

<style lang="less" type="text/less">
.editor {
  line-height: normal !important;
  height: 800px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
  content: '请输入链接地址:';
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
  border-right: 0px;
  content: '保存';
  padding-right: 0px;
}

.ql-snow .ql-tooltip[data-mode='video']::before {
  content: '请输入视频地址:';
}

.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
  content: '14px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
  content: '10px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
  content: '18px';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
  content: '32px';
}

.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
  content: '文本';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
  content: '标题1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
  content: '标题2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
  content: '标题3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
  content: '标题4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
  content: '标题5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
  content: '标题6';
}

.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
  content: '标准字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
  content: '衬线字体';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
  content: '等宽字体';
}
.ql-container .ql-editor{
  min-height: 200px;
}
</style>
