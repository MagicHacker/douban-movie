const api = require('../../api/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemIndex: 0,
    itemList: [],
    isSubject: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      itemIndex: options.index
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
    this.fetchData(this.data.itemIndex)
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
  // 拉取数据
  fetchData(index) {
    switch(index){
      case "0":
        api.request('movie/top250', 'GET', {
          start: 0,
          count: 3
        }).then(data => {
          this.setData({
            itemList: data.subjects,
            isSubject: false
          })
        })
      break
      case "1":
        api.request('movie/weekly', 'GET', {
          start: 0,
          count: 3
        }).then(data => {
          this.setData({
            itemList: data.subjects.splice(0,3),
            isSubject: true
          })
        })
      break
      case "2":
        api.request('movie/us_box', 'GET', {
          start: 0,
          count: 3
        }).then(data => {
          this.setData({
            itemList: data.subjects.splice(0,3),
            isSubject: true
          })
        })
    }
  },
  // 跳转到电影详情页
  showMovieDetail(event) {
    const { id } = event.currentTarget.dataset
    wx.navigateTo({
      url: '/pages/movie-detail/index?id=' + id,
    })
  }
})