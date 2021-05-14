

//------------------Exercícios de interpretação de código---------------------------


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "0"
  }
  console.log(linha)
  quantidadeAtual++
}



//--------------------------------EXERCÍCIO1---------------------------------------

/*
O que o código abaixo está fazendo? Qual o resultado impresso no console?

let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)


ele cria um loop onde enquanto o numero for menor que 5 ele continuara a
acrescentar o numero seguinte pasando ele para o valor que sempre somara 
com o numero seguinte 

o resultado sera 10


*/


//--------------------------------EXERCÍCIO2---------------------------------------

/*

Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}


a) O que vai ser impresso no console?

todos os numeros maiores que 18 
19, 21, 23, 25, 27, 30


b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
 sim 

 trocaria o numero 18 por 0 

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 0) {
		console.log(numero)
	}
}

*/

//------------------------------EXERCÍCIO3------------------------------------







