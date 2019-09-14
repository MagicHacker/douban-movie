const api = require('../../api/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categoryList:['影院热映','即将上映','畅销图书','热门单曲榜'],
    // 影院热映
    theaterHot: [],
    movieComing: [],
    books: [],
    popularMusic: [],
    homepageList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    Promise.all([api.request('movie/in_theaters', 'GET', { start: 1, count: 10 }), api.request('movie/coming_soon', 'GET', { start: 1, count: 10 }), api.request('book/search', 'GET', { q: 'Python', count: 10 }), api.request('music/search', 'GET', { q: '欧美', count: 10 })]).then(data => {
      this.setData({
        homepageList:[
          {
            title:'影院热映',
            itemList: data[0].subjects
          },
          {
            title: '即将上映',
            itemList: data[1].subjects
          },
          {
            title: '畅销图书',
            itemList: data[2].books
          },
          {
            title: '热门单曲榜',
            itemList: data[3].musics
          }
        ]
      })
    })
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
  /**
   * 点击搜索
   */
  searchMovie: function () {
    wx.navigateTo({
      url: '/pages/search/index',
    })
  },
  // 查看更多
  seeMore:function (event) {
    wx.navigateTo({
      url: '/pages/movie-more/index',
    })
  }
})