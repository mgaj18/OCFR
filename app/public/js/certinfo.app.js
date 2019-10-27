var certInfoApp = new Vue({
  el: '#certInfoApp',
  data: {
    cert: []

  },
  methods: {
    fetchcert() {
      fetch('api/cert/certinfo.php')
      .then(response => response.json())
      .then(json => {certInfoApp.cert = json})
    },
    handleSelection(){

    }

  },
  created() {
    this.fetchcert();
  }
});
