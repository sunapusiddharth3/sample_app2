import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host:'http://localhost',
  namespace:'sample_app_api',
    pathForType(){
      return 'time_table_dayNtimeWises.php';
    }
});
