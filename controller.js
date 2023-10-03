'use strict'; // Modo restrito

//Consumindo API de CEP, do ViaCep

// https://viacep.com.br/

 

//Funçao para limpar o formulario

const limparFormulario = () => {

    document.getElementById('Rua').value = '';

    document.getElementById('Bairro').value = '';

    document.getElementById('Cidade').value = '';

    document.getElementById('Estado').value = '';

}

 

// Verificar se CEP e valido

const eNumero = (numero) => /^[0-9]+$/.teste(numero); //testa numero informado com expressao regular

const cepValido = (cep) => cep.lenght == 8 && eNumero(cep); // verifica tamanho do cep digitado e executa funçao de validaçao do cep eNumero

 

// Funçao para preencher formulario

const preencherFormulario = (endereco) => {

    document.getElementById('Rua').value = endereco.logradouro;

    document.getElementById('Bairro').value = endereco.bairro;

    document.getElementById('Cidade').value = endereco.localidade;

    document.getElementById('Estado').value = endereco.uf;

}

 

//Consumo da API da ViaCEP

const pesquisarCep = async() => {

    limparFormulario();

    const url = `http://viacep.com.br/ws/${cep.value}/json/`;

    if(cepValido(cep.value)){

       const dados = await fetch(url); //aguardar

       const addres = await dados.json();

 

       if(addres.hasOwnProperty('erro')){

        alert('CEP nao encontrado');

       }else{

        preencherFormulario(adrdres);

       }

    }else{
        alert( 'CEP Incorreto');
    }

}
//adiciona evento DOM ao input do CEP para executar função pesquisarCep
document.getElementById('cep').addEventListener
( 'focusout', pesquisarCep);