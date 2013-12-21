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

	var source = $("#contact-template").html();
	var template = Handlebars.compile(source);
    var hammertime = new Hammer($(".content")[0], { drag_lock_to_axis: true});
    var titlebar = new Hammer($(".bar-title"));
	var startX, offsetX;

	$('.content').on('dragstart', '.slide', function(e) {
		$(this).removeClass('trans-slide');
		$(this).parent().find('.utilities').hide();
    	$(this).parent().find('.custom').hide();
		e.preventDefault();
		offsetX = ($(window).width()-$(this).outerWidth(true))/2;
		startX = e.gesture.deltaX - offsetX;
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
			var diffX = (e.gesture.deltaX - offsetX) - startX;
			$(this).css("-webkit-transform", "translate3d("+diffX+"px, 0, 0)");
		}
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


    $('.list').on('drag', function(event) {
    	if(!Hammer.utils.isVertical(event.gesture.direction)) {
    		event.gesture.preventDefault();
    	}
    });

    $('.content').on('tap', '.delete', function(ev) {
    	if (confirm("Are you sure you want to remove this contact?")) {
	    	$(this).closest('.contact').animate({ left: -300 }, 350, function(){
	    		$(this).remove();
	    		$(this).next('li').focus();
	    		$('.content').trigger("click");
	    	});
	    };
    });

    $('.content').on('tap', '.settings', function(ev) {

    });


    $('.bar-title').on('tap', '#add-contact', function(ev) {
    	forge.contact.select(
			function(contact) {
				var newContact = template(contact);
				$('ul').last().append(newContact);
				$('ul li').last().animate({ scrollTop: 0}, 300);
			},

			function(content) {
				console.log('Error!');
			}
		);
    });




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