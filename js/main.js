// forge.enableDebug();
// forge.logging.info("Add JavaScript to js/main.js!");
// forge.logging.info("This Runs");
// forge.contact.selectAll(

// 	['name', 'phoneNumbers', 'emails'],

// 	function(contactList) {
// 		alert('Success!');
// 		forge.logging.info(contactList);
// 	},

// 	function(content) {
// 		alert('Error!');
// 	}
// );
// window.addEventListener('load', function() {
// forge.contact.select(

// 	function(contact) {
// 		var newContact = "<div class='contact'><li class='slide'><span class='chevron'></span></li</div>";
// 		$('ul').append(newContact);
// 		var hammertime = Hammer($('ul li').last());
// 		$('ul li').last().prepend('<strong>' + contact.name.formatted + '</strong>');
// 		forge.logging.info(contact);
// 	},

// 	function(content) {
// 		alert('Error!');
// 	}
// );
// });
// window.addEventListener('load', function() { 
// 	$('.slide').hammer().on('drag', function(event) {
// 		forge.logging.info("Dragging!");
// 	  var offset, zero;
// 	  // Prevent the browser from scrolling on mobile
// 		event.gesture.preventDefault();
	  
// 	  // Calculate where left=0 in relation to the parent
// 	  offset = $('#contact-list').offset();
// 	  zero = offset.left;
	    
// 	  $(this).offset({ left: zero + event.gesture.deltaX });

// 	  if( event.gesture.deltaX < 0 ) {
// 		  $(this).parent().css('background', ui_colors.cancel);
// 	  } else {
// 		  $(this).parent().css('background', ui_colors.ok);
// 		}
// 	});

// 	forge.logging.info("This Runs 2");

// 	var hammertime = Hammer(document.getElementById("contact-list"));
// 	console.log(hammertime);
// 	forge.logging.info("WTF");

// 	hammertime.on("tap swipeleft drag hold", function(ev) {
// 	    console.log("something happened");
// 	});
// });