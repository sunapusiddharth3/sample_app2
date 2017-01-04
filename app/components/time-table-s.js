import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init(){
    this._super();
    this.send('getData1');
  },
  actions:{
    getData1(){
      var studentRecord = this.get('store').peekRecord('student',1000);
      var Sclass = studentRecord.get('present_class');
      this.set('model2',Sclass);
      var section =studentRecord.get('section');
      var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri","sat"];
      var d = new Date();
      var param1=Sclass+section.toLowerCase()+dayNames[d.getDay()];
      var abc=this.get('store').peekRecord('time-table-day-ntime-wise',param1);
      var time_slot_codes=[]
      time_slot_codes.push(abc.get('time_slot1'));
      time_slot_codes.push(abc.get('time_slot2'));
      time_slot_codes.push(abc.get('time_slot3'));
      // time_slot_codes.push(abc.get('time_slot4'));
      time_slot_codes.push(abc.get('time_slot5'));
      time_slot_codes.push(abc.get('time_slot6'));
      time_slot_codes.push(abc.get('time_slot7'));
      time_slot_codes.push(abc.get('time_slot8'));
      // console.log(time_slot_codes);
      var subjectName=[];
      for(var i=0;i<7;i++){
          var tempData=this.get('store').peekRecord('subject-table',time_slot_codes[i]);
          subjectName.push(tempData.get('name'));
      }
      console.log(subjectName);
      this.set('model1',subjectName);
    },
    getData2(){
      console.log(this.get('model1'));
      console.log(this.get('model2'));
    },
    getData3(){
      // console.log(this.get('model3'));
      // console.log(this.model.data);
    }
  }
});
