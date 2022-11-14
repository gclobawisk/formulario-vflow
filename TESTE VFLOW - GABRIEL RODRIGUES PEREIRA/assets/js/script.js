const date = new Date();
const today = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
dataAgora = currentYear+'-'+currentMonth+'-'+today
document.getElementById("inputData").value = dataAgora



//incrementador das divs dos produtos
i = 1
array = [] // array para os ids das div's dos produtos que foram adicionadas 


function adcElemento () {
    i++
    array.push(i)
    // cria um novo elemento div
    // e dá a ele conteúdo
    
    conteudo = getConteudo();
    

    var divNova = document.createElement('div');
    
    //divNova.id=i
    divNova.innerHTML = conteudo;
    
    
  
    // adiciona o novo elemento criado e seu conteúdo ao DOM
    document.getElementById("elementosAdicionais").append(divNova);
    

    function getConteudo(){

        conteudo = '<div class="row mt-3" id="div'+i+'">'+
        '<div class="col-sm-1 justify-middle">'+
          
          '<i class="fa fa-trash text-danger" onclick="removeElemento('+i+')"></i>'+


        '</div>'+


        '<div class="col-sm-11 border border-dark p-3">'+

              '<div class="row">'+
                    '<label class="col-sm-3 col-form-label">Descrição do Produto: </label>'+
                        '<div class="col-md-9">'+
                            '<input type="email" class="form-control" id="inputDescricaoProduto'+i+'">'+
                    '</div>'+

                    '<div class="form-group col-md-3">'+
                        '<label class="form-label">Und. Medida</label>'+
                            '<select id="inputUnidadeMedida" class="form-control">'+
                                '<option selected>Selecione</option>'+
                                '<option value="Miligrama">Miligrama</option>'+
                                '<option value="Grama" value="">Grama</option>'+
                                '<option value="Kilograma">Kilograma</option>'+
                                '<option value="Mililitro">Mililitro</option>'+
                                '<option value="Litro">Litro</option>'+
                            '</select>'+
                    '</div>'+
  
                    // '<div class="col-md-3">'+
                    //     '<label class="form-label">Und. Medida</label>'+
                    //     '<input type="text" class="form-control" id="inputUnidadeMedida'+i+'" value="" required>'+
                    // '</div>'+
    
                    '<div class="col-md-3">'+
                        '<label class="form-label">Qtd em Estoque</label>'+
                        '<input type="number" class="form-control" id="inputQtdEstoque'+i+'" value="" oninput="getValorTotal('+i+')" required>'+
                    '</div>'+
    
                    '<div class="col-md-3">'+
                        '<label class="form-label">Valor Unitário</label>'+
                        '<input type="number" class="form-control" id="inputValorUnitario'+i+'" value="" step="0.1" oninput="getValorTotal('+i+')">'+
                    '</div>'+
    
                    '<div class="col-md-3">'+
                        '<label class="form-label">Valor Total</label>'+
                        '<input type="number" class="form-control bg-light" id="inputValorTotal'+i+'" value="" required readonly>'+
                    '</div>'+
              '</div>'+
        '</div>'

        return conteudo
    }
}

function removeElemento(id){
    if (window.confirm(`Deseja deletar este item ?`)) {
        var el = document.getElementById('div'+id);
        el.remove(el);
        posicao = array.indexOf(id);posicao
        array.splice(posicao, 1);
      }

    
}

function save(){
    event.preventDefault();

    inputRazaoSocial = document.getElementById('inputRazaoSocial1').value;
    inputCNPJ = document.getElementById('inputCNPJ1').value;
    inputNomeFantasia = document.getElementById('inputNomeFantasia1').value;
    inputInscricaoEstadual = document.getElementById('inputInscricaoEstadual1').value;
    inputCEP = document.getElementById('inputCEP1').value;
    inputInscricaoMunicipal = document.getElementById('inputInscricaoMunicipal1').value;
    inputEndereco = document.getElementById('inputEndereco1').value;
    inputComplemento = document.getElementById('inputComplemento1').value;
    inputNumero = document.getElementById('inputNumero1').value;
    inputBairro = document.getElementById('inputBairro1').value;
    inputEstado = document.getElementById('inputEstado1').value;
    inputMunicipio = document.getElementById('inputMunicipio1').value;
    inputPessoaContato = document.getElementById('inputPessoaContato1').value;
    inputTelefone = document.getElementById('inputTelefone1').value;
    inputEmail = document.getElementById('inputEmail1').value;

    if (!inputRazaoSocial){
        alert("Preencha a Razão Social")
    }else if (!inputCNPJ){
        alert("Preencha o CNPJ")
    }else if (!inputNomeFantasia){
        alert("Preencha o Nome Fantasia")
    }else if (!inputCEP){
        alert("Preencha o CEP")
    }else if (!inputEndereco){
        alert("Preencha o Endereço")
    }else if (!inputNumero){
        alert("Preencha o Número do Endereço")
    }else if (!inputBairro){
        alert("Preencha o Bairro")
    }else if (!inputEstado){
        alert("Preencha o Estado")
    }
    else if (!inputMunicipio){
        alert("Preencha o Município")
    }
    else if (!inputPessoaContato){
        alert("Preencha o Nome da Pessoa para contato")
    }
    else if (!inputTelefone){
        alert("Preencha um Telefone para contato")
    }
    else if (!inputEmail){
        alert("Preencha um E-mail para contato")
    }else{

        const objeto = new Object()
        objeto.razaoSocial = inputRazaoSocial
        objeto.CNPJ = inputCNPJ
        objeto.nomeFantasia = inputNomeFantasia
        objeto.InscricaoEstadual = inputInscricaoEstadual

        objeto.CEP = inputCEP
        objeto.InscricaoMunicipal = inputInscricaoMunicipal
        objeto.inputEndereco = inputEndereco
        objeto.Complemento = inputComplemento
        objeto.Numero = inputNumero
        objeto.Bairro = inputBairro
        objeto.Estado = inputEstado
        objeto.Municipio = inputMunicipio
        objeto.Contato = inputPessoaContato
        objeto.Telefone = inputTelefone
        objeto.Email = inputEmail


        array_produtos = [] 

        for (i=0; i < array.length; i++){

            nomeDescricaoProduto = document.getElementById('inputDescricaoProduto'+array[i]).value;          
            select = document.getElementById("inputUnidadeMedida");
            inputUnidadeMedida = select.options[select.selectedIndex].value;
            inputQtdEstoque = document.getElementById('inputQtdEstoque'+array[i]).value;
            inputValorUnitario = document.getElementById('inputValorUnitario'+array[i]).value;
            inputValorTotal = document.getElementById('inputValorTotal'+array[i]).value;
    
            produtos = new Object()
            produtos.indice = i+1
            
            if (array_produtos.length < 1){
    
                if (!nomeDescricaoProduto){
                    alert("PREENCHA A DESCRICAO")
                }else if (!inputUnidadeMedida || inputUnidadeMedida == "Selecione"){
                    alert("PREENCHA A UNIDADE DE MEDIDA")
                }
                else if (!inputQtdEstoque){
                    alert("PREENCHA O ESTOQUE")
                }
                else if (!inputValorUnitario){
                    alert("PREENCHA O Valor Unitário")
                }else{
                    produtos.descricaoProduto = nomeDescricaoProduto
                    produtos.unidadeMedida = inputUnidadeMedida
                    produtos.qtdEstoque = inputQtdEstoque
                    produtos.valorUnitario = inputValorUnitario
                    produtos.ValorTotal = inputValorTotal
        
                    array_produtos.push(produtos)
                }
                
    
            }
                    
    
            
            
        }
    
        objeto.produtos = array_produtos;
    
    
    
    
    
        //OBTER OS ARQUIVOS QUE FORAM ENVIADOS PARA SESSION STORAGE
    
        array_arquivos = []
    
    
        if (sessionStorage.length >= 1){
    
            for (_jj=0; _jj < sessionStorage.length; _jj++){
                anexos = new Object();
                anexos.indice = _jj+1
                anexos.nomeArquivo = sessionStorage.key(_jj)
                array_arquivos.push(anexos)
    
            }
        }
    
        objeto.anexos = array_arquivos;
      
    
        // SALVANDO O OBJETO NO LOCALSTORAGE
        if (array_produtos.length < 1){
            alert("INSIRA PELO MENOS 1 PRODUTO")
        }else if (array_arquivos.length < 1){
            alert("INSIRA PELO MENOS 1 ANEXO")
        }else{
      
            
            $('#exampleModal').modal('show');
    
            sessionStorage.setItem('dados',JSON.stringify(objeto));
    
            retornoJson = sessionStorage.getItem('dados');
    
            document.getElementById("respostaModal").innerHTML = "<h4> SALVO COM SUCESSO !</h4>"
        }


    }
    
    
       
    
    
    

    
}

function getValorTotal(id){
    let qtdEstoque = document.getElementById("inputQtdEstoque"+id).value;
    let valorUnitario = document.getElementById("inputValorUnitario"+id).value;
    qtdEstoque = parseInt(qtdEstoque)
    valorUnitario = parseFloat(valorUnitario)

    let valorTotal = qtdEstoque * valorUnitario
    valorTotal = valorTotal.toFixed(2)

    document.getElementById("inputValorTotal"+id).value = valorTotal

   

}

 // Obtendo o nome do arquivo quando carregado


 //Obter o arquivo quando feita a alteraçao
 //instanciando
 


 window.onload = function anexarArquivo(){
    count = 1

    //if Existir arquivo faço um for e mostro todos
    if (sessionStorage.length >= 1){
        for (j=0; j < sessionStorage.length; j++){
            
            if (sessionStorage.key(j) != "dados"){
            
                document.getElementById("arquivosMensagem").innerHTML = '<h6 class=""> Arquivos Anexados </h6>'; 
                var divNova3 = document.createElement('div');
                divNova3.className="";
                divNova3.id="div"+count
                conteudo2 = '<h5><i class="fa fa-trash text-danger align-middle border border-danger m-2" onclick="deletarAnexo('+count+')"></i> '+
                            '<a href="'+sessionStorage.getItem(sessionStorage.key(j))+'" download> <i class="fa-solid fa-eye border border-success text-success"></i></a> '+sessionStorage.key(j)+' <h5>'
                divNova3.innerHTML = conteudo2
                document.getElementById("arquivosAnexados").append(divNova3);  
                count++
            }
        }
    }
    else{
        document.getElementById("arquivosMensagem").innerHTML = "Nenhum Arquivo Adicionado"; 
    }


    document.querySelector("#myFileInput").addEventListener("change", function(e){

        fileName = e.target.files[0].name;
         const reader = new FileReader();
         
         //Carregar o arquivo na Session Storage
         reader.addEventListener("load", () => {
             sessionStorage.setItem(fileName, reader.result);  
           
         
         var divNova3 = document.createElement('div');
         divNova3.className="border border-dark";
         divNova3.id="div"+count
         dados_arquivo = sessionStorage.getItem(fileName)

         conteudo3 = '<h5><i class="fa fa-trash text-danger align-middle bd-warning border border-danger m-2" onclick="deletarAnexo('+count+')"></i> '+
                        '<a href="'+dados_arquivo+'" download> <i class="fa-solid fa-eye border border-success text-success"></i></a> '+fileName

         divNova3.innerHTML = conteudo3;
         document.getElementById("arquivosAnexados").append(divNova3);

        });  
         reader.readAsDataURL(this.files[0]); 
             
    });

    

    
}


function deletarAnexo(file_id){
  
    let fileName2 = document.getElementById("div"+file_id).textContent;
    fileName2 = fileName2.trim();
    
    if (window.confirm(`Deseja deletar o ${fileName2}?`)) {
        
        var el = document.getElementById('div'+file_id);
        el.remove(el);

        sessionStorage.removeItem(fileName2)
      

      }
    
    
}

let iconInput = document.getElementById('iconInput');
let file = document.getElementById('myFileInput');

iconInput.addEventListener('click', () => {
    file.click();
});

