import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return[{"name":"Mountain Outpost", "src":"https://www.youtube.com/embed/videoseries?list=PLZS_k6BQeW_KnXm44s7PORPsg3Hv6f3X5"},{"name":"Ginger Runner",
    "src":"https://www.youtube.com/embed/wUpRzyUrrlw"  },{"name":"Billy Yang","src":"https://www.youtube.com/embed/videoseries?list=PLF3GWOzYkVR3HVr9dlKBjKp-hlU7ZeayJ"}];
  }
});
