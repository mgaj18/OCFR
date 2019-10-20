var userInfoApp = new Vue({
  el: '#userInfoApp',
  data: {
    user : {
      firstName:''
    },
    users:[]

  },
  methods: {
/*
    fetchpeople() {
      fetch('api/records/index.php')
      .then(response => response.json())
      .then(json => {peopleRecordsApp.people = json})
      }
    },
*/
    handleSubmit(event) {
      fetch('api/records/getinfo.php', {
        method:'POST',
        body: JSON.stringify(this.user),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      .then(response => response.json())
      //not sure
      .then(json => { userInfoApp.users.push(json) })
      this.handleReset();
    },

    oneUserInfo()
    {
      
    },

    handleReset() {
      console.log(this.users);
      // this.user = {
      //   firstName: '',
      //   lastName: '',
      //   gender: '',
      //   phoneNumber:'',
      //   email:'',
      //   dob:''
      // }
    }/*,
    handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }
  */}, // end methods */
  created() {
    this.handleSubmit();
    this.user.firstName='';
    //this.handleReset();
  }
});
