export default {
  data: {
    authenticated: false
  },
  login (context, info) {
    const URL = 'https://bird.ioliu.cn/v1/?url=http://104.250.140.75:8000/api/oauth/v2/token?client_id=demo_client&client_secret=secret_demo_client&grant_type=password&' +
      'username=' + info.username + '&password=' + info.pwd
    context.$http.jsonp(URL, {
      headers: this.getAuthHeader()
    }).then(function (data) {
      console.log(data.bodyText)
      localStorage.setItem('token', data.bodyText)
      this.authenticated = true
      this.$router.push('home')
    }, function (err) {
      console.log(err + ',' + err.body.message)
      context.error = err.body.message
    })
  },
  getAuthHeader () {
    return {
      'Content-Type': 'application/json'
    }
  },
  checkAuth () {
    var token = localStorage.getItem('token')

    if (token) {
      this.authenticated = true
    } else {
      this.authenticated = false
    }
    console.log(this.authenticated)
  }

}
