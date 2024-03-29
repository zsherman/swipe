var app = app || {};

// Contact Item View
// --------------

// The DOM element for a contact item...
app.ContactView = Backbone.View.extend({

  className: 'contact new-item',

  template: Handlebars.compile($("#contact-template").html()),

  smsTemplate: Handlebars.compile($("#sms-template").html()),

  events: {
    'click .settings':'editContact',
    'click .delete':'deleteContact',
    'hold .sms':'defaultSms',
    'tap .add-block':'blockMenu',
    'hold .custom-block':'blockMenu',
    'tap .camera':'takePhoto'
  },

  initialize: function() {
    this.$settings = this.$('.settings');
    this.$delete = this.$('.delete');
    this.listenTo(this.model, 'change', this.render);
    this.model.on('destroy', this.remove, this);
  },

  render: function() {
    this.$el.html( this.template( this.model.toJSON() ) ); // Initialize array in model with custom blocks
    this.$input = this.$('.edit');
    return this;
  },

  // Switch this view into `"editing"` mode, displaying the input field.
  editContact: function(e) {
    e.preventDefault();
    var modalView = new SettingsModalView({model: this.model, view: this});
    // modalView.show();
    // this.$el.addClass('editing');
    // this.$input.focus();
  },


  deleteContact: function(e) {
    e.preventDefault();
    this.model.destroy();
    // persist
    this.remove();
  },

  defaultSms: function(ev) {
    ev.gesture.stopPropagation();
    $('#contact-app').append(this.smsTemplate(this.model.toJSON()));
  },

  blockMenu: function(e) {
    var target = $(e.currentTarget);
    var modalView = new BlockModalView({model: this.model, view: this, target: target });
  },

  mmsPhoto: function(file) {
    forge.logging.info(file);
    var numbers = [];
    numbers.push(this.$el.find('.phone').data('number'));
    // var message = file.uri;
    forge.logging.info(numbers);
    forge.sms.send({
      body: file.uri,
      to: numbers
    }, function () {
      console.log('It actually worked');
    });
  },


  takePhoto: function(e) {
    var self = this;
    forge.file.getImage({},
      function(file){
        self.mmsPhoto(file);
      },
      function(content){}
    );
  }

});