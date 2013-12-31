var app = app || {};

app.ListMenuView = Backbone.View.extend({
    el: '.snap-drawer-left',

    events: {
      'click .group':'open',
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

    open: function(e) {
      e.preventDefault();
      $('.active').removeClass('active');
      e.target.addClass('active');

    },

    addGroup: function() {
      var groupModal = new GroupModalView({collection: this.collection});
    }
});
