$(document).ready(function(){

    $('#result').load('test.html', function(responseTxt, statusTXT, xhr){
        if(statusTXT == "success"){
            console.log('It went fine')
            console.log('responseTxt: '+responseTxt)
            console.log('statusTXT: '+statusTXT)
            console.log('xhr: '+ xhr)
        }else if(statusTXT == "error"){
            console.log('error '+ xhr.statusText)
        }
    })

    $.get('test.html', function(data){
        $('#result').html(data)
    })


    $.getJSON('users.json', function(data){
        $.each(data, function(i, user){
            $('ul#users').append('<li>'+user.firstName+'</li>');
        });
    });

    $.ajax({
        method:'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: 'json'
    }).done(function(data){
        console.log(data);
        $.map(data, function(post, i){
            $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
        });
    });


    $('#postForm').submit(function(e){
        e.preventDefault();

        var title = $('#title').val();
        var body = $('#body').val();
        var url = $(this).attr('action');

        $.post(url, {title:title, body:body}).done(function(data){
            console.log('Post Saved');
            console.log(data);
        });
    });
});
