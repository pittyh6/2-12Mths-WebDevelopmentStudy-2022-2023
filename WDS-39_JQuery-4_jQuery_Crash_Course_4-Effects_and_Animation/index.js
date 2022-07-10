$(document).ready(function(){

    $('#btnFadeOut').click(function(){ 
        $('#box').fadeOut(1000, function(){
            $('#btnFadeOut').text('done')
        });
    })
    $('#btnFadeOut').click(function(){ 
        $('#box').fadeOut('slow');
    })
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn('fast');
    })
    $('#btnFadeIn').click(function(){
        $('#box').fadeIn();
    })
    $('#btnFadeTog').click(function(){
        $('#box').fadeToggle(3000);
    })


    $('#btnSlideUp').click(function(){ 
        $('#box').slideUp(1000, function(){
            $('#btnSlideUp').text('slideUpDone')
        })
    })
    $('#btnSlideDown').click(function(){ 
        $('#box').slideDown(1000, function(){
            $('#btnSlideDown').text('SlideDownDone')
        })
    })
    $('#btnSlideTog').click(function(){ 
        $('#box').slideToggle(1000, function(){
            $('#btnSlideTog').text('Slide yep')
        })
    })
    $('#btnStop').click(function(){ 
        $('#box').stop()
    })

    $('#moveLeft').click(function(){ 
        $('#box2').animate({
            left: 300,
            height: '300',
            width: '300',
            opacity:'0.5'
        })
    })
    $('#moveRight').click(function(){ 
        $('#box2').animate({
            left: 0,
            height: '100',
            width: '100',
            opacity: '1'
        })
    })

    $('#moveAround').click(function(){ 
        let box = $('#box2')
        box.animate({
            left: 300
        })
        box.animate({
            top: 300
        })
        box.animate({
            left: 0
        })
        box.animate({
            top: 0
        })
    })
});
