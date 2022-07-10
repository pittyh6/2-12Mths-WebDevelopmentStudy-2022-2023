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
});
