
var app = new Vue({
    el: '#app',
    data: {
      initial: {radius: '0'}
    },
    methods: {
        test: function () {
            console.log(this.initial.radius)
        }
    }
  })

