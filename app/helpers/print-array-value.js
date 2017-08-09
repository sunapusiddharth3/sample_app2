import Ember from 'ember';

export function printArrayValue(params/*, hash*/) {
  debugger;
  var t = params[0].replace(/[\d]+/,'');
  return t;
}

export default Ember.Helper.helper(printArrayValue);
