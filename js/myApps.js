$(document).ready(function(){

	//$('Selector').hover(function(){ }, function(){}); for home page
	$('#jumbotron-img').hover(function(){
		$('#jumbotron-img').attr({
			'class' : 'pull-right img-responsive img-circle'
		});//end attr
		}, function(){
		$('#jumbotron-img').attr({
			'class' : 'pull-right img-responsive img-rounded'
		});//end attr
	});//end hover

	$('#readMore-btn').click(function(){
		$('.green').replaceWith('<p>The clay is very dry at this stage, so I\'m applying water and slip to get other pieces to adhere to it.</p>');
	});//end jumbotron img css


});//end ready