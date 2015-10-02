$('document').ready(function(){
	console.log("ready");
	$("#personal h1").fadeIn('slow',function(){
			$(".subtitle").slideDown('slow',function(){
				$('#projects').fadeIn('slow');
				$('#dp').fadeIn('slow',function(){
					$('#work').fadeIn('slow');
					$('footer').fadeIn('slow');
				});
				$('.fa').fadeIn('slow');
				$('.email').fadeIn('slow');
		});
	});
})