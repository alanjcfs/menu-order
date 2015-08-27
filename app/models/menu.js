import DS from 'ember-data';

export default DS.Model.extend({
  foodStore: DS.belongsTo('food-store'),
  items: DS.hasMany('item'),

  offerDate: DS.attr('date'),
});
