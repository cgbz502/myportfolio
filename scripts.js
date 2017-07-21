$(document).ready(function(){
$(".scroll").click(function(event){
         event.preventDefault();
         //calculate destination place
         var dest=0;
         if($(this.hash).offset().top > $(document).height()-$(window).height()){
              dest=$(document).height()-$(window).height();
         }else{
              dest=$(this.hash).offset().top;
         }
         //go to destination
         $('html,body').animate({scrollTop:dest}, 1000,'swing');
     });
});

$( document ).ready(function() {

    // once the page is loaded, 
    // add the class 'fade-in' to the b element
    $('b').addClass('fade-in');

  });
 
//$(document).ready(function(){
//var clicked=true;
//$('.showRest').on('click', function(){
    //if(clicked)
    //{
    //   clicked=false;
    //    $('.animated-object').animate({"height": '100%', "opacity": 1,
    //    }, 500);
    //}
    //else
    //{
    //    clicked=true;
    //    $('.animated-object').animate({"height": 0, "opacity": 0,
    //    }, 500);
   // }
// });
// });

$(document).ready(function() {
    $('.mycarousel').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarousel').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarousel-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function() {
    $('.mycarouseltwo').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarouseltwo').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarouseltwo-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarouseltwo-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function() {
    $('.mycarouselthree').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarouselthree').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarouselthree-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarouselthree-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function() {
    $('.mycarouselfour').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarouselfour').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarouselfour-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarouselfour-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function() {
    $('.mycarouselfive').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarouselfive').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarouselfive-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarouselfive-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function() {
    $('.mycarouselsix').jcarousel({
        // Configuration goes here
		
		wrap: 'circular',
		center: true
    });
	
	$('.mycarouselsix').jcarouselAutoscroll({
            interval: 1000000000,
            target: '+=1',
            autostart: true
        });
	
	$('.mycarouselsix-prev').jcarouselControl({
        target: '-=1'
    });

    $('.mycarouselsix-next').jcarouselControl({
        target: '+=1'
    });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
	  items: 1,
	  margin: 10, 
	  autoHeight: true
    });
  
});

  
 
 //$( document ).ready(function() {
  //$("p").on('click', function() {
    //$(this).hide();
   //})
 //});
  
   //ANOTHER WAY TO CREATE A DROPDOWN  **BUT THERE IS SOME TYPE OF ERROR HERE (I THINK I FIXED IT)
   //$( document ).ready(function() {
    //on click: toggle the "show-menu" class
   //$('.dropdown').click(function(){
        //$('.dropdown-content').toggle();
    //})
//});
  

  // SAMPLE FOR SETTING UP BASIC JQUERY CODE  $( document ).ready(function() {

  //$('body').addClass('super-awesome-class');

  //});
