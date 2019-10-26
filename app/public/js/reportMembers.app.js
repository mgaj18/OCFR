var reportMembersApp = new Vue({
  el: '#reportMembersApp',
  data: {
    people: []

  },
  methods: {
    fetchpeople() {
      fetch('api/records/reportMembers.php')
      .then(response => response.json())
      .then(json => {reportMembersApp.people = json})
      }
    },
  created() {
    this.fetchpeople();
  }
});
