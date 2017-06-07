import Ember from 'ember';

export default Ember.Component.extend({


  actions:{

  registerForm() {
    console.log('form submit button hit the email is '+ this.get('email') + ' and pw is ' + this.get('password'));
    },

    





  }
});
