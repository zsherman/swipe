/* Prevent Safari opening links when viewing as a Mobile App */
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

// 	if (navigator.userAgent.match(/(iPad.*|iPhone.*|iPod.*);.*CPU.*OS 7_\d/i)) {
//   $("body").addClass("ios7");
//   $("body").append('<div id="ios7statusbar"/>');
// }

contactOpen = false;

	$('.content').on('dragstart', '.slide', function(e) {
		$(this).removeClass('trans-slide');
		$(this).parent().find('.utilities').hide();
    	$(this).parent().find('.custom').hide();
		e.preventDefault();
		offsetX = ($(window).width()-$(this).outerWidth(true))/2; // Basically 0px
		$('.slide').not(this).css("-webkit-transform", "translate3d(0, 0, 0)"); // Do this with css class
		if(e.gesture.deltaX < 0) {
			$(this).parent().find('.utilities').show();
		} else {
			$(this).parent().find('.custom').show();
		}
	});

	$('.content').on('dragstart', '.checked', function(e) {
		e.gesture.preventDefault();
		$('.checked').removeClass('trans-slide');
		$('.checked').parent().find('.utilities').hide();
    $('.checked').parent().find('.custom').hide();
    $('.group-window').show();
    offsetX = ($(window).width()-$(this).outerWidth(true))/2;
	});

	$('.content').on('drag', '.slide', function(e) {
		if(!Hammer.utils.isVertical(e.gesture.direction)) {
			e.gesture.preventDefault();
			var diffX = (e.gesture.deltaX - offsetX);
			$(this).css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		}
	});

	$('.content').on('drag', '.checked', function(e) {
		if(!Hammer.utils.isVertical(e.gesture.direction)) {
			e.gesture.preventDefault();
			var diffX = (e.gesture.deltaX - offsetX);
			$('.checked').css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		}
	});

	$('.content').on('release', '.slide', function(e) {
		e.preventDefault();
		$(this).removeClass('hovering');
		$(this).addClass('trans-slide');
	    if( e.gesture.direction == 'right' && e.gesture.deltaX >= 120) {
    		$(this).css("-webkit-transform", "translate3d(83.8%, 0, 0)");
        $(this).attr({'left': false, 'right': true});
        $(this).addClass('open');
    		$('.checked').addClass('slide');
    		$('.checked').removeClass('checked');
    		contactOpen = true;
    	} else if (e.gesture.direction == 'left' && e.gesture.deltaX <= -120) {
	    		$(this).css("-webkit-transform", "translate3d(-83.8%, 0, 0)");
          $(this).attr({'left': true, 'right': false});
          $(this).addClass('open');
	    		$('.checked').addClass('slide');
    			$('.checked').removeClass('checked');
	    		contactOpen = true;
    	}
      	else {
      	  $(this).css("-webkit-transform", "translate3d(0, 0, 0)");
			  	$(this).parent().find('.utilities').hide();
	    	  $(this).parent().find('.custom').hide();
	    	  $(this).attr({"left": false, "right": false});
	    	  contactOpen = false;
      	}
      	// Reset Position Vars
	    startX = 0;
	    offsetX = 0;
	});

	$('.content').on('release', '.checked', function(e) {
		$('.checked').addClass('trans-slide');
		$('.checked').removeClass('hovering');
		if( e.gesture.direction == 'right' && e.gesture.deltaX >= 120) {
        app.app_view.groupOptions(e);
        $('.checked').css("-webkit-transform", "translate3d(83.8%, 0, 0)");
    		$('.checked').attr({'left': false, 'right': true});
        $('.checked').addClass('open');
    		contactOpen = true;
    	} else if (e.gesture.direction == 'left' && e.gesture.deltaX <= -120) {
          app.app_view.groupOptions(e);
          $('.checked').css("-webkit-transform", "translate3d(-83.8%, 0, 0)");
	    		$('.checked').attr({'left': true, 'right': false});
          $('.checked').addClass('open');
	    		contactOpen = true;
    	} else {
    	  $('.checked').css("-webkit-transform", "translate3d(0, 0, 0)");
		  	//$('.checked').parent().find('.group-window').hide();
        $('.checked').removeClass('open');
    	  $('.checked').attr({"left": false, "right": false});
    	  contactOpen = false;
    	}
	});

	$('.content').on('tap', 'li', function(e) {
		e.preventDefault();
		if(contactOpen === false) {
			if($(this).hasClass('checked')) {
				$(this).addClass('slide');
				$(this).removeClass('checked');
			} else {
				$(this).addClass('checked');
				$(this).removeClass('slide');
			}
		} else if($(this).attr('left') == "true" || $(this).attr('right') == "true") {
		 	$(this).css("-webkit-transform", "translate3d(0, 0, 0)"); // Do this with css class instead
      $(this).attr({"left": false, "right": false});
      $(this).removeClass('open');
      // $(this).parent().find('.utilities').hide();
      // $(this).parent().find('.custom').hide();
	    contactOpen = false;
		} else {
	    $('.slide').not(this).css("-webkit-transform", "translate3d(0, 0, 0)"); // Do this with css class instead
	    $('.slide').not(this).attr({"left": false, "right": false});
      $('.open').removeClass('open');
	    contactOpen = false;
		}
	});

	$('.content').on('hold', '.slide', function(e) {
		e.gesture.preventDefault();
		contact = $(this).parent();
		offsetY = contact.offset().top;
		contact.addClass('hovering');
	});

	$('.content').on('drag', '.hovering', function(e) {
		if(Hammer.utils.isVertical(e.gesture.direction)) {
			e.gesture.preventDefault();
			var diffY = (e.gesture.deltaY + offsetY);
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
		positions.sort(function(a,b){return a - b});
		var listPosition = positions.indexOf(dropItemOffset);
		$('ul.list').insertAtIndex(listPosition, dropItem);
		dropItem.css({'top': 'auto'});
		dropItem.removeClass('hovering');
		startY = 0;
		offsetY = 0;
	});

  // $('.list').on('drag', function(event) {
  // 	if(!Hammer.utils.isVertical(event.gesture.direction)) {
  // 		event.gesture.preventDefault();
  // 	}
  // });

  // $('.content').on('drag', function(event) {
  // 	if(!Hammer.utils.isVertical(event.gesture.direction)) {
  // 		event.gesture.preventDefault();
  // 	};
  // });

  $('#contact-app').on('tap', '.cancel-sms', function(){
    // Close item and set attr left && right to false and contactOpen to false
    $('.open').css("-webkit-transform", "translate3d(0, 0, 0)");
    $('.open').attr({"left": false, "right": false});
  	$('#blackout').remove();
  	$('#ios7menu').remove();
    $('.open').removeClass('open');
    contactOpen = false;
    
  });

  $('#contact-app').on('tap', '#blackout', function(){
    $('#ios7menu').remove(); 
    $('li').css("-webkit-transform", "translate3d(0, 0, 0)");
    $('li').attr({"left": false, "right": false});
    $('li').removeClass('open');
    contactOpen = false;
    $('#group-options').remove();
    $('#blackout').remove();
    $('.checked').addClass('slide');
    $('.checked').removeClass('checked');
  });

  $('#contact-app').on('tap', '.sms-message', function(e){
  	var message = $(this).children('a').text();
  	var phoneNumber = $(this).data('phone');
  	forge.sms.send({
  	  body: message,
  	  to: [phoneNumber]
  	}, function () {
  	  $('#blackout').remove();
  		$('#ios7menu').remove();
  	});
  });

  // $('#contact-app').on('tap', '.mail-message', function(e){
  //   var message = $(this).children('a').text();
  //   var phoneNumber = $(this).data('phone');
  //   forge.sms.send({
  //     body: message,
  //     to: [phoneNumber]
  //   }, function () {
  //     $('#blackout').remove();
  //     $('#ios7menu').remove();
  //   });
  // });


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