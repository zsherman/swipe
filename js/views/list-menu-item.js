var app = app || {};

app.ListMenuItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'group',

  template: Handlebars.compile($("#list-item-template").html()),

  events: {
    'click': 'open',
    'tap .delete-group': 'removeGroup'
  },

  initialize: function() {
    this.model.on('change', this.render, this);
    this.model.on('destroy', this.remove, this);
    this.model.on('select', this.open, this);
    console.log(this.model);
  },

  render: function() {
    var $el = $(this.el);
    $el.data('listId', this.model.get('id'));
    $el.html(this.template(this.model.toJSON()));
    // app.routes.navigate('lists/' + this.model.get('id'));
    return this;
  },

  open: function(e) {
    e.preventDefault();
    if ( app.hasOwnProperty('contact_list_view') ) {
      app.contact_list_view.remove();
      delete app['contact_list_view'];
    };
    var self = this;
    var listID = this.model.get('id');
    // this.model.contacts.create( {name: {formatted: 'test'}} );
    this.model.contacts.fetch(); // Pass in id for server?
    app.contact_list_view = new app.ListView({
      model: self.model
    });
    $('header h1').text(this.$("a").text());
    $('li.selected').removeClass('selected');
    this.$el.addClass('selected');
    // create a new list view and pass in this model

    // var list = sampleLists[listID-1];
    // app.currentContacts.reset(list.contacts);
    //var groupView = new app.ListView();
    snapper.close();
    // Remove existing list
    // Find the contacts associated with this List Model
    // Empty the ContactList collection and add the new contacts
    // Get rid of existing list-view & Render them
    return false;
  },

  removeGroup: function(e) {
    this.model.destroy();
    this.remove();
    $('#group-list li').first().click();
  }

});
