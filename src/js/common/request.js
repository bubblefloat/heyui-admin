/**
 * request.js封装所有的请求，请求方法都在该文件中定义
 * 注意：路径不用加上“/api”，ajax.js中自带
 */

import Ajax from './ajax';

const Request = {
  User: {
    info() {
      return Ajax.get('/account/info');
    }
  },
  Home: {
    getMessageList() {
      return Ajax.get(`/home/messages`);
    }
  },
  Login: {
    login(param) {
      return Ajax.postJson('/login', param);
    },
    logout(param) {
      return Ajax.post('/logout', param);
    }
  },
  Management: {
    users(params) {
      return Ajax.get('/management/users', params);
    },
    roles(params) {
      return Ajax.get('/management/roles', params);
    }
  }
};

export default Request;
