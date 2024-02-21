'use strict'; 

const colors ={
	'Almost White': 'hsl(0, 0%, 98%)',
	'Lighter Gray': 'hsl(11, 2%, 95%)',
	'Overlay': 'hsla(8, 24%, 2%, 0.5)',
};

$(window).resize(function(){
	location.reload();
});
const onClick = (selector, handler) => {
  document.querySelector(selector).addEventListener('click', handler);
};


$(window).on('load',function(){
	$("#navbarCollapse").on("show.bs.collapse", function(){
        //menu is collapsed, show close icon.
		$('#open').toggleClass('hidden');
		$('#close').toggleClass('show');
    });
	$("#navbarCollapse").on("hide.bs.collapse", function(){
        $('#close').toggleClass('show');
		$('#open').toggleClass('hidden');
		
    });  
	  
});