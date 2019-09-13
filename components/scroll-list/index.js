Component({
  data: {},
  methods:{
    movieDetail(event) {
      wx.navigateTo({
        url: '/pages/movie-detail/index',
      })
    }
  }
})