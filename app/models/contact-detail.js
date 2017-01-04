import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
  uid:attr('number'),
  type:attr('string'),
  name:attr('string'),
  phone_no:attr('number'),
  address:attr('string'),
  city:attr('string'),
  state:attr('string'),
  mail_id:attr('string'),
  alternate_mail_id:attr('string')

});
