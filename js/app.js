var app = app || {};

$(function () {
        'use strict';

        // Create Hammer Objects
        var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
        var titlebar = new Hammer($(".bar-title"));
        var snapmenu = new Hammer($(".snap-drawers"));
        var groupmodal = new Hammer($(".group-modal"));
        var startX, offsetX;
        var startY, offsetY;

        // Kick things off by creating the `App` and create an initial Contact List
        new app.AppView();
        new app.ListView(sampleContacts);
        new app.ListMenuView(sampleLists);
});