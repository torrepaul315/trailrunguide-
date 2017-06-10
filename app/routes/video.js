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
        "name":"the Ginger Runner",
        "src":"https://www.youtube.com/embed/videoseries?list=PLF3GWOzYkVR3HVr9dlKBjKp-hlU7ZeayJ",
        "blurb":"It's hard not to like the dynamic duo of Ethan Newberry and his wife Kim Teshima-Newberry"
      },
      {
        "name":"Billy Yang",
        "src":"https://www.youtube.com/embed/wUpRzyUrrlw",
        "blurb":'oh billy! (inside joke) anyways, Billy Yang has put together some awesome feature length documentaries, centered around some of the most iconic figures and races in the sport.  His piece on the UTMB races inspires me to one day run the race that takes you through "three countries in one day"!'
      }
    ];
  }
});
