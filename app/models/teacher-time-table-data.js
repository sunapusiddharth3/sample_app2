import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
  uid:attr('string'),
  time_slot1:attr('string'),
  time_slot2:attr('string'),
  time_slot3:attr('string'),
  time_slot4:attr('string'),
  time_slot5:attr('string'),
  time_slot6:attr('string'),
  time_slot7:attr('string'),
  time_slot8:attr('string'),
});
