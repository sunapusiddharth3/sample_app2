import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('sid');
  this.route('login');
  this.route('home');
  this.route('students');
  this.route('staffs');
  this.route('testing2');
});

export default Router;
