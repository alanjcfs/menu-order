import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    buyNow() { }
  },
  click() {
    this.sendAction('action', this.get('item'));
  }
});
