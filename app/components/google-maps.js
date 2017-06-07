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
    },


   initMap() {
      var uluru = {lat: -25.363, lng: 131.044};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
      });
      var marker = new google.maps.Marker({
        position: uluru,
        map: map
      });
    }

  },


});
