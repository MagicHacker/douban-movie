Component({
  data: {},
  properties: {
    itemData: {
      type: Array
    }
  },
  lifetimes: {
    attached() {
    }
  },
  methods:{
    movieDetail(event) {
      wx.navigateTo({
        url: '/pages/movie-detail/index',
      })
    }
  }
})