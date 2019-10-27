var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certificate:[],
    certification: {}

  },
  methods: {
    fetchcertification() {
      fetch('api/cert/index.php')
      .then(response => response.json())
      .then(json => {certificationApp.certificate = json})
    },

    handleAdd(event) {
      fetch('api/cert/addCertification.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers: {
          "Content-Type": "application/json; charset=utf-8"

        }
      })

      .then(response => response.json())
      .then(json => { certificationApp.certificate.push(json[0])})

      this.handleReset();
    },

     handleDelete(event) {
        fetch('api/cert/deleteCertification.php', {
          method:'POST',
          body: JSON.stringify(this.certification),
          headers: {
            "Content-Type": "application/json; charset=utf-8"

          }


        })

        this.fetchcertification();
      },
        handleEdit(event) {
          fetch('api/cert/editCertification.php', {
            method:'POST',
            body: JSON.stringify(this.certification),
            headers: {
              "Content-Type": "application/json; charset=utf-8"

            }
          })},

    handleReset() {
      this.certification = {
        certName: '',
        agency: '',
        certificationLength: ''
      }
    },
    handleRowClick(certificate) {
      certificationApp.certification= certificate;
    }

  },
  created() {
    this.handleReset();
    this.fetchcertification();
  }
});
