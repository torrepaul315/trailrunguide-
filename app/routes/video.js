import Ember from 'ember';

export default Ember.Route.extend({
  model() {
      return[

      //   what I'd like to get into the blurb and have run + <a target='_blank' href='http://your_url_here.html'> + "Aravaipa running." + </a>
      {
        "name":"Mountain Outpost", "src":"https://www.youtube.com/embed/videoseries?list=PLZS_k6BQeW_KnXm44s7PORPsg3Hv6f3X5",
        "blurb":"without a doubt, your number one go to source to go to for a weekly dose of trailrunning nerddom and irreverence.  Jam Jam, a.k.a. Jamil Coury, the CEO of Aravaipa running."
      },
      {
        "name":"Ginger Runner",
        "src":"https://www.youtube.com/embed/wUpRzyUrrlw"
      },
      {
        "name":"Billy Yang",
        "src":"https://www.youtube.com/embed/videoseries?list=PLF3GWOzYkVR3HVr9dlKBjKp-hlU7ZeayJ"
      }
    ];
  }
});
