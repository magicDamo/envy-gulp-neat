//stuff.
$(document).ready(function(){
  $('.sliding-panel-button, .menu-item')
  	.on('click touchstart',function (e) {
    	$('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
    	e.preventDefault();
  	});
});
