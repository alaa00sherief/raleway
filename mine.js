
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});



var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }


});


// if HTML DOM Element that contains the map is found...
if (document.getElementById('map-canvas')){
 
    // Coordinates to center the map
    var myLatlng = new google.maps.LatLng(52.525595,13.393085);
 
    // Other options for the map, pretty much selfexplanatory
    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    // Attach a map to the DOM Element, with the defined settings
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

};


$("li").click(function(){
  $(this).addClass("active")
    $(this).siblings().removeClass("active")


});

var myArrow = document.querySelector(".sli3");

  
$(document).ready(function(){
  $(".carousel-item").mouseover(function(){
    $(".sli3").css("margin", "0 60px");
     $(".sli3").css("backgroundColor", "#337ab7");
      $(".sli2").css("margin", "0 60px");
     $(".sli2").css("backgroundColor", "#337ab7");
  });
  $(".carousel-item").mouseout(function(){
    $(".sli3").css("margin", "0 0");
      $(".sli3").css("backgroundColor", "#fff");
       $(".sli2").css("margin", "0 0");
      $(".sli2").css("backgroundColor", "#fff");



  });
});

$("document").ready(function(){

  $("#loading-sc .sk-folding-cube").fadeOut(2000 , function(){
    
    $("#loading-sc").fadeOut(1000 , function(){
      $("body").css("overflow","auto")
    })
  });
});



$(window).scroll(function(){
	
	var wScroll = $(window).scrollTop();
	var galleryOffset = $("header").offset().top;


	if(wScroll > galleryOffset)
		{
$(".bg-home").css("backgroundColor","#000")			
		}
	else
		{
$(".bg-home").css("backgroundColor","")			
	
		}

});
var typed = new Typed(".element", {
  strings: ["", "Make Business Easy With Beautiful .","Landing Page Raleway."],
  typeSpeed: 30,
  backSpeed: 1,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: 'now ',
  autoInsertCss: true,
});

