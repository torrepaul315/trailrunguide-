import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),



  // actions: {
  //   // isAuthenticated = true,
  //   invalidateSession() {
  //     this.get('session').invalidate();
  //   }
  // }

});
