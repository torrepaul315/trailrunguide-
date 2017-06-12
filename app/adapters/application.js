import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  //my websocket backend
  host: "http://localhost:6001"

  // my node/express backend is at :3000

  //my heroku backend! woot woot!
  // host: "https://trguidebackend.herokuapp.com"
});
