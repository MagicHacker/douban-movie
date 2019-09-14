const baseURL = 'https://douban.uieee.com/v2/'
const request = (url, method, params) => {
  return new Promise ((resolve,reject) => {
    wx.request({
      url: baseURL + url,
      data: params,
      method,
      header: {
        "Content-type": "json"
      },
      success: res => {
        resolve(res.data)
      }
    })
  })
}
module.exports = {
  request
}