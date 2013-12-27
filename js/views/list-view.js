// el: #contact-list

var app = app || {};

app.ListView = Backbone.View.extend({
    el: '#content',

    events: {
      'touch #add-contact':'addContact'
    },

    initialize: function( initialContacts ) {
      this.$list = $('#contact-list');
      this.collection = new app.ContactList( initialContacts );
      this.listenTo( this.collection, 'add', this.renderContact );
      this.render();
    },

    // render library by rendering each book in its collection
    render: function() {
      this.collection.each(function( item ) {
          this.renderContact( item );
      }, this );
    },

    // render a book by creating a BookView and appending the
    // element it renders to the library's element
    renderContact: function( item ) {
      var contactView = new app.ContactView({
          model: item
      });
      this.$list.append( contactView.render().el );
    },

    addContact: function(e) {
      var that = this;
      e.gesture.preventDefault();
      forge.contact.select(
        function(contact) {
          that.collection.add( new app.Contact( contact ) )
        },

        function(content) {
          forge.logging.info('Error!');
        }
      );
    }
});