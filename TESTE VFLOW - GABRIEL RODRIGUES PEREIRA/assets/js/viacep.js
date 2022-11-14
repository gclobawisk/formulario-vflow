function retornarCep(){
    var valor_inserido = $('#inputCEP1').val();
    event.preventDefault();
    
    $.ajax({
        url: 'https://viacep.com.br/ws/'+valor_inserido+'/json',
        dataType: 'jsonp',
        crossDomain: true,
        contentType: "application/json",
        statusCode: {
          200: function(data) { (data); } // Ok
          ,400: function(msg) { alert(msg);  } // Bad Request
          ,404: function(msg) { document.getElementById("inputCEP1").classList.value = "form-control border border-danger";
           document.getElementById("retornoCepInvalido").innerHTML = "CEP Inválido digite novamente";
        

                                 }// Not Found 
        }

      }).done(function(result){
        $("#inputEndereco1").val(result['logradouro']);
        $("#inputMunicipio1").val(result['localidade']);
        $("#inputEstado1").val(result['uf']);
        $("#inputBairro1").val(result['bairro']);
        document.getElementById("inputCEP1").classList.value = "form-control border border-success";
        document.getElementById("retornoCepInvalido").innerHTML = "";


    });


}