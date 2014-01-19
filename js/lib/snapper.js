

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
	
		var 
		
		// Helper
		$ = function(id){
			return document.getElementById(id);
		},
		
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
				$('right-drawer').classList.add('active-drawer');
				$('left-drawer').classList.remove('active-drawer');
			} else if(opening=='left' && towards=='right') {
				$('right-drawer').classList.remove('active-drawer');
				$('left-drawer').classList.add('active-drawer');
			}
		};
		
		snapper.on('drag', UpdateDrawers);
		snapper.on('animating', UpdateDrawers);
		snapper.on('animated', UpdateDrawers);
		
		$('toggle-left').addEventListener('click', function(){
			if( snapper.state().state=="left" ){
			        snapper.close();
		    } else {
		        snapper.open('left');
		    }
		});
		
		$('toggle-right').addEventListener('click', function(){
			if( snapper.state().state=="right" ){
			        snapper.close();
		    } else {
		        snapper.open('right');
		    }
		});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);

var ui_colors = {
  cancel: '#FF0521',
  ok: 	'#00B636'
}

$('.slide').hammer().on('drag', function(event) {
  var offset, zero;
  // Prevent the browser from scrolling on mobile
	event.gesture.preventDefault();
  
  // Calculate where left=0 in relation to the parent
  offset = $('.slider-list').offset();
  zero = offset.left;
    
  $(this).offset({ left: zero + event.gesture.deltaX });

  if( event.gesture.deltaX < 0 ) {
	  $(this).parent().css('background', ui_colors.cancel);
  } else {
	  $(this).parent().css('background', ui_colors.ok);
	}
});

$('.slide').hammer().on('release', function(event) {
  $(this).animate({ left: 0 }, 100, function () {
	  $(this).parent().css('background', '#fff');
  });
});