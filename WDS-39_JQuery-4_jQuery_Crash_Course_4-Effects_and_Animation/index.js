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


});
