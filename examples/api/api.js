import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
axios.interceptors.request.use(
  // 请求参数设置
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
axios.interceptors.response.use(
  // 响应请求
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  })
let base = 'http://localhost:3000'
export const Login = params => {
  return axios.post(`${base}/api/login`, params)
}
export const Release = params => {
  return axios.post(`${base}/api/release`, params)
}
export const GetBugList = params => {
  return axios.get(`${base}/api/getBugList`, {params: params})
}
export const GetUserinfo = params => {
  return axios.get(`${base}/api/getUserinfo`, {params: params})
}
export const GetBugDetails = params => {
  return axios.get(`${base}/api/getBugDetails`, {params: params})
}
export const PostComments = params => {
  return axios.post(`${base}/api/postComments`, params)
}
export const Search = params => {
  return axios.get(`${base}/api/search`, {params: params})
}
export const Shieldedwords = params => {
  return axios.get(`${base}/api/shieldedwords`, {params: params})
}
export const Follow = params => {
  return axios.get(`${base}/api/follow`, {params: params})
}
