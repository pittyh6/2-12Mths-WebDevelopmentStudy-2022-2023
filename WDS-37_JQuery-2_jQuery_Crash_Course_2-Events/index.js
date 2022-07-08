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
    $('#btn6').click(function(e){
        console.log(e.currentTarget.innerHTML)
    })

    $(document).mousemove(function(e){
        //console.log('cords: Y: ' + e.clientY + ' x: ' + e.clientX) 
    })
    $(document).mousemove(function(e){
        $('#cords').html('cords: Y: ' + e.clientY + ' x: ' + e.clientX) 
    })

    //form
    $('input').focus(function(e){ 
        //console.log(e.target)
      $(this).css('background','red')
    })
    $('input').blur(function(e){ 
        //console.log(e.target)
      $(this).css('background','#fff')
    })
    $('input').keyup(function(e){
        console.log(e.target.value)
    })

    $('select#gender').change(function(e){
        alert('gender was changed ' + e.target.value)
    })


    $('#form').submit(function(e){
        e.preventDefault()
        let name = $('#name').val()
        let email = $('#email').val()

        console.log(name, email)
    })

});
