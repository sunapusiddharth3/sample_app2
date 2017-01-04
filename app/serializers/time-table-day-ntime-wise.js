import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store,primaryModelCLass,payload,id,requestType){

    payload = {time_table_dayNtimeWise : payload};
    console.log(payload);
    return this._super(store,primaryModelCLass,payload,id,requestType);
  }
});
