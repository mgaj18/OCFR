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
      acquiredate:'',
      expirydate:''
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
  console.log(this.users);

  for(var u of this.users)
  {
    if(this.searchName == u.firstName)
    {
      this.user = u;
      console.log(this.user);
      break;
    }
  }
  for(var u1 of this.users)
  {
    console.log("I am here");
    //i=0;
    console.log(u1.certificateID);
    if(this.searchName == u1.firstName)
    {
      this.tempCert.certificateID=u1.certificateID;
      this.tempCert.acquiredate=u1.acquiredate;
      this.tempCert.expirydate=u1.expirydate;
      this.cert.push(this.tempCert);
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
