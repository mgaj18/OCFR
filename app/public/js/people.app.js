var peopleRecordsApp = new Vue({
  el: '#peopleApp',
  data: {
    people: []

  },
  methods: {
    fetchpeople() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => {peopleRecordsApp.people = json})
      }
    },
/*
    handleSubmit(event) {
      fetch('api/records/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordPatient),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      .then(response => response.json())
      .then(json => { patientRecordsApp.patients.push(json[0]) })

      this.handleReset();
    },
    handleReset() {
      this.recordPatient = {
        firstName: ''
      }
    },
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  }, // end methods */
  created() {
    this.fetchpeople();
  }
});
