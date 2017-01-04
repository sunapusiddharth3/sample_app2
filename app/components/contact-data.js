import Ember from 'ember';
const {
  RSVP
} = Ember;
export default Ember.Component.extend({
actions:{
  consoleData(){
    console.log(this.get('model'));
  }
}
});
