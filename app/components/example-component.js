import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    showPerson(person) {
      alert(person);
      window.location.href = "https://www.youtube.com/channel/UCkBVF0sQGsJa-272eFUpTsw"
    },

    doSomething (){
      alert('figuring out ember!');
    }
  }
});
