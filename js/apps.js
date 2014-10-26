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
			});//end cherry btn css
			$('#cherry-btn').html({ 
				text : 'Come Back'
			});//end cherry-btn html

		});//end cherry animate
	});//end cherry click

	$('#jumbotron-btn').click(function(){
		$('#jumbotron-img').removeClass('img-circle').addClass('img-rounded');
		$('.jumbotron h1').text('Yummy Fruit!');
		$('.jumbotron p').prepend('<p>You clicked the button and made a new paragraph!</p>');
		$('#jumbotron-btn').replaceWith('<p><span class="label label-success">Success! You clicked the button.</span></p>');
	});//end jumbotron img css

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

	//$('#banana-btn').hover(function(){ }, function(){});
	$('#apple-img').hover(function(){
		$('#apple-img').attr({
			'src' : 'img/apples-400.jpg',
			'class' : 'img-responsive img-circle'
		});//end attr
	}, function(){
		$('#apple-img').attr({
			'src' : 'img/apple-300.jpg',
			'class' : 'img-responsive'
		});//end attr
	});

}); //end ready




