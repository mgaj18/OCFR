var expCertApp = new Vue({
  el: '#expiredCerts',
  data: {
    getName: '',
    expcerts: [],
    expcertts1:[]
  },
  methods: {
    fetchexpcerts() {
      fetch('api/records/expiredCerts.php')
      .then(response => response.json())
      .then(json => {expCertApp.expcerts = json})
      },

    specificCert()
    {
        console.log("currently me expcerts array has:")
        console.log(this.expcerts);
        console.log("Got name of cert");
        console.log(this.getName);
        this.expcerts1=this.expcerts;
        console.log("Pushed to new array, new array as follows");
        console.log(this.expcerts1);
        console.log("Emptying array now..");
        this.expcerts=[];

        console.log("Does my new array have content?");
        console.log(this.expcerts1);
        console.log("Contents of old array");
        console.log(this.expcerts);

        // for(var u of this.users)
        // {
        //   if(this.searchName == u.firstName)

      for(var e of this.expcerts1)
      {
        console.log("My e is..")
        console.log( e);

        if(this.getName == e.certName)
        {
          this.expcerts.push(e);
        }
      }
      console.log("my filtered array is..");
      console.log(this.expcerts);
      }

    },





  created() {
    this.fetchexpcerts();
  }
});
