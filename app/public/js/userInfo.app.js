var userInfoApp = new Vue({
  el: '#userInfoApp',
  data: {
    searchName : '',
    user : {
    },
    users:[],
    cert:[],
    // tempCert:{
    //   certName:'',
    //   acquireDate:'',
    //   expDate:'',
    //   validity:''
    // }
  },

methods: {

  handleSubmit(event) {
    this.user.firstName = this.searchName;
    fetch('api/records/getUsers.php')
    .then(response => response.json())
    .then(json => {userInfoApp.users = json});

  },

  oneUserInfo() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    for(var u of this.users) {
      if(this.searchName == u.firstName) {
        this.user = u;
        break;
      }
    }

    this.cert = []


    for(var u1 of this.users) {
      if(this.searchName == u1.firstName) {

        tempCert = {
          certName:'',
          acquireDate:'',
          expDate:'',
          validity:''
        }

        tempCert.certName=u1.certName;
        tempCert.acquireDate=u1.acquireDate;
        tempCert.expDate=u1.expDate;

        if(u1.expDate>today) {
          tempCert.validity='Valid';
        }
        else {
          tempCert.validity='Invalid';
        }
        this.cert.push(tempCert);
      }
    }
  },

  handleReset() {
  }
},

created() {
  this.handleSubmit();
}

});
