import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
  uid:attr('number'),
  name:attr('string'),
  type:attr('string'),
  leave_allocated:attr('number'),
  leave_left:attr('number'),
  leave_start_date:attr('date'),
  leave_end_date:attr('date'),

});
