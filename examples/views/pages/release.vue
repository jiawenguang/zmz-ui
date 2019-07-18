<template>
  <zmz-section class="zmz-width-standard">
    <div class="zmz-demo--1__section">
      <zmz-row :gutter="20">
        <zmz-col :xs="24" :sm="24" :md="24" :lg="24">
          <div class="zmz-demo--release">
            <zmz-label label="标题" label-width="80px" class="zmz-mb-20">
              <zmz-input placeholder="请输入标题" v-model="title" :clearbtn="true" :show-password="true"></zmz-input>
            </zmz-label>
            <zmz-label label="内容" label-width="80px" class="zmz-mb-20">
              <quill-editor class="zmz-article__quill--deitor" ref="myTextEditor" :options="editorOption" v-model="content" :config="editorOption"></quill-editor>
            </zmz-label>
            <zmz-label label="简介" label-width="80px" class="zmz-mb-20">
              <zmz-textarea v-model="descript" :max-len="10" placeholder="请输入简介" is-cut></zmz-textarea>
            </zmz-label>
            <zmz-label label="文章分类" label-width="80px" class="zmz-mb-20">
              <zmz-textarea v-model="type" :max-len="10" placeholder="请选择分类" is-cut></zmz-textarea>
            </zmz-label>
            <zmz-label label="文章标签" label-width="80px" class="zmz-mb-20">
              <zmz-input-tag :tag-array="tag" @addTag="closeTag"></zmz-input-tag>
              <p>最多可输入五个文章标签，输入标签后回车确定</p>
            </zmz-label>
            <zmz-button @click="release">发布</zmz-button>
          </div>
        </zmz-col>
        <zmz-col :xs="24" :sm="6" :md="6" :lg="6">
          <div class="zmz-demo--1__right"><zmz-button @click="login">登陆</zmz-button></div>
          <div class="zmz-login" v-if="isLogin">
            <div class="zmz-login__bg"></div>
            <div class="zmz-login__body">
              <h2></h2>
              <div class="zmz-login__from">
                <zmz-input placeholder="用户名" v-model="username" class="zmz-mb-20"></zmz-input>
                <zmz-input placeholder="密码" v-model="password" class="zmz-mb-20"></zmz-input>
                <zmz-button @click="login">登陆</zmz-button>
              </div>
            </div>
          </div>
        </zmz-col>
      </zmz-row>
    </div>
  </zmz-section>
</template>

<script>
import hljs from 'highlight.js'
import { Login, Release, GetBugList, GetUserinfo } from '../../api/api.js'
// import { addQuillTitle } from '../public/quill-title.js'
export default {
  name: 'app',
  data () {
    return {
      init: false,
      isIndex: true,
      descript: '简介',
      title: '标题',
      type: '分类',
      username: 'admin',
      password: 'a1234560',
      content: '内容',
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
      tag: [],
      isLogin: false
    }
  },
  mounted () {
    this.getBugList()
    this.getUserinfo()
  },
  methods: {
    closeTag (item) {
      console.log(item)
    },
    getUserinfo () {
      GetUserinfo().then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    getBugList () {
      GetBugList().then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    release () {
      // let that = this
      let params = {
        title: this.title,
        content: this.content,
        descript: this.descript,
        type: this.type,
        tag: this.tag
      }
      Release(params).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    login () {
      let that = this
      this.isLogin = true
      let params = {
        username: this.username,
        password: this.password
      }
      Login(params).then(function (res) {
        console.log(res)
        if (res.data.code === 1) {
          that.isLogin = false
          that.$message({
            type: 'success',
            message: res.data.msg
          })
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="less" type="text/less">
.zmz-login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
}
.zmz-login::after {
  content: '';
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.zmz-login__bg {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.5;
}
.zmz-login__body {
  padding: 20px;
  background: #fff;
  display: inline-block;
  width: 30%;
  position: relative;
  z-index: 999;
  border-radius: 5px;
  vertical-align: middle;
}
</style>
