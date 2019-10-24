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
