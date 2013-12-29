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
  },

  render: function() {
    var $el = $(this.el);
    $el.data('listId', this.model.get('id'));
    $el.html(this.template(this.model.toJSON()));
    return this;
  },

  open: function() {
    var self = this;
    return false;
  }
});
