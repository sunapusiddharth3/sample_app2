import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store,primaryModelCLass,payload,id,requestType){

    payload = {section_wise_time_tables : payload};
    console.log(payload);
    return this._super(store,primaryModelCLass,payload,id,requestType);
  }
});
