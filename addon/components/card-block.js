import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isBlock:grid-block'],
  isBlock: true
});
