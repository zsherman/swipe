/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");
	
		

window.addEventListener('load', function() {

    var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
    var titlebar = new Hammer($(".bar-title"));

    // var startX, offsetX;

 //    $('.content').on('drag', '.slide', function(event) {
	//     //forge.logging.info(event.gesture.direction);
	// 	  if(!Hammer.utils.isVertical(event.gesture.direction)) {
	// 	  	// Prevent the browser from scrolling on mobile
	// 	  	event.gesture.preventDefault();
	// 		var offset, zero;
			  
	// 		  // Calculate where left=0 in relation to the parent, jQuery
	// 		  // offset = $('#contact-list').offset();
	// 		  // zero = offset.left;

	// 		  // $(this).offset({ left: zero + event.gesture.deltaX });
			  
	// 		  // With CSS3 3D Transform

	// 		  offset = ($(window).width()-$(this).outerWidth(true))/2;
	// 		  startX = e.targetTouches[0].pageX - offsetX;

	// 	}
	// });


		var startX, offsetX;

		$('.content').on('dragstart', '.slide', function(e) {
			e.preventDefault();
			offsetX = ($(window).width()-$(this).outerWidth(true))/2;
			startX = e.gesture.deltaX - offsetX;
			$('.slide').not(this).css("-webkit-transform", "translate3d(0, 0, 0)");
			if(e.gesture.deltaX < 0) {
				$(this).parent().find('.utilities').show();
			} else {
				$(this).parent().find('.custom').show();
			}
			$(this).removeClass('trans-slide');
		});

		$('.content').on('drag', '.slide', function(e) {
			e.preventDefault();
			var diffX = (e.gesture.deltaX - offsetX) - startX;
			$(this).css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		});

		$('.content').on('release', '.slide', function(e) {
			e.preventDefault();
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
	      	}

	      	// Reset Position Vars
		    startX = 0;
		    offsetX = 0;
		});

		// $('.content').on('dragstart', '.slide', function(event) {
		// 	$(this).css('background', '#eee');
		// 	$(this).parent().find('.utilities').hide();
		// 	$(this).parent().find('.custom').hide();
		// 	$('.slide').not(this).animate({ left: 0}, 150);
		// 	if(event.gesture.deltaX < 0) {
		// 		$(this).parent().find('.utilities').show();
		// 	} else {
		// 		$(this).parent().find('.custom').show();
		// 	}
		// });

  //   $('.content').on('dragend', '.slide', function(event) {
  //   	$(this).css('background', '#fff');
  //   	if( event.gesture.direction == 'right' && $(this).offset().left >= 120) {
  //   		$(this).attr({'left': false, 'right': true});
  //   		$(this).animate({ left: 268 }, 150);
  //   	} else if (event.gesture.direction == 'left' && $(this).offset().left <= -120) {
	 //    		$(this).attr({'left': true, 'right': false});
	 //    		$(this).animate({ left: -268 }, 150);
  //   	}
  //     	else {
  //     	  $(this).animate({ left: 0 }, 150, function () {
  //   	  		$(this).parent().css('background', '#fff');
  //   	  		$(this).parent().find('.utilities').hide();
  //   	  		$(this).parent().find('.custom').hide();
  //     		});
  //     	}
  //   });

  //   $('.content').on('tap', '.slide', function(event) {
  // 			if($(this).attr('left') == "true" || $(this).attr('right') == "true") {
  // 				$(this).animate({ left: 0 }, 150, function() {
  // 					$(this).parent().find('.utilities').hide();
  // 					$(this).parent().find('.custom').hide();
  // 				});
  // 				$(this).attr({"left": false, "right": false});
  // 				forge.logging.info('close that shit.');
  // 			} else {
  // 					$('.slide').not(this).animate({ left: 0}, 150);
  // 			}
  //   });

  //   $('.content').on('release', '.slide', function(event) {
  //   	//$(this).css('background', '#fff');
  //   });

  //   $('.content').on('touch', '.slide', function(){
  //   	//$(this).css('background', '#eee');
  //   });


    $('.list').on('drag', function(event) {
    	if(!Hammer.utils.isVertical(event.gesture.direction)) {
    		event.gesture.preventDefault();
    	}
    });

    $('.delete').click(function(ev) {
    	if (confirm("Are you sure you want to remove this contact?")) {
	    	$(this).closest('.contact').animate({ left: -300 }, 350, function(){
	    		$(this).remove();
	    		$(this).next('li').focus();
	    		$('.content').trigger("click");
	    	});
	    };
    });

    $('.bar-title').on('tap', '#add-contact', function(ev) {
    	forge.contact.select(
			function(contact) {
				var newContact = "<div class='contact'><li class='slide'><span class='chevron'></span></li</div>";
				$('ul').append(newContact);
				$('ul li').last().animate({ scrollTop: 0}, 300);
				$('ul li').last().prepend('<strong>' + contact.name.formatted + '</strong>');
			},

			function(content) {
				alert('Error!');
			}
		);
    })


    // $('.content').hammer().on('drag', function(event) {
    // 	event.gesture.preventDefault();
    // });
 
	// forge.logging.info("This Runs 2");

	// var hammertime = Hammer(document.getElementById("main-content"));
	// console.log(hammertime);
	// console.log("WTF");

	// hammertime.on("swipeleft", function(ev) {
	//     forge.logging.info("something happened");
	//     alert("Do something.");
	//     $('.slide').hide();

	// });


});

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
				$('#right-drawer').classList.add('active-drawer');
				$('#left-drawer').classList.remove('active-drawer');
			} else if(opening=='left' && towards=='right') {
				$('#right-drawer').classList.remove('active-drawer');
				$('#left-drawer').classList.add('active-drawer');
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
		
		$('#toggle-right').click(function(){
			if( snapper.state().state=="right" ){
			        snapper.close();
		    } else {
		        snapper.open('right');
		    }
		});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);