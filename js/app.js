var app = app || {};

$(function () {
        'use strict';

        app.prototype = {
            views: {},
            collections: {}
          };

        // Create Hammer Objects
        var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
        var titlebar = new Hammer($(".bar-title"));
        var snapmenu = new Hammer($(".snap-drawers"));
        var groupmodal = new Hammer($(".group-modal"));
        var startX, offsetX;
        var startY, offsetY;
        var currentContacts;

        // Kick things off by creating the `App` and create an initial Contact List
        app.app_view = new app.AppView();
        app.currentContacts = new app.ContactList(sampleContacts);
        app.first_list = new app.ListView();
        app.list_view = new app.ListMenuView(sampleLists);


        // app.lists = new app.ContactLists();
        // var favorites = new app.List({ name: 'Favorites' });
        // app.lists.add(new app.List({name: data.name})
        // app.lists.fetch();
        // New list collection
        // Fetch existing
                //Add favorites list if none exist
        // Render it
        // New contacts collection
        // Fetch first list's contacts
                // Render message/image if none exist
        // Render them

});