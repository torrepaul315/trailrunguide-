import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    askBot: function(){
      console.log(this.get('botRequest'));
      console.log('linked');
      this.sendAction('action', this.get('botRequest')); 
    },
  }

});
