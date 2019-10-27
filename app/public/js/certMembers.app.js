var cprRecordsApp = new Vue({
    el: '#cprApp',
    data: {
      people: []
  
    },
    methods: {
      fetchpeople() {
        fetch('api/records/CPRMembers.php')
        .then(response => response.json())
        .then(json => {cprRecordsApp.people = json})
        }
      },

    created() {
      this.fetchpeople();
    }
  });
  