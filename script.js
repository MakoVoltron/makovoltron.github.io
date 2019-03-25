alert('Sup!')

//JS for Smooth Scroll
				
				$(document).ready(function(){
				  // Add smooth scrolling to all links
				  $("a").on('click', function(event) {

				    // Make sure this.hash has a value before overriding default behavior
				    if (this.hash !== "") {
				      // Prevent default anchor click behavior
				      event.preventDefault();

				      // Store hash
				      var hash = this.hash;

				      // Using jQuery's animate() method to add smooth page scroll
				      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
				      $('html, body').animate({
				        scrollTop: $(hash).offset().top
				      }, 800, function(){

				        // Add hash (#) to URL when done scrolling (default click behavior)
				        window.location.hash = hash;
				      });
				    } // End if
				  });
				});
				

//Fade-In ScrollToTopButton	
		
			$(document).ready(function(){


    			$("h1").delay("1000").fadeIn();


				// hide #myBtn first
			  	$("#myBtn").hide();


    			// fade in #bmyBtn
    			$(function () {
       	 		$(window).scroll(function () {
            		if ($(this).scrollTop() > 800) {
                $('#myBtn').fadeIn();
            		} else {
                $('#myBtn').fadeOut();
      
            	}
       			 });


		        // scroll body to 0px on click
		        $('a#myBtn').click(function () {
		            $('body,html').animate({
		                scrollTop: 0
		            }, 800);
		            return false;
		        });
		    });
		});
	