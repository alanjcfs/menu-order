import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: 1,
      offerDate: new Date("2015-08-27"),
      items: [{
        id: 1,
        content: "Chicken",
        price: "17.30"
      }, {
        id: 2,
        content: "Beef",
        price: "19.20",
      }, {
        id: 3,
        content: "Pork",
        price: "19.10",
      }, {
        id: 4,
        content: "Vegetarian",
        price: "13.30",
      }]
    }, {
      id: 2,
      offerDate: new Date("2015-08-26"),
      items: [{
        id: 5,
        content: "Chicken",
        price: "17.30"
      }, {
        id: 6,
        content: "Beef",
        price: "19.20",
      }, {
        id: 7,
        content: "Pork",
        price: "19.10",
      }, {
        id: 8,
        content: "Vegetarian",
        price: "13.30",
      }]
    }, {
      id: 3,
      offerDate: new Date("2015-08-25"),
      items: [{
        id: 9,
        content: "Chicken",
        price: "17.30"
      }, {
        id: 10,
        content: "Beef",
        price: "19.20",
      }, {
        id: 11,
        content: "Pork",
        price: "19.10",
      }, {
        id: 12,
        content: "Vegetarian",
        price: "13.30",
      }]
    },
    ];
  },
  actions: {
    buyNow(item) {
      this.store.createRecord('lineItem', {
        itemId: item.id
      })
      this.transitionTo('purchase');
    }
  }
});
