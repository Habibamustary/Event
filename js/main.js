// pop-up
setTimeout(function(){
$('#pop-up').show().addClass('animated fadeInDown');},2500
);
$(".close").click(function(){
	// alert("Hi sonia");
	$('#pop-up').hide("slow");	
});

// Animation

AOS.init();
var go = true;
$(window).scroll(function() {
    if ($(this).scrollTop() > 500 && go) {
        $("#return-to-top").show('slow');
        go = false;
    } else if ($(this).scrollTop() < 500 && !go) {
        $("#return-to-top").hide('slow');
        go = true;
    }
});

// Top button
  
  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


















