const api = require('../../api/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    columnInex: 0,
    itemList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      columnInex: options.index
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.fetchData()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },
  // 发送请求
  setRequest(url, method, params) {
    api.request(url, method, params).then(data => {
      if (data.subjects) {
        this.setData({
          itemList: data.subjects
        })
      } else if (data.books) {
        this.setData({
          itemList: data.books
        })
      } else if (data.musics) {
        this.setData({
          itemList: data.musics
        })
      }
    })
  },
  // 拉取数据
  fetchData() {
    switch (this.data.columnInex) {
      case "0":
        this.setRequest('movie/in_theaters', 'GET', {
          start: 0,
          count: 21
        })
        break
      case "1":
        this.setRequest('movie/coming_soon', 'GET', {
          start: 0,
          count: 21
        })
        break
      case "2":
        this.setRequest('book/search', 'GET', {
          q: 'Python',
          count: 21
        })
        break
      case "3":
        this.setRequest('music/search', 'GET', {
          q: '欧美',
          count: 21
        })
        break
    }
  }
})