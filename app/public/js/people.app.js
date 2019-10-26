var peopleRecordsApp = new Vue({
  el: '#peopleApp',
  data: {
    people: [],
    recordPeople: {}

  },
  methods: {
    fetchpeople() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => {peopleRecordsApp.people = json})
    },

    handleSubmit(event) {
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPeople),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      .then(response => response.json())
      .then(json => { peopleRecordsApp.people.push(json[0])})

      this.handleReset();

    },
    handleReset() {
      this.recordPeople = {
        firstName: '',
        lastName: '',
        email:'',
        radio:'',
        stationName:''
      }
    } ,
    handleRowClick(people) {
      peopleRecordsApp.people = people;
    }
  },
  created() {
    this.handleReset();
    this.fetchpeople();
  }
});
