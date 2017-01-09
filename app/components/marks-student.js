import Ember from 'ember';

export default Ember.Component.extend({
store: Ember.inject.service(),
ajax: Ember.inject.service(),
  init(){
    this._super();
    if(this.get('model3') === 'final'){
      this.send('getIndividualMarksFinal');
    }else if(this.get('markstype') === 'mid'){
      this.send('getIndividualMarksMidYear');
    }else if(this.get('markstype') === 'test1'){
      this.send('getIndividualMarksClassTest1');
    }else if(this.get('markstype') === 'test2'){
      this.send('getIndividualMarksClassTest2');
    }else if(this.get('markstype') === 'test3'){
      this.send('getIndividualMarksClassTest3');
    }
  },
  actions:{
    getIndividualMarksFinal(){
      let _this = this;
      console.log('studentClass:'+this.get('model.StudentClass'));
      var StudentClass =this.get('model.StudentClass');
      var markstype =this.get('model3');
      var dataString = 'class='+ StudentClass + '&markstype='+ markstype;

      this.get('ajax').request(`http://localhost:80/sample_app_api/MarksIndividualStudent.php?${dataString}`, {}).then(function(response) {
      _this.set('model.marksOfStudent',response);
      console.log(response);
     }, function(reason) {
       console.log(`Errors sent by server:`);
       console.log(reason);
     }).catch(function(error) {
       console.log(`catch company comment error:`);
       console.log(error);
     });
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
