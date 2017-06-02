import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.get('store').findAll('goat');
  // }
  model() {
    return {
      data: [{
        type : 'kilian J info',
        firstName: 'Kilian',
        lastName: 'Jornet Burgada',
        status: 'G.O.A.T',
        image: ''
      }]
    }
  }

});
