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
     let pos
     var infoWindow

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
      //  center: uluru
      });
      // var marker = new google.maps.Marker({
      //   position: uluru,
      //   map: map
      // });
      infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            console.log(pos);
            infoWindow.setPosition(pos);
            infoWindow.setContent('You are here...or very very close by!');
            infoWindow.open(map);
            map.setCenter(pos);
            callToApi(pos)
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        };

      function callToApi(location){
      console.log(location.lat, location.lng);
      $.ajax({
      type: "GET",
      dataType: 'json',
      headers: {
                'X-Mashape-Key': "S6SANZ1kKCmshtPSSUFLxIOO2yE1p1lqRdLjsnS3nQjvuPpGou"
            },
      url:"https://trailapi-trailapi.p.mashape.com/",
      data: {
        //also want to get activity type inputted, but doc is confusing
        // "x-mashape-key":"S6SANZ1kKCmshtPSSUFLxIOO2yE1p1lqRdLjsnS3nQjvuPpGou",
        "lat":location.lat,
        "lon":location.lng,
        "limit":"5",
        "radius":"25"
      },
      success: function(result) {
        console.log(result.places.length, result.places[0].lat, result.places[0].lon );

        for (var x=0; x < result.places.length; x++) {
          var newMarker = {
            "lat": result.places[x].lat,
            "lng": result.places[x].lon
          }
         console.log(newMarker);
          var marker = new google.maps.Marker({
            position: newMarker,
           map: map,
           title: `trail run location#${x+1}`
          });

        }
      },
      fail: function(err) {
        console.log(err);
        }
      })
      }



  },
}


});
