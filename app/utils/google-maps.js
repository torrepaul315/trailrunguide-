import Ember from 'ember';

const google = window.google;

export default Ember.Object.extend({

// took out function before initmap 'reserved keyword'! 
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







// the example code that is with the outdated googlemaps code
  // init() {
  //   this.set('geocoder', new google.maps.Geocoder());
  // },
  //
  // createMap(element, location) {
  //   let map = new google.maps.Map(element, { scrollwheel: false, zoom: 10 });
  //   this.pinLocation(location, map);
  //   return map;
  // },
  //
  // pinLocation(location, map) {
  //   this.get('geocoder').geocode({address: location}, (result, status) => {
  //     if (status === google.maps.GeocoderStatus.OK) {
  //       let geometry = result[0].geometry.location;
  //       let position = { lat: geometry.lat(), lng: geometry.lng() };
  //       map.setCenter(position);
  //       new google.maps.Marker({ position, map, title: location });
  //     }
  //   });
  // }

});
