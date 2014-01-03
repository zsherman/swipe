var app = app || {};

app.List = Backbone.Model.extend({

  defaults: {
    // id: '',
    // name: ''
  },

  initialize: function() {
    this.contacts = new app.ContactList();
  }

});