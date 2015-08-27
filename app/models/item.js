import Ember from 'ember';

export default DS.Model.extend({
  menu: DS.belongsTo('menu'),
  content: DS.attr(),

  price: DS.attr('number'),
});
