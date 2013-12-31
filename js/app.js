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
        new app.AppView();
        app.currentContacts = new app.ContactList(sampleContacts);
        app.firstList = new app.ListView();
        new app.ListMenuView(sampleLists);
});