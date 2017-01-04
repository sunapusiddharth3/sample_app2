import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
uid:attr('number'),
year:attr('number'),
type:attr('string'),
month:attr('number'),
});
