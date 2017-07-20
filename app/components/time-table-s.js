import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  init(){
    this._super();
    this.send('getData');
  },
  actions:{
    getData(){
      var studentRecord = this.get('store').peekRecord('student',1000);
      var Sclass = studentRecord.get('present_class');
      this.set('model.StudentClass',Sclass);
      var section =studentRecord.get('section');
      var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri","sat"];
      var d = new Date();
      var param1=Sclass+section.toLowerCase()+dayNames[d.getDay()];
      var abc=this.get('store').peekRecord('time-table-day-ntime-wise',param1);
      var time_slot_codes=[];
      time_slot_codes.push(abc.get('time_slot1'));
      time_slot_codes.push(abc.get('time_slot2'));
      time_slot_codes.push(abc.get('time_slot3'));
      time_slot_codes.push(abc.get('time_slot5'));
      time_slot_codes.push(abc.get('time_slot6'));
      time_slot_codes.push(abc.get('time_slot7'));
      time_slot_codes.push(abc.get('time_slot8'));
      var subjectName=[];
      for(var i=0;i<7;i++){
          var tempData=this.get('store').peekRecord('subject-table',time_slot_codes[i]);
          subjectName.push(tempData.get('name'));
      }
      console.log(subjectName);
      this.set('model.timeTableData',subjectName);
    }
  }
});
