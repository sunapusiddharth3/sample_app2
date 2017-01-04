import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host:'http://localhost',
  namespace:'sample_app_api',
    pathForType(){
      return 'contact_details.php';
    }
});
