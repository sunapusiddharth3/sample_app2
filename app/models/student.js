import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
    uid:attr('number'),
    join_date:attr('date'),
    leave_date:attr('date'),
    name:attr('string'),
    parent_uid:attr('number'),
    present_class:attr('number'),
    section:attr('string'),
});
