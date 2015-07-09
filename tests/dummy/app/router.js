import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  this.route('style-guide', function() {
    this.route('grid');
    this.route('cards');
  });

  this.route('component-index', function() {
    this.route('card-frame');
  });

  this.route('examples', function() {
    this.route('app-frame');
    this.route('card-block');
    this.route('card-block-vertical');
    this.route('card-container');
    this.route('card-item');
  });




});

export default Router;
