import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
  uid:attr('string'),
  join_date:attr('date'),
  leave_date:attr('date'),
  name:attr('string'),
  parent_uid:attr('number'),
  teacher_level:attr('string'),
  subjects:attr('string')
});
