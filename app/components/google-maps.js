import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    redirect() {
      alert('something!');
      console.log('hello!');
    }
  }
});
