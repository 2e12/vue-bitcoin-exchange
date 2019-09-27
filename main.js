var app = new Vue({
  el: '#app',
  data: {
    info: null,
    error: false,
  },
  mounted () {
    let that = this
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      that.info = data
    })
    .catch(function(error) {
      that.error = true
      console.log(error);
    });
  }
})
