import DS from 'ember-data';
const { attr }=DS;
export default DS.Model.extend({
subject_id:attr('string'),
name:attr('string'),
teacher_id:attr('number'),
text_book_id:attr('number'),
});
