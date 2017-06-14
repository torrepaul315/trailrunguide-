import Ember from 'ember';

export function botText(params/*, hash*/) {
  console.log(params)
  return params;
}

export default Ember.Helper.helper(botText);
