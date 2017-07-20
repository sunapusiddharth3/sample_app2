import Ember from 'ember';
const {
  RSVP,
  Route,
  inject: {
    service
  }
} = Ember;

export default Ember.Route.extend({
    model(){

      return RSVP.hash({
          studentData: this.store.findAll('student')




      });
    }
      });
