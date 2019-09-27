var app = new Vue({
  el: '#app',
  data: {
    info: null,
    error: false,
    loading: true,
    data_url: "https://api.coindesk.com/v1/bpi/currentprice.json"
  },
  methods:{
    loadData: function(url, callback){
      fetch(url)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        callback(data)
      })
      .catch(function(error) {
        that.error = true
        console.log(error)
      });
    },
    refresh: function () {
      this.error = false
      this.loading = true
      this.loadData(this.data_url, (data) => {
        this.info = data
        this.loading = false
      })
    }
  },
  mounted: function() {
    this.refresh()
  },
})
