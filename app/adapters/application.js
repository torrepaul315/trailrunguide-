import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: "http://localhost:3000"

  //my heroku backend! woot woot! 
  host: "https://trguidebackend.herokuapp.com"
});
