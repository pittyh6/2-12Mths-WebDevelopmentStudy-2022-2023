$(document).ready(function(){
    $('p.para1').css('color', 'green');
    $('p.para2').css({color:'red', background: '#c1c1'}) //object
    $('p.para3').addClass('myClass')
    $('p.para4').removeClass('myClass')

    $('#btn1').click(function(){
        $('p.para5').toggleClass('myClass')
    })

    $('#myDiv').text('Hello World');
	$('#myDiv').html('<h3>Hello World</h3>');
	//alert($('#myDiv').text());

    $('ul').append('<li>Append List Item</li>'); //last
	$('ul').prepend('<li>Prepend List Item</li>');//fist
    $('.para1').appendTo('.para2');
    $('.para1').prependTo('.para2');
    $('ul').before('<h4>Hello</h4>');
    $('ul').after('<h4>World</h4>');

    $('ul').empty();
    $('ul').detach();
});
