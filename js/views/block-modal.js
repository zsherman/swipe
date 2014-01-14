// TODO: Switch to app.BlockModalView
var BlockModalView = Backbone.View.extend({

    className: 'block-wrapper',

    template: Handlebars.compile($("#block-menu-template").html()),

    events: {
      'click .close':'tearDown',
      'click .save':'save',
      'submit form':'save'
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
      e.preventDefault();
      var data = Backbone.Syphon.serialize(this);
      this.options.model.set({
        phoneNumbers: [ { type: 'home', pref: false, value: data.number } ],
        name: 
         { givenName: 'Jason',
           familyName: 'Novack',
           formatted: data.name },
        displayName: data.name,
        emails: 
         [ { type: 'home',
             pref: false,
             value: data.email } ],
        twitter: data.twitter,
        skype: data.skype
      });
      $('#settings-modal').removeClass('active');
      this.tearDown();
    }
 });