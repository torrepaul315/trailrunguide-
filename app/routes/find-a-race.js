import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return['Ultrasignup','trailrunner.com ','running in the USA'];
    return this.get('store').findAll('raceSites');
  }

});
