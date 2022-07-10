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

    $('a').attr('target', '_blank');
    //alert($('a').attr('href'));
    $('a').removeAttr('target');

    $('p').wrap('<h1>');
	$('p').wrapAll('<h1>');

    $('#newItem').keyup(function(e){
        var code = e.which;
        if(code == 13){ //13 is enter
            e.preventDefault();
            $('ul').append('<li>'+e.target.value+'</li>');
        }
    });
});
