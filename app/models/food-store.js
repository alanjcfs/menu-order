import DS from 'ember-data';

export default DS.Model.extend({
  menus: DS.hasMany('menu'),

  name: DS.attr(),
});
