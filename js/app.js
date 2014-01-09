var app = app || {};

$(function () {
        'use strict';

        app.prototype = {
            views: {},
            collections: {}
          };

        // Create Hammer Objects
        var main = new Hammer($("#contact-app"));
        var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
        var titlebar = new Hammer($(".bar-title"));
        var snapmenu = new Hammer($(".snap-drawers"));
        var groupmodal = new Hammer($(".group-modal"));
        var startX, offsetX;
        var startY, offsetY;
        var currentContacts;

        

        
        // // Instance
        // app.snapper = new Snap({
        //     element: document.getElementById('content'),
        //     dragger: document.getElementById('toggle-left'),
        //     touchToDrag: false
        // }),
        
        
        // app.UpdateDrawers = function(){
        //     var state = app.snapper.state(),
        //         towards = state.info.towards,
        //         opening = state.info.opening;
        //     if(opening=='right' && towards=='left'){
        //         // $('#right-drawer').classList.add('active-drawer');
        //         $('#left-drawer').removeClass('active-drawer');
        //     } else if(opening=='left' && towards=='right') {
        //         // $('#right-drawer').classList.remove('active-drawer');
        //         $('#left-drawer').addClass('active-drawer');
        //     }
        // };
        
        // app.snapper.on('drag', app.UpdateDrawers);
        // app.snapper.on('animating', app.UpdateDrawers);
        // app.snapper.on('animated', app.UpdateDrawers);
        
        // $('#toggle-left').click(function(){
        //     if( app.snapper.state().state=="left" ){
        //             app.snapper.close();
        //     } else {
        //         app.snapper.open('left');
        //     }
        // });

        // Kick things off by creating the `App` and create an initial Contact List
        
        // app.currentContacts = new app.ContactList(sampleContacts);
        // app.list_view = new app.ListMenuView(sampleLists);

        app.app_view = new app.AppView();
        app.lists = new app.ContactLists();             // Create global list collection
        app.lists.create({ id: 1, name: 'Favorites' }); // Should only happen once, the first time the app is started
        app.lists.fetch();                              // Fetch the user's lists
        app.list_view = new app.ListMenuView();         // Render them in the side menu
        $('#group-list li').first().click();            // Trigger tap
        // Trigger a click on the first list to render it in the contacts list view





        // New list collection
        // Fetch existing
                //Add favorites list if none exist
        // Render it
        // New contacts collection
        // Fetch first list's contacts
                // Render message/image if none exist
        // Render them

});