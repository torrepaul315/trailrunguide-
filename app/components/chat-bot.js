import Ember from 'ember';

export default Ember.Component.extend({

  // actions: {
 /* basic setup where I got actions to bubble up*/
    // askBot: function(){
    //   console.log(this.get('botRequest'));
    //   console.log('linked');
    //   this.sendAction('action', this.get('botRequest'));
    // },

   /*
     1. First step you need to do is inject the websockets service into your object.
   */
   websockets: Ember.inject.service(),
   socketRef: null,

   didInsertElement() {
     this._super(...arguments);

     /*
       2. The next step you need to do is to create your actual websocket. Calling socketFor
       will retrieve a cached websocket if one exists or in this case it
       will create a new one for us.
     */
     const socket = this.get('websockets').socketFor('ws://localhost:6001/');

     /*
       3. The next step is to define your event handlers. All event handlers
       are added via the `on` method and take 3 arguments: event name, callback
       function, and the context in which to invoke the callback. All 3 arguments
       are required.
     */
     socket.on('open', this.myOpenHandler, this);
     socket.on('message', this.myMessageHandler, this);
     socket.on('close', this.myCloseHandler, this);

     this.set('socketRef', socket);
   },

   willDestroyElement() {
     this._super(...arguments);

     const socket = this.get('socketRef');

     /*
       4. The final step is to remove all of the listeners you have setup.
     */
     socket.off('open', this.myOpenHandler);
     socket.off('message', this.myMessageHandler);
     socket.off('close', this.myCloseHandler);
   },

   myOpenHandler(event) {
     console.log(`On open event has been called: ${event}`);
   },

   myMessageHandler(event) {
     console.log(`Message: ${event.data}`);
   },

   myCloseHandler(event) {
     console.log(`On close event has been called: ${event}`);
   },

   actions: {
     askBot: function() {
      const socket = this.get('socketRef');
      var message = this.get('botRequest');
      if (message === undefined) {
            console.log('no msg!');
                    return;
        }
       else {
       socket.send(JSON.stringify({type: 'msg', text:message, userId: "z0EwnrbW"}));
        }
      }
    }
 });
