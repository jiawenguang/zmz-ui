import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
// 相关模块管理
/**
 * 公共引用文件common
 */
import common from './modules/common/common'
/**
 * 模块引入文件
 */
Vue.use(Vuex)
// 创建 store 实例
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    common
  }
})
