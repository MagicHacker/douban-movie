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
      const { id } = event.currentTarget.dataset
      wx.navigateTo({
        url: '/pages/movie-detail/index?id=' + id,
      })
    }
  }
})