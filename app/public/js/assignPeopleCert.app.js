var assignPeopleCertApp = new Vue({
  el: '#assignPeopleCertApp',
  data: {
    people: [],
    cert: [],
    table:{}

  },
  methods: {
    fetchPeopleCert() {
      fetch('api/records/assignPeople.php')
      .then(response => response.json())
      .then(json => {assignPeopleCertApp.people = json})
    },

    fetchcert() {
      fetch('api/cert/assignCert.php')
      .then(response => response.json())
      .then(json => {assignPeopleCertApp.cert = json})
    },

    handleSelection(){
      console.log(this.table)
      fetch('api/certDetails/assigned.php', {
        method:'POST',
        body: JSON.stringify(this.table),
        headers: {
          "Content-Type": "application/json; charset=utf-8"

        }
      })}},

  created() {
    this.fetchPeopleCert();
    this.fetchcert();
  }
});
