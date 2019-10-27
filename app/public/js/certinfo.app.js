var certInfoApp = new Vue({
  el: '#certInfoApp',
  data: {
    cert: [],
    members: {},
    people: []

  },
  methods: {
    fetchcert() {
      fetch('api/cert/certinfo.php')
      .then(response => response.json())
      .then(json => {certInfoApp.cert = json})
    },
    
    handleSelection() {
      console.log(this.members)
      console.log(this.people)
      fetch('api/records/certMembers.php', {
        method: 'POST',
        body: JSON.stringify(this.members),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
    .then(response => response.json())
    .then(json => {certInfoApp.people = json})
    }

  },
  created() {
    this.fetchcert();
  }
});
