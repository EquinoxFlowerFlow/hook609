import axios from 'axios'
import qs from 'qs'
/* import { store } from '../store' */

// 添加请求拦截器
axios.interceptors.request.use(config => {
  /* const { token } = store.getState().jiekou

  if (token) {
    config.data += `&token=${token}`
  } */
  return config

}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 根据状态码跳转
  // if (response.status === 200) {
    // window.location.href = 'https://www.baidu.com'
  // }
  return response;
}, error => {
  // switch (error.response.status) {
  //   case 404:
  //     window.location.href = 'https://www.baidu.com'
  //     break;
    
  //   default:
  //     break;
  // }
  return Promise.reject(error);
});


// post
export function post (url, data) {

  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'POST',
      data: qs.stringify(data),
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}

// get
export function get (url, data = '') {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'GET',
      // 添加公共的请求头
      // headers: { token: '' },
      params: '',
    })
      .then(res => resolve(res.data))
      .catch(err => console.log(err))
  })
}