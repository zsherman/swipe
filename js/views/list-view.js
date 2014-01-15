var app = app || {};

app.ListView = Backbone.View.extend({
    tagName: 'ul',
    id: '#contact-list',
    className: 'list',

    events: {

    },

    initialize: function() {
      this.collection = this.model.contacts;
      console.log(this.model);
      this.listenTo( this.collection, 'add', this.renderContact ); // May want to use .on instead if the event handler is being removed
      this.listenTo( this.collection, 'reset', this.render );
      // this.collection.on('add', this.renderContact, this);
      this.render();
    },

    // render contact list by rendering each contact in its collection
    render: function() {
      // if 0, render the empty template
      if(this.collection.length === 0) {
        $('.no-contacts').remove();
        $('#main-content').append("<div class='no-contacts'><i class='ion-ios7-contact'></i><h1>Add some contacts.<h1></div>");
      } else {
        this.collection.each(function( item ) {
            this.renderContact( item );
        }, this );
        $('.no-contacts').remove();
        $('#main-content').empty();
        $('#main-content').append(this.$el);
        $('#main-content').prepend('<i class="icon ion-search search-icon"></i><input class="search" placeholder="Search Contacts"/>');
        var options = {
            valueNames: [ 'name' ]
        };

        var userList = new List('main-content', options);
      };
    },

    // render a contact by creating a ContactView and appending the
    // element it renders to the list's element
    renderContact: function( item ) {
      if(this.collection.length === 1) {
        $('.no-contacts').remove();
        $('#main-content').append(this.$el);
      };
      var contactView = new app.ContactView({
          model: item
      });
      this.$el.append( contactView.render().el );
    },

    addContact: function(contact) {
      this.collection.create( new app.Contact( contact ) );
      console.log('added');
    }

});