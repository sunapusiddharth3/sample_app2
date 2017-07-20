import Ember from 'ember';

export function splitDayFromId(params/*, hash*/) {
  var t = params[0].replace(/[\d]+/,'');
  return t;
}

export default Ember.Helper.helper(splitDayFromId);
