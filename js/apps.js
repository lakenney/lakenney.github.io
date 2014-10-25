$(document).ready(function(){
	$('#apple-btn').click(function(){
		console.log('The apple button was clicked!');
		alert('We love apples!');
	}); //end apple click

	$('#orange-btn-off').click(function(){
		$('#orange-img').hide(2000);
	});//end orange-off-click
	$('#orange-btn-on').click(function(){
		$('#orange-img').show(3000);
	});//end orange-on-click

	$('#cherry-btn').click(function(){
		$('#cherry-img').animate({
			opacity: '0.25',
			height: 'toggle',
		}, 5000, 'swing', function(){
			$('#cherry-image').css({
				opacity: '1'
			});//end cherry image css
			$('#cherry-btn').css({
				backgroundColor: 'red'
				}, $('#cherry-btn').text("Come Back")
			);//end cherry btn css
		});//end cherry animate

	});//end cherry click


	//$('#banana-btn').hover(function(){ }, function(){});
	$('#banana-btn').hover(function(){ 
		//console.log('The banana-btn was hovered over.');
		$('#banana-btn').css({
			backgroundColor: 'red'
		});//end css
	}, function(){
		//console.log('The banana-btn was moused out.');
		$('#banana-btn').css({
			backgroundColor: 'blue'
		});//end css
	}); //end banana hover



}); //end ready




