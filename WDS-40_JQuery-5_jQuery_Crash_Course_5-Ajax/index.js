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
   
});
