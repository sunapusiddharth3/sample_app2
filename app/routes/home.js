import Ember from 'ember';
const {
  RSVP
} = Ember;
export default Ember.Route.extend({
  model(){
    return RSVP.hash({
        staffData: this.store.findAll('staff'),
        teacherData: this.store.findAll('teacher'),
        studentData: this.store.findAll('student'),
        contactData: this.store.findAll('contact-detail'),
        leavesData :this.store.findRecord('leave',123),
        particularContactData :this.store.findRecord('contact-detail', 123),
        sectionWiseTimeTableData:this.store.findAll('section-wise-time-table'),
        subjectTableData:this.store.findAll('subject-table'),
        timeTableDayNtimeWiseData:this.store.findAll('time-table-day-ntime-wise'),
        timeTableData:null,
        marksOfStudent:null,
        StudentClass:null,
      });
  }
});
