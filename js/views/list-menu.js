var app = app || {};

app.ListMenuView = Backbone.View.extend({
    el: '.snap-drawer-left',

    events: {
      'click .add-group':'addGroup'
    },

    initialize: function(initialLists) {
      this.$groupList = $('#group-list');
      this.collection = new app.ContactLists( initialLists );
      this.render();
      this.listenTo( this.collection, 'add', this.renderGroup );
    },

    render: function() {
      var that = this;
        this.collection.each(function(list) {
          this.renderGroup(list);
        }, this);

        return this;
    },

    renderGroup: function(list) {
      var groupView = new app.ListMenuItemView({
          model: list
      });
      this.$groupList.append( groupView.render().el );
    },

    addGroup: function() {
      var groupModal = new GroupModalView({collection: this.collection});
      // Bring up modal
      // Serialize shit
      // Create the model
      // Add to group collection
      // Render it in the side bar
    }
});
