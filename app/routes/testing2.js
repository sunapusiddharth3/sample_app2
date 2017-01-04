import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return  [{"subject_name":"poem"},
    {"subject_name":"rhymes"},
    {"subject_name":"indoor_games"},
    {"subject_name":"outdoor_games"},
    {"subject_name":"craft"},
    {"subject_name":"dance"},
    {"subject_name":"music"}] ;
  },
  actions:{
    getData(){
      console.log(this.get('controller.model'));
    }

  }
});
