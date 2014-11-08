$(document).ready(function(){

	//$('Selector').hover(function(){ }, function(){}); for home page
// See index page for jumbotron-img
	$('#jumbotron-img').hover(function(){
		$('#jumbotron-img').attr({
			'src' : 'img/lucille.jpg',
			'class' : 'pull-right img-responsive img-circle'
		}).fadeTo(2000, 0.5);//end attr
		}, // end mouse over
		function(){
		$('#jumbotron-img').attr({
			'src' : 'img/lucille-l.jpg',
			'class' : 'pull-right img-responsive img-rounded'
		}).fadeTo(1000, 1.0);;//end attr
	});//end hover

// Tool tip for navigation dropdown menu on pages yet to be created
    	$('textarea').tooltip();
// Collapse for contact.html page
    	$('.form-group.collapse').collapse({
    		height: '5000'
    	});
// See product panel on product.html page
	$('#readMore-btn').click(function(){
		$('.productPanel').replaceWith('<p>Maybe you\'re looking for something more elaborate such as a locket in fine silver.</p>');
		alert('I love metal clay!')
	});//end btn click

// See form-start-video2.html
	$('#searchengine').change(function(){
		if ($('#searchengine').val() == 'google')
		{
			$('.search-group .help-block').text('Google Rocks!');
		} else if ($('#searchengine').val() == 'yahoo')
		{
			$('.search-group .help-block').text('Yohoo Rocks!');
		} else if ($('#searchengine').val() == 'bing') {
			$('.search-group .help-block').text('Bing Rocks!');
		} else {
			$('.search-group .help-block').text('Pick a real option!');
		}
	});//end change

// Post text per value selected in form on contact.html page.
	$('input:radio').change(function(){
		if ($('input:radio:checked').val() == 'swarovski')
		{
			$('.request-custom .help-block').text('Swarovski crystals are stunning!');
		} else if ($('input:radio:checked').val() == 'mirano') {
			$('.request-custom .help-block').text('Mirano glass is enchanting!');
		} else if ($('input:radio:checked').val() == 'locket') {
			$('.request-custom .help-block').text('Lockets hold stories!');
		} else if ($('input:radio:checked').val() == 'solder') {
			$('.request-custom .help-block').text('Solder minor repairs (without stones).');
		}else {
			$('.request-custom .help-block').text('');
		}
	});//end click	

// Validation for 'name' on form on contact.html page.
	$('#name').focusout(function(){
		if ($('#name').val().length == 0) {
			$('.name-group .help-block').text('This is a required field');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group has-error'
			});// end css attr
		} else {
			$('.name-group .help-block').text('');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group'
			});//end css attr
		}
	});// end focus out

// Validation for 'email' form on contact.html page.
	$('#email').focusout(function(){
		if ($('#email').val().length == 0) {
			$('.email-group .help-block').text('This is a required field');
			$('.email-group').attr({
				class: 'col-sm-6 form-group email-group has-error'
			});// end css attr
		} else {
			$('.email-group .help-block').text('');
			$('.email-group').attr({
				class: 'col-sm-6 form-group email-group'
			});//end css attr
		}
	});// end focus out

// Validation modal window for submit
	$('button').click(function(submit){
		if ($('#name').val().length == 0) {
			$('.name-group .help-block').text('This is a required field');
			$('.name-group').attr({
				class: 'col-sm-6 form-group name-group has-error'
			});// end css attr
			submit.preventDefault();
		} else {
			$('#myModal').modal();
			submit.preventDefault();
		}
	});//end click

});//end ready