import Ember from 'ember';
const {
  RSVP,
  Route,
  inject: {
    service
  }
} = Ember;
export default Ember.Route.extend({
  actions:{
    getClassDataForTimeTable2(){
      // to get the names of students in that class according to particular time and day
      // to get the section we will use UI rather than fetching from ember
      // to convert current to timeslot
      var d = new Date();
      // var current_time = d.getHours();
      var current_time = 11;
      var weekday = new Array(7);
      weekday[0] =  "sun";
      weekday[1] = "mon";
      weekday[2] = "tue";
      weekday[3] = "wed";
      weekday[4] = "thu";
      weekday[5] = "fri";
      weekday[6] = "sat";
      // var current_day = weekday[d.getDay()];
      var current_day = "sat";
      // time conversioon : 8-9 , 9-10 ,10-11,11-12,12-1,1-2,2-3,3-4
      switch(true){
        case (current_time < 9):
         var time_slot = "Time Slot 1";
        break;
        case (current_time < 10):
        var time_slot = "Time Slot 2";
        break;
        case (current_time < 11):
        console.log("ssas");
        var time_slot = "Time Slot 3";
        break;
        case (current_time < 12):
         var time_slot = "Time Slot 4";
        break;
        case (current_time < 13):
        var time_slot = "Time Slot 5";
        break;
        case (current_time < 14):
        var time_slot = "Time Slot 6";
        break;
        case (current_time < 15):
        var time_slot = "Time Slot 7";
        break;
        case (current_time < 16):
        var time_slot = "Time Slot 8";
        break;
        default:
        console.log("error");
        break;
    }
    // get the column number :
    var column_number = $("table").find("th:contains('"+time_slot+"')").index();
    column_number = column_number.toString();
    // get the row number :
    // var row_number = $("table").find("td:contains('"+current_day+"')").index();
    var row_number = $("table").find("td:contains('"+current_day+"')").closest('tr').index();
    row_number = row_number.toString();
    row_number++;
    //getting data using row and column
    var section_data =   $('.table tr').eq(row_number).find('td').eq(column_number).text();
    // var orig = "1231+";
    var student_class_int = parseInt(section_data);
    student_class_int = ''+student_class_int;
    var student_class_char = section_data.replace(student_class_int, "").toUpperCase();
    // to access the current model :
    var names_of_students = new Array();
    var student_data_for_time_table = this.store.query('student', {filter: {present_class:student_class_int }}).then(function(result){
      result.forEach(function(task){
        if(task.get('section') == student_class_char){
          // console.log(task.get('section'));
          // return this;
          names_of_students.push(task.get('name'));
        }
    // console.log(task.get('section'));
  });
    });
    // debugger;
    // this.modelFor(this.routeName);
    // console.log(names_of_students);
    //setting data into model
    var a = this.get('controller.model');
    // debugger;
    Ember.set(this.modelFor('teacher'), 'student_name', names_of_students);
    console.log(a.student_name);
    console.log(a.particularTeacherTimeTableData);
    }
},
beforeModel(transition) {
  transition.send('doSomething');
  getClassDataForTimeTable2();
},

  model(params, transition) {

    return RSVP.hash({
        teacherData: this.store.findAll('teacher'),
        teacherTimeTableData : this.store.findAll('teacher-time-table-data'),
        // here change 83 to teacher id
        particularTeacherTimeTableData:this.store.query('teacher-time-table-data', {filter: {uid: '83'}}).then(function(result) {
          return result;
        }),
        student_name :Ember.Object.create(),
    });
  },
  ajax: service(),

});
