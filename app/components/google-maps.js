import Ember from 'ember';

export default Ember.Component.extend({

  //  well this didn't work! init: {
  //   alert("itsa trap!");
  // },

  actions: {
    logSomething() {
      console.log('its a trap!')
    },


    redirect() {
      alert('something!');
      console.log('hello!');
    }
  }
});
