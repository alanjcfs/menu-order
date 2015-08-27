import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('menu', function() {
    this.route('show', {path: ':id'});
    this.route('item');
  });
  this.route('food-store');
  this.route('purchase');
});

export default Router;
