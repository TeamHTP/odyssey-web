var API_ROOT = 'https://odyssey.teamhtp.com/api/';

function callApi(endpoint, paramMap) {
    var xhr = new XMLHttpRequest();
    var queryString = '?';
    for (var i in paramMap) {
        queryStr += `${i}=${paramMap[i]}&`
    }
    xhr.open('GET', `${API_ROOT}${endpoint}?${queryStr}`, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}

var app = new Vue({
    el: '#app',
    data: {
      initial: {radius: '0'}
    },
    methods: {
        test: function () {
            console.log(this.initial.radius);
        }
    }
});
