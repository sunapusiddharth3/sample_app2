import Ember from 'ember';

export default Ember.Component.extend({
store: Ember.inject.service(),
ajax: Ember.inject.service(),
  init(){
    this._super();
    if(this.get('model3') == 'final'){
      this.send('getIndividualMarksFinal');
    }else if(this.get('markstype') == 'mid'){
      this.send('getIndividualMarksMidYear');
    }else if(this.get('markstype') == 'test1'){
      this.send('getIndividualMarksClassTest1');
    }else if(this.get('markstype') == 'test2'){
      this.send('getIndividualMarksClassTest2');
    }else if(this.get('markstype') == 'test3'){
      this.send('getIndividualMarksClassTest3');
    }
  },
  actions:{
    getIndividualMarksFinal(){
      let _this = this;
      // console.log('from final');
      var StudentClass =this.get('model.StudentClass');
      var markstype =this.get('model3');
      // console.log('class');
      // console.log(Sclass);
      // console.log(markstype);
      var dataString = 'class='+ '1' + '&markstype='+ 'final';
      // var resultData = this.get('model4');
      // $.ajax({
      //   url: "http://localhost:80/sample_app_api/MarksIndividualStudent.php",
      //   type: 'GET',
      //   data: dataString ,
      //   success: function(result) {
      //     // let this= ;
      //   _this.set('model4',result);
      //   //   console.log(response);
      //     console.log(result);
      //     // _this.set('model.classOfStudent',result);
      //     // console.log(result);
      //   },
      //   error:function(error){
      //     console.log("error:");
      //     console.log(error);
      //   }
      // });

      this.get('ajax').request(`http://localhost:80/sample_app_api/MarksIndividualStudent.php`, {}).then(function(response) {
      //  _this.set('resultData', response.data);
      _this.set('model.marksOfStudent',response);
      console.log(response);
      // resultData = response;
      //  console.log('resultData inner'+resultData);
     }, function(reason) {
       console.log(`Errors sent by server:`);
       console.log(reason.errors);
     }).catch(function(error) {
       console.log(`catch company comment error:`);
       console.log(error);
     });


      // console.log('resultData'+this.get('model.classOfStudent'));
      // console.log('resultData2'+resultData);
    },
    getIndividualMarksMidYear(){
      console.log('from mid');
    },
    getIndividualMarksClassTest1(){
      console.log('from t1');
    },
    getIndividualMarksClassTest2(){
      console.log('from t2');
    },
    getIndividualMarksClassTest3(){
      console.log('from t3');
    },
    getAjaxData(){
      console.log('classOFstudent'+this.get('model.marksOfStudent'));
    }
  },
});
