var extricationRecordsApp = new Vue({
    el: '#extricationApp',
    data: {
      people: []
  
    },
    methods: {
      fetchpeople() {
        fetch('api/records/extricationMembers.php')
        .then(response => response.json())
        .then(json => {extricationRecordsApp.people = json})
        }
      },

    created() {
      this.fetchpeople();
    }
  });