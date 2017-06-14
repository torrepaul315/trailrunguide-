import Ember from 'ember';

export default Ember.Route.extend({
//as per kyle, you're goint up too far! the sendAction bubbles up first to the controller and then the route.
//you don't need to perform those js actions here in the route in part because the route is for persisting/chatting with the db

//if you call this.get('model') in the controller, then the this.get will return the array of the model data that you can now push into (because before it was a function....and you would be persisting the data, updating the ds, which would then bubble back down to the model but not access it more directly)

//so! you are very close! move the actions in the route down to the controller, the this.sendAction will bubble the action up to the controller (because the info goes there first anyways, call down the model array, push into it, and then the each should auto repopulate the screen page)

//other steps 1- reverse the order of the model on render/push into the opposite end of the array 2- have some sort of binary aspect to the function, so that every other text window looks different OR, push asks and responses into different arrays? and then render each side by side or alternating somehow in the for each? not sure....but that's a little further down the pike!



     model() {
      return[
      //  {text:"whaaaaaat"},
      //  {text:"yeyeah"},
      //  {text:"okayyyy"}

      ];


    },

  // model() {
  //   return this.get('store').findAll('goat');
  // },
  //


  /////also! rather than take the WS response from the websockets down in the Component, catch that response up here and push it into the model! I hope this woiks!

//I had this ('store')

  // model() {
  //   return {
  //     data: {
  //       type : 'kilian J info',
  //       firstName: 'Kilian',
  //       lastName: 'Jornet Burgada',
  //       status: 'G.O.A.T',
  //       image: ''
  //     },
  //   }
  // }

});
