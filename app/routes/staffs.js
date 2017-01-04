import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('staff');
    // return this.store.findAll('attendance');
  }
});
