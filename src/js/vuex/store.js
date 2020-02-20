/**
 * vuex状态管理器
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    User: {},             //保存用户
    msgCount: {           //通知消息的数量
      messages: 2
    },
    siderCollapsed: true //控制侧边栏显示(true为小图标，false为带文字图标)
  },
  mutations: {
    updateAccount(state, data) {
      state.User = data;
    },
    updateSiderCollapse(state, isShow) {
      setTimeout(() => {
        G.trigger('page_resize');
      }, 600);
      state.siderCollapsed = isShow;
    },
    updateMsgCount(state, data) {
      state.msgCount = data;
    }
  },
  actions: {
    updateAccount(context, data) {
      context.commit('updateAccount', data);
    },
    updateSiderCollapse(context, data) {
      context.commit('updateSiderCollapse', data);
    },
    updateMsgCount(context, data) {
      context.commit('updateMsgCount', data);
    }
  },
  getters: {
    account: state => {
      return state.User;
    },
    siderCollapsed: state => {
      return state.siderCollapsed;
    },
    msgCount: state => {
      return state.msgCount;
    }
  }
});
