/**
 * http配置
 */

import axios from 'axios'
import store from '../store'
import {getToken,setToken,removeToken} from '@/util/auth';
import {Message} from 'element-ui'

import {baseUrl} from '@/config'
//超时时间
axios.defaults.timeout = 30000;
axios.defaults.baseURL = baseUrl;
//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;


let msg;

//HTTP request拦截
axios.interceptors.request.use(
  config => {

    if (store.getters.access_token) {
      config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
  },error => {
    return Promise.reject(error)
  })
//HTTP response拦截
axios.interceptors.response.use(
  data => {

    return data
  },error => {
    let errMsg = error.toString();
    let code = errMsg.substr(errMsg.indexOf('code') + 5);
    Message({
      message: errorCode[code] || errorCode['default'],
      type: 'error'
    });
    return Promise.reject(new Error(error));
  })

export default axios
