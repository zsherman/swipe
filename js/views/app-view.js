var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Top Level App View
  app.AppView = Backbone.View.extend({

    el: '#contact-app',

    groupTemplate: Handlebars.compile($("#group-options-template").html()),

    events: {
      'tap #add-contact':'addContact',
      'swipe .bar-title':'swipeHeader',
      'tap #sms':'groupSMS'
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
      forge.contact.select(
        function(contact) {
          app.contact_list_view.addContact(contact);
          console.log('adding');
        },

        function(content) {
          console.log('Error!');
        }
      );
    },

    swipeHeader: function(e) {
      console.log(e.gesture.direction);
    },

    addAll: function() {

    },

    groupOptions: function(e) {
      // Find all the models
      // Fill in template
      // Bring up menu (attach template)
      $('#contact-app').append(this.groupTemplate());
      // Execute choice
      // Translate all checked back to (0,0,0)
      // Remove class checked and add class slide
    },

    groupSMS: function(e) {
      e.gesture.stopPropagation();
      var numbers = [];
      $('.checked').each(function(index) {
        numbers.push($(this).parent().find('.sms').data('sms'));
      });
      console.log(numbers);
      var message = '';
      forge.sms.send({
        body: message,
        to: numbers
      }, function () {
        $('.checked').css("-webkit-transform", "translate3d(0, 0, 0)");
        $('.checked').attr({"left": false, "right": false});
        contactOpen = false;
        $('#group-options').remove();
        $('#blackout').remove();
        $('.checked').addClass('slide');
        $('.checked').removeClass('checked');
        $('.checked').removeClass('open');
      });
    }



  });

    
})(jQuery);