var app = app || {};

// Contact Item View
// --------------

// The DOM element for a contact item...
app.ContactView = Backbone.View.extend({

  className: 'contact',

  template: Handlebars.compile($("#contact-template").html()),

  events: {
    'click .settings':'editContact',
    'tap .delete':'deleteContact'
  },

  initialize: function() {
    this.$settings = this.$('.settings');
    this.$delete = this.$('.delete');
    this.listenTo(this.model, 'change', this.render);
    this.model.on('destroy', this.remove, this);
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) );
    this.$input = this.$('.edit');
    return this;
  },

  // Switch this view into `"editing"` mode, displaying the input field.
  editContact: function(e) {
    e.preventDefault();
    modalView = new SettingsModalView({model: this.model, view: this});
    // modalView.show();
    // this.$el.addClass('editing');
    // this.$input.focus();
  },

  // Close the `"editing"` mode, saving changes to the todo.
  closeEdit: function(model) {
    // forge.logging.info('saving');
    // var formData = {};
    // $( '#settings-modal form' ).children( 'input' ).each( function( i, el ) {
    //     {
    //         formData[ el.id ] = $( el ).val();
    //     }
    // });
    // this.model.set(formData);
    // this.render();
    // this.$settingsModal.removeClass('active');
  },

  deleteContact: function() {
    this.model.destroy();
    this.remove();
  },

  // If you hit `enter`, we're through editing the item.
  updateOnEnter: function( e ) {
    if ( e.which === ENTER_KEY ) {
      this.closeEdit();
    }
  }
});