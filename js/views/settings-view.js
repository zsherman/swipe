// TODO: Swith to app.SettingsModalView
var SettingsModalView = Backbone.View.extend({

    className: 'settings-wrapper',

    template: Handlebars.compile($("#edit-contact-template").html()),

    events: {
      'click .close':'save',
      'click .save':'save'
    },

    initialize: function(options) {
      this.options = options || {};
      // $('#contact-app').append(this.render().el);
      $('#settings-modal').html(this.render().el);
      this.show();
      // this.show();
    },

    show: function() {
      $('#settings-modal').addClass('active');
    },

    tearDown: function() {
      this.remove();
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