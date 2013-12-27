var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has `title`, `order`, and `completed` attributes.

app.Contact = Backbone.Model.extend({

  // Default attributes ensure that each todo created has `title` and `completed` keys.
  defaults: {
    name: 'Sonny Byrd',
    phone: '914-419-1539',
    email: 'sonny.byrd@gmail.com',
    twitter: '@sonnybyrd',
    skype: 'sonnybyrd'
  },

  // Toggle the `completed` state of this todo item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }

});