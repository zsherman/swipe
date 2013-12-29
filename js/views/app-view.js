var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Top Level App View
  app.AppView = Backbone.View.extend({

    el: '#contact-app',

    events: {
      
    },

    initialize: function () {
    	// this.$groups = this.$('#group-list');
    	// this.$menuButton = this.$('#toggle-left');
      this.$header = this.$('.bar-title');
      this.$newContact = this.$('#add-contact');
      this.$content = this.$('#main-content');
      this.$list = $('#contact-list');

      // this.listenTo(app.Contacts, 'add', this.addOne);
      // this.listenTo(app.Contacts, 'reset', this.addAll);
      // app.contacts.fetch({reset: true});        
    },

    render: function () {
    
    },

    addContact: function(e) {
      e.preventDefault();
    },

    addAll: function() {

    }

  });

    
})(jQuery);