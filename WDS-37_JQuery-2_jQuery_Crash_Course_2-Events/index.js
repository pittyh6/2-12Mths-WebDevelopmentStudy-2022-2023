$(document).ready(function(){
    $('#btn1').click(function(){
        $('.para1').toggle()
    });
    $('#btn2').on('click', function(){
        $('.para1').show();
    })
    $('#btn3').on('click', function(){
        $('.para1').hide();
    })
    $('#btn4').dblclick(function(){
        $('.para1').toggle();
    })
    $('#btn4').mousemove(function(){
        $('.para1').toggle();
    })
    $('#btn5').mousedown(function(){
        $('.para1').show()
    });
    $('#btn5').mouseup(function(){
        $('.para1').hide()
    });
    $('#btn6').click(function(e){
        console.log(e)
    })
});
