// TODO: Switch to app.BlockModalView
var BlockModalView = Backbone.View.extend({

    className: 'block-wrapper',

    template: Handlebars.compile($("#block-menu-template").html()),

    events: {
      'click .close':'tearDown',
      'click .save':'save',
      'tap .block-option':'save'
    },

    initialize: function(options) {
      this.options = options || {};
      // $('#contact-app').append(this.render().el);
      $('#block-modal').html(this.render().el);
      this.show();
      // this.show();
    },

    show: function() {
      $('#block-modal').addClass('active');
    },

    tearDown: function() {
      this.remove();
      $('#block-modal').removeClass('active');
    },

    render: function() {
      this.$el.html( this.template( this.options.model.toJSON() ) );
      return this;
    },

    save: function(e) {
      e.gesture.preventDefault();
      var blockName = $(e.currentTarget).data('name');
      var blockIcon = $(e.currentTarget).find('i').attr('class');
      this.options.target.removeClass();
      this.options.target.addClass(blockName);
      this.options.target.addClass('custom-block');
      this.options.target.find('i').attr('class', blockIcon);
      // update contact settings
      $('#block-modal').removeClass('active');
      this.tearDown();
    }
 });