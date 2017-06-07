import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('video');
  this.route('best-websites');
  this.route('find-a-race');
  this.route('instagrams-to-follow');
  this.route('get-out-and-run');
  this.route('register');
  this.route('login');
});

export default Router;
