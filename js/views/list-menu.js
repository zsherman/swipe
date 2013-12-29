var app = app || {};

app.ListMenuView = Backbone.View.extend({
    el: '.snap-drawer-left',

    events: {
    },

    initialize: function(initialLists) {
      this.$groupList = $('#group-list');
      this.collection = new app.ContactLists( initialLists );
      this.render();
      this.collection.on('add', this.render, this);
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
    }
});
