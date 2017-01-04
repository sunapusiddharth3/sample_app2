import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
  uid:attr('number'),
  name:attr('string'),
  join_date:attr('date'),
  leave_date:attr('date'),
  designation:attr('string'),
  time_table_id:attr('number'),
  status:attr('number'),
  gender:attr('string'),
  age:attr('number'),
  dob:attr('date')
});
