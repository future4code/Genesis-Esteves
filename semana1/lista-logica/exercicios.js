// Exemplos

// Exercício 0A

function soma(num1, num2) {
   // implemente sua lógica aqui
   return num1 + num2
}

// Exercício 0B

function imprimeMensagem() {
   // implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
}

// Exercícios

//Exercício 1

function calculaAreaRetangulo() {
   const altura = prompt(`qual a altura do retangulo`)
   const largura = prompt(`qual a largura do retangulo`)

   console.log(altura * largura)

}

//Exercício 2

function imprimeIdade() {
   const anoAtual = prompt(`Em que ano estamos ?`)
   const anoDeNacimento = prompt(`Em que ano você naceu ? `)

   console.log(anoAtual - anoDeNacimento)

}

//Exercício 3

function calculaIMC(peso, altura) {
  
   return resultado =(peso / (altura * altura));


}

//Exercício 4

function imprimeInformacoesUsuario() {
   const nome = prompt(`qual e seu nome`)
   const idade = prompt(`qual e sua idade`)
   const email = prompt(`qual e seu email`)

   const texto =(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
   
   console.log(texto)

}

//Exercício 5

function imprimeTresCoresFavoritas() {
   const cor1 = prompt(`qual e sua cor favorita 1 `)
   const cor2 = prompt(`qual e sua cor favorita 2`)
   const cor3 = prompt(`qual e sua cor favorita 3`)

   const cores = [cor1, cor2, cor3]

   console.log(cores)
}

//Exercício 6

function retornaStringEmMaiuscula(string) {
  
  return fraseMaiuscula = string.toUpperCase()

}

//Exercício 7

function calculaIngressosEspetaculo(custo, valorIngresso) {
   
   return resultado =( custo / valorIngresso);
}

// Exercício 8

function checaStringsMesmoTamanho(string1, string2) {
  
  const verificarString = string1.length === string2.length
   return verificarString 
}

// Exercício 9

function retornaPrimeiroElemento(array) {
    
    return  array [0]
   
   }
   


// Exercício 10

function retornaUltimoElemento(array) {
   let ultimoArray = array[array.length-1]
   return ultimoArray 
}

//Exercício 11

function trocaPrimeiroEUltimo(array) {
   let primeiroArray = array[0]
   array[0] = array[array.length-1]
   array[array.length-1] = primeiroArray
   return array

}

// Exercício 12

function checaIgualdadeDesconsiderandoCase(string1, string2) {
   

   const verificarIgualdade = string1.length === string2.length

   return verificarIgualdade
}

// Exercício 13

function checaRenovacaoRG() {
   // implemente sua lógica aqui
}

// Exercício 14

function checaAnoBissexto(ano) {
   // implemente sua lógica aqui
}

// Exercício 15

function checaValidadeInscricaoLabenu() {
   // implemente sua lógica aqui
}