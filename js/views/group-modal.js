// TODO: Swith to app.GroupModalView
var GroupModalView = Backbone.View.extend({

    className: 'group-wrapper',

    template: Handlebars.compile($("#group-form-template").html()),

    events: {
      'click .close':'save',
      'click .save':'save',
      'submit form':'save'
    },

    initialize: function(options) {
      this.options = options || {};
      $('#group-modal').html(this.render().el);
      this.show();
    },

    show: function() {
      $('#group-modal').addClass('active');
    },

    tearDown: function() {
      this.remove();
    },

    render: function() {
      this.$el.html( this.template() );
      this.$el.find('input:first').focus();
      return this;
    },

    save: function(e) {
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      var group = new app.List({name: data.name});
      this.options.collection.add(group);
      group.save();
      console.log(this.options.collection);
      $('#group-modal').removeClass('active');
      this.tearDown();
    }
 });