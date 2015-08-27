import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      offerDate: new Date("2015-08-27"),
      items: [{
        content: "Chicken",
        price: "17.30"
      }, {
        content: "Beef",
        price: "19.20",
      }, {
        content: "Pork",
        price: "19.10",
      }, {
        content: "Vegetarian",
        price: "13.30",
      }]
    }, {
      offerDate: new Date("2015-08-26"),
      items: [{
        content: "Chicken",
        price: "17.30"
      }, {
        content: "Beef",
        price: "19.20",
      }, {
        content: "Pork",
        price: "19.10",
      }, {
        content: "Vegetarian",
        price: "13.30",
      }]
    }, {
      offerDate: new Date("2015-08-25"),
      items: [{
        content: "Chicken",
        price: "17.30"
      }, {
        content: "Beef",
        price: "19.20",
      }, {
        content: "Pork",
        price: "19.10",
      }, {
        content: "Vegetarian",
        price: "13.30",
      }]
    },
    ];
  }
});
