import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
uid:attr('string'),
mon:attr('string'),
tue:attr('string'),
wed:attr('string'),
thu:attr('string'),
fri:attr('string'),
});
