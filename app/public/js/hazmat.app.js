var hazmatRecordsApp = new Vue({
    el: '#hazmatRecordsApp',
    data: {
      people: []
  
    },
    methods: {
      fetchpeople() {
        fetch('api/records/hazmatMembers.php')
        .then(response => response.json())
        .then(json => {hazmatRecordsApp.people = json})
        }
      },

    created() {
      this.fetchpeople();
    }
  });