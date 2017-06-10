import Ember from 'ember';

export default Ember.Route.extend({

  model() {
      return [
        {"name":"Hal Koerner",
        "src":"images/halKoerner.png",
        "blurb":'oh billy! (inside joke) anyways, Billy Yang has put together some awesome feature length documentaries, centered around some of the most iconic figures and races in the sport.  His piece on the UTMB races inspires me to one day run the race that takes you through "three countries in one day"!',
        "link":"https://www.instagram.com/halkoerner/"
        },
        {"name":"Dom Grossman",
        "src":"images/domGrossman.png",
        "blurb":'oh billy! (inside joke) anyways, Billy Yang has put together some awesome feature length documentaries, centered around some of the most iconic figures and races in the sport.  His piece on the UTMB races inspires me to one day run the race that takes you through "three countries in one day"!'
        },
        {"name":"Kilian Jornet",
        "src":"images/trailSisters.png",
        "blurb":'oh billy! (inside joke) anyways, Billy Yang has put together some awesome feature length documentaries, centered around some of the most iconic figures and races in the sport.  His piece on the UTMB races inspires me to one day run the race that takes you through "three countries in one day"!',
        "link":"https://www.instagram.com/kilianjornet/"
        }
      ];
    }
});
