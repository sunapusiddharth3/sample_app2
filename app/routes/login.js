import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginForm() {
      console.log("actioncalled");
      var uid = $("#uid").val();
      var password = $("#password").val();
      var dataString = 'uid='+ uid + '&password='+ password;
      $.ajax({
        url: "http://localhost:80/sample_app_api/getFormData.php",
        type: 'POST',
        data: dataString ,
        success: function(result) {
          if (result === 'ok') {
            console.log("found");
            var url = "http://localhost:4200/home?uid=" + uid;
            window.location.href = url;
          } else {
            console.log("not found");
          }
        },
        error:function(error){
          console.log("error:");
          console.log(error);
        }
      });
    }
  }
});
