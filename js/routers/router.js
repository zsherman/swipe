var app = app || {};

app.ContactRouter = Backbone.Router.extend({
  
  routes: {
      'lists/:id': 'openList'
    },

    initialize: function() {
    },

    openList: function(id) {
      if (app.collections.lists && app.collections.lists.length) {
        var list = app.collections.lists.get(id);
        if (list) {
          list.trigger('select');
        } else {
          console.error('List not found:', id);
        }
      }
    }

});