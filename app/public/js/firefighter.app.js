var firefighterRecordsApp = new Vue({
    el: '#firefighterApp',
    data: {
      people: []
  
    },
    methods: {
      fetchpeople() {
        fetch('api/records/firefighterMembers.php')
        .then(response => response.json())
        .then(json => {firefighterRecordsApp.people = json})
        }
      },

    created() {
      this.fetchpeople();
    }
  });