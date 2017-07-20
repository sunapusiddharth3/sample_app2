import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store,primaryModelCLass,payload,id,requestType){

    payload = {teacher_time_table_datas : payload};
    console.log(payload);
    return this._super(store,primaryModelCLass,payload,id,requestType);
  }
});
