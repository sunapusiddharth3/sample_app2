import Ember from 'ember';
const {
  inject: {
    service
  }
} = Ember;
export default Ember.Route.extend({
  actions: {
    loginForm() {
      console.log("actioncalled");
      var uid = $("#uid").val();
      var password = $("#password").val();
      var dataString = 'uid='+ uid + '&password='+ password;
      $.ajax({
        url: "http://localhost:80/sample_app_api/login_details_mysql.php",
        type: 'POST',
        data: dataString ,
        success: function(result) {
          console.log(result);
          var a = new Array();
          a=result.split(',');
          if(a[0]=== 'SUCCESS'){
            var url = "http://localhost:4200/home?uid=" + uid;
            window.location.href = url;
          }
          if(a[0]=== 'NOTFOUND'){
            // show error message
          }
          if(a[0]=== 'ERROR'){

          }
          // if (result === 'ok') {
          //   console.log("found");
          //   var url = "http://localhost:4200/home?uid=" + uid;
          //   window.location.href = url;
          // } else {
          //   console.log("not found");
          // }
        },
        error:function(error){
          console.log("error:");
          console.log(error);
        }
      });
    }
  }
});
