var expCertApp = new Vue({
  el: '#expiredCerts',
  data: {
    expcerts: []

  },
  methods: {
    fetchexpcerts() {
      fetch('api/records/expiredCerts.php')
      .then(response => response.json())
      .then(json => {expCertApp.expcerts = json})
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
    this.fetchexpcerts();
  }
});
