var app = app || {};

app.ListMenuItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'group',

  template: Handlebars.compile($("#list-item-template").html()),

  events: {
    'click': 'open'
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
    this.model.on('select', this.open, this);
  },

  render: function() {
    var $el = $(this.el);
    $el.data('listId', this.model.get('id'));
    $el.html(this.template(this.model.toJSON()));
    // app.routes.navigate('lists/' + this.model.get('id'));
    return this;
  },

  open: function() {
    var self = this;
    var listID = this.model.get('id');
    var list = sampleLists[listID-1];
    app.currentContacts.reset(list.contacts);
    //var groupView = new app.ListView();
    snapper.close();
    // Remove existing list
    // Find the contacts associated with this List Model
    // Empty the ContactList collection and add the new contacts
    // Get rid of existing list-view & Render them
    return false;
  }
});
