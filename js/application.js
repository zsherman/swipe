// /* Prevent Safari opening links when viewing as a Mobile App */
// (function (a, b, c) {
//     if(c in b && b[c]) {
//         var d, e = a.location,
//             f = /^(a|html)$/i;
//         a.addEventListener("click", function (a) {
//             d = a.target;
//             while(!f.test(d.nodeName)) d = d.parentNode;
//             "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
//         }, !1)
//     }
// })(document, window.navigator, "standalone");
	
		

// $( document ).ready(function() {

	// var source = $("#contact-template").html();
	// var template = Handlebars.compile(source);
 //  var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
 //  var titlebar = new Hammer($(".bar-title"));
 //  var snapmenu = new Hammer($(".snap-drawers"));
 //  var groupmodal = new Hammer($(".group-modal"));
	// var startX, offsetX;
	// var startY, offsetY;


	$('.content').on('dragstart', '.slide', function(e) {
		$(this).removeClass('trans-slide');
		$(this).parent().find('.utilities').hide();
    	$(this).parent().find('.custom').hide();
		e.preventDefault();
		offsetX = ($(window).width()-$(this).outerWidth(true))/2; // Basically 0px
		$('.slide').not(this).css("-webkit-transform", "translate3d(0, 0, 0)");
		if(e.gesture.deltaX < 0) {
			$(this).parent().find('.utilities').show();
		} else {
			$(this).parent().find('.custom').show();
		}
	});

	$('.content').on('drag', '.slide', function(e) {
		if(!Hammer.utils.isVertical(e.gesture.direction)) {
			e.gesture.preventDefault();
			var diffX = (e.gesture.deltaX - offsetX);
			$(this).css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		}
	});

	$('.content').on('release', '.slide', function(e) {
		e.preventDefault();
		$(this).removeClass('hovering');
		$(this).addClass('trans-slide');
	    if( e.gesture.direction == 'right' && e.gesture.deltaX >= 120) {
    		$(this).attr({'left': false, 'right': true});
    		$(this).css("-webkit-transform", "translate3d(268px, 0, 0)");
    	} else if (e.gesture.direction == 'left' && e.gesture.deltaX <= -120) {
	    		$(this).attr({'left': true, 'right': false});
	    		$(this).css("-webkit-transform", "translate3d(-268px, 0, 0)");
    	}
      	else {
      	  $(this).css("-webkit-transform", "translate3d(0, 0, 0)");
		  $(this).parent().find('.utilities').hide();
    	  $(this).parent().find('.custom').hide();
    	  $(this).attr({"left": false, "right": false});
      	}
      	// Reset Position Vars
	    startX = 0;
	    offsetX = 0;
	});

	$('.content').on('tap', '.slide', function(e) {
		e.gesture.preventDefault();
		if($(this).attr('left') == "true" || $(this).attr('right') == "true") {
		 	$(this).css("-webkit-transform", "translate3d(0, 0, 0)");
            $(this).parent().find('.utilities').hide();
            $(this).parent().find('.custom').hide();
		    $(this).attr({"left": false, "right": false});
		} else {
		    $('.slide').not(this).css("-webkit-transform", "translate3d(0, 0, 0)");
		}
	});

	$('.content').on('hold', '.contact', function(e) {
		e.gesture.preventDefault();
		offsetY = $(this).offset().top;
		$(this).addClass('hovering');
		forge.logging.info(offsetY);
	});

	$('.content').on('drag', '.hovering', function(e) {
		if(Hammer.utils.isVertical(e.gesture.direction)) {
			e.gesture.preventDefault();
			var diffY = (e.gesture.deltaY + offsetY);
			forge.logging.info(diffY);
			$(this).offset({ top: diffY });
			//$(this).css("-webkit-transform", "translate3d(0, "+diffY+"px, 0)");
			//this.closest.contact.margin-top = 60px;
		};
	});

	$('.content').on('release', '.hovering', function(e) {
		dropItem = $(this);
		dropItem.removeClass('new-item');
		dropItemOffset = dropItem.offset().top;
		var positions = new Array();
		positions.push(dropItemOffset);
		$('.contact').not(this).each(function(key, val) {
			positions.push($(this).offset().top);
		});
		forge.logging.info(positions);
		positions.sort(function(a,b){return a - b});
		forge.logging.info(positions);
		var listPosition = positions.indexOf(dropItemOffset);
		forge.logging.info(listPosition);
		$('ul.list').insertAtIndex(listPosition, dropItem);
		dropItem.css({'top': 'auto'});
		dropItem.removeClass('hovering');
		forge.logging.info('Done.');
		startY = 0;
		offsetY = 0;
	});


    $('.list').on('drag', function(event) {
    	if(!Hammer.utils.isVertical(event.gesture.direction)) {
    		event.gesture.preventDefault();
    	}
    });

    $('.content').on('drag', function(event) {
    	if(!Hammer.utils.isVertical(event.gesture.direction)) {
    		event.gesture.preventDefault();
    	};
    });

//     $('.content').on('tap', '.delete', function(ev) {
//     	if (confirm("Are you sure you want to remove this contact?")) {
//     		$(this).removeClass('trans-slide');
// 	    	$(this).closest('.contact').animate({ left: -300 }, 350, function(){
// 	    		$(this).remove();
// 	    		$(this).next('li').focus();
// 	    		$('.content').trigger("click");
// 	    	});
// 	    };
//     });

//     $('.content').on('tap', '.calendar', function(ev) {
//     	// Bring up modal
//     	// Add form
//     	// Submit event info to Google JS
//     });

//     $('.content').on('tap', '.settings', function(ev) {
//     	// Capture data and implement
//     	// Clear form
//     });

//     $('.content').on('drag', '#drag-bar', function(ev) {
//     	$('.slide').css("-webkit-transform", "translate3d("+ev.gesture.deltaX+"px, 0, 0)");
//     	$(this).css("-webkit-transform", "translate3d("+ev.gesture.deltaX+"px, 0, 0)");
//     });


//     $('.bar-title').on('tap', '#add-contact', function(ev) {
//     	// Close any open contacts
  //   forge.contact.select(
		// 	function(contact) {
		// 		var newContact = template(contact);
		// 		$('ul').last().append(newContact);
		// 		$('ul li').last().animate({ scrollTop: 0}, 300, function(e) {
		// 			$('.new-item').removeClass('new-item');
		// 		});
		// 	},

		// 	function(content) {
		// 		console.log('Error!');
		// 	}
		// );
//     });

//     $('.snap-drawer .list').on('tap', '.group', function(event) {
//     	// Grab the contact data
//     	// Remove the list
//     	// Fill in template
//     	// Append template
//     	// Close the drawer
//     	$('#contact-list').empty();
//     	for(var i=0; i< 5; i++){
// 		 $('#contact-list').append(template(sample));
// 		};
// 		$('header .hamburger').click();
//     });

//     $('.snap-drawer .list').on('tap', '#add-group', function(event) {

//     });

//     $('.group-modal .content').on('tap', '.create-group', function(event) {
//     	forge.logging.info('Running.');
//     	forge.logging.info($('.group-modal form .group-name').val());
//     	var groupForm = $('.group-modal form');
//     	var groupName = groupForm.find('.group-name').val();
//     	if(groupName != '') {
// 	    	$('.snap-drawer .list .group').last().after("<li class='group'>" + groupName + "</li>");
// 	    	$('.group-modal').removeClass('active');
// 	    	$('.snap-drawer .list .group').trigger('tap');
// 	    } else {
// 	    	alert('You must enter a group name to continue.');
// 	    };
// 	    // Empty the form
//     });

var 
		

		
		// Instance
		snapper = new Snap({
			element: document.getElementById('content'),
			dragger: document.getElementById('toggle-left'),
			touchToDrag: false
		}),
		
		
		UpdateDrawers = function(){
			var state = snapper.state(),
				towards = state.info.towards,
				opening = state.info.opening;
			if(opening=='right' && towards=='left'){
				// $('#right-drawer').classList.add('active-drawer');
				$('#left-drawer').removeClass('active-drawer');
			} else if(opening=='left' && towards=='right') {
				// $('#right-drawer').classList.remove('active-drawer');
				$('#left-drawer').addClass('active-drawer');
			}
		};
		
		snapper.on('drag', UpdateDrawers);
		snapper.on('animating', UpdateDrawers);
		snapper.on('animated', UpdateDrawers);
		
		$('#toggle-left').click(function(){
			if( snapper.state().state=="left" ){
			        snapper.close();
		    } else {
		        snapper.open('left');
		    }
		});
		
// 		// $('#toggle-right').click(function(){
// 		// 	if( snapper.state().state=="right" ){
// 		// 	        snapper.close();
// 		//     } else {
// 		//         snapper.open('right');
// 		//     }
// 		// });


// });


window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);