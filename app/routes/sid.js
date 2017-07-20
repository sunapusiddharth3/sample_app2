import Ember from 'ember';
const {
  RSVP,
  Route,
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
  ajax: service(),
  actions:{
    getData(){
      // console.log("dsadjs");
      // get the ajax data
      var myData ="";
      // this.get('ajax').patch(`http://localhost/sample_app_api/getData.php`, {
      //       dataType: 'json',
      //       contentType: 'application/json; charset=utf-8',
      //       data: myData
      //     });
      $.ajax({
        url: "http://localhost:80/sample_app_api/getData.php",
        // async:false,
        type:'GET',
        dataType:'json',
        success: function(result){
        myData = result;
        console.log("myDtaa :" + myData);
   }

 });
  }
}
});
