import Axios from 'axios'
// import qs from 'qs'

const httpA = Axios.create()
export default {
  install: function (Vue) {
    Object.defineProperty(Vue.prototype, '$http', {
      value: this, // 设置值
      writable: false // 是否可以改变，默认false，更改会报undefined
    })
    // httpA.defaults.baseURL = 'http://175.178.66.71:8080/kkapi/serveltDemo'
    httpA.defaults.baseURL = 'http://127.0.0.1:8080/kkapi/serveltDemo'
    httpA.defaults.headers.common['token'] = localStorage.invest_h5_token
    // 设置请求拦截器
    // httpA.interceptors.request.use(
    //   config => {
    //     // config.headers.common['token'] = localStorage.invest_h5_token
    //     return config
    //   },
    //   err => {
    //     return Promise.reject(err)
    //   }
    // )
    // 设置响应拦截器
    httpA.interceptors.response.use(
      res => {
        // 统一判断，如果请求成功返回数据
        let data = res.data
        let flag = data.flag
        if (flag === 1) {
          return data
        } else if (flag === 4000) {
          // token过期
          // 返回app界面
          localStorage.invest_h5_token = ''
          window.ws.close()
        } else {
          return data
        }
      },
      error => {
        // dialog.toast(error.message ? error.message : error)
        return Promise.reject(error)
      }
    )
  },
  // 添加食物
  addFood (params) {
    return httpA({
      url: '/addFood',
      params: params,
      method: 'POST'
    })
  },
  // 获取食物
  getFood (params) {
    return httpA({
      url: '/getFood',
      params: params,
      method: 'GET'
    })
  },
  // 发送邮件
  Mail (params) {
    return httpA({
      url: '/Mail',
      params: params,
      method: 'POST'
    })
  },
  // 添加心情
  addMood (params) {
    return httpA({
      url: '/addMood',
      params: params,
      method: 'POST'
    })
  },
  // 获取食物
  getMood (params) {
    return httpA({
      url: '/getMood',
      params: params,
      method: 'GET'
    })
  },
  // 获取食物
  UploadImg (data) {
    return httpA({
      url: '/UploadImg',
      data: data.data,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
