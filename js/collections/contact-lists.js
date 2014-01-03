var app = app || {};

app.ContactLists = Backbone.Collection.extend({
  
  model: app.List,

  localStorage: new Backbone.LocalStorage("ContactLists")

});