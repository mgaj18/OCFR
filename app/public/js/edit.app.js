var peopleEditApp = new Vue({
  el: '#peopleEditApp',
  data: {
    people: []

  },
  methods: {
    handleSubmit(event) {
      console.log(this.people)
      fetch('api/records/edit.php', {
        method:'POST',
        body: JSON.stringify(this.people),
        headers: {
          "Content-Type": "application/json; charset=utf-8"

        }
      })},
      handleDelete(event) {
        fetch('api/records/delete.php', {
          method:'POST',
          body: JSON.stringify(this.people),
          headers: {
            "Content-Type": "application/json; charset=utf-8"

          }
        })
      },
    handleReset() {
      this.people = {
        personID: '',
        firstName: '',
        lastName: '',
        email:'',
        radio:'',
        stationName:'',
        dob: '',
        gender: '',
        address:'',
        phoneNumber:'',
        position:''
      }
    }

  },
  created() {
    this.handleReset();
  }
});
