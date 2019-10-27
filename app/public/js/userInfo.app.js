var userInfoApp = new Vue({
  el: '#userInfoApp',
  data: {
    searchName : '',
    user : {
    },
    users:[],
    cert:[],
    tempCert:{
      certificateID:'',
      acquireDate:'',
      expDate:'',
      validity:''
    }
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
  this.user.firstName = this.searchName;
  fetch('api/records/getUsers.php')
  .then(response => response.json())
  .then(json => {userInfoApp.users = json});

},

oneUserInfo()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + '-' + mm + '-' + dd;
  console.log("todays date");
  console.log(today);
  console.log(this.users);

  for(var u of this.users)
  {
    if(this.searchName == u.firstName)
    {
      this.user = u;
      //console.log(this.user);
      break;
    }
  }
  for(var u1 of this.users)
  {
    console.log(this.user);
    if(this.searchName == u1.firstName)
    {
      console.log("Running this");
      this.tempCert.certName=u1.certName;
      this.tempCert.acquireDate=u1.acquireDate;
      this.tempCert.expDate=u1.expDate;
      console.log("I am here right now");
      if(u1.expDate>today)
      {

      console.log("Valid");
      this.tempCert.validity='Valid';
    }
    else {
      console.log("InValid");
       this.tempCert.validity='InValid';
        }
          console.log("Im done");
          this.cert.push(this.tempCert);
          console.log(this.tempCert);
      //i++;
    }
  }
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
  // this.user='';
  //this.handleReset();
}
});
