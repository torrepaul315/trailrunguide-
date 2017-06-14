import Ember from 'ember';

export default Ember.Controller.extend({
//the model

//also, learn/better understand lifestyle hooks!

// chatWithBot: function (chatReq) {
//   console.log("second" + chatReq);
//   var chatAdd = {"text":chatReq};
//   chatAdd.text = chatReq;
//   console.log(chatAdd);
//   this.get('model')
//
//   .push(chatAdd);
//   this.get('model').push;

actions: {
  chatWithBot: function (chatReq) {
    // console.log("second" + chatReq);
    var chatAdd = {"text":chatReq};
    chatAdd.text = chatReq;
    console.log(chatAdd);

    console.log(this.get('model'));
    this.get('model').pushObject(chatAdd);

    // JSON.stringify(chatAdd);
    // console.log(chatAdd);

  }
}





});
