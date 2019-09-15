const api = require('../../api/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    Promise.all([api.request('movie/top250', 'GET', {
      start: 0,
      count: 3
    }), api.request('movie/weekly', 'GET', {
      start: 0,
      count: 3
    }), api.request('movie/us_box', 'GET', {
      start: 0,
      count: 3
    })]).then(data => {
      this.setData({
        movieList: [{
            image: '/images/TOP250.png',
            itemList: data[0].subjects,
            subject: false
          },
          {
            image: '/images/mouth-word.jpg',
            itemList: data[1].subjects,
            subject: true
          },
          {
            image: '/images/rank-list.jpg',
            itemList: data[2].subjects,
            subject: true
          }
        ]
      })
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})