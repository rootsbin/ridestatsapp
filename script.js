$(document).ready(function(){
	
    $("#sun-toggle").click(function() {
    	$('body').toggleClass('light-mode');
    	return false;
    });

    $("#video-preview").fitVids();

});