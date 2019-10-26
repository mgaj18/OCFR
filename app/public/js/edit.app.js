var peopleEditApp = new Vue({
  el: '#peopleEditApp',
  data: {
    people: {}

  },
  methods: {
    handleSubmit(event) {
      fetch('api/records/edit.php', {
        method:'POST',
        body: JSON.stringify(this.people),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })},
    handleReset() {
      this.people = {
        personID: '',
        firstName: '',
        lastName: '',
        email:'',
        radio:'',
        stationName:''
      }
    }

  },
  created() {
    this.handleReset();
  }
});
