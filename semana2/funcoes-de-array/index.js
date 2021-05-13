//--------------------Exercícios de interpretação de código---------------------------------------

//--------------------------------EXERCÍCIO 1---------------------------------------
/*
Leia o código abaixo
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })

  a) O que vai ser impresso no console?

  e todos 
  
  {nome: "Amanda Rangel", apelido: "Mandi"}
  {nome: "Laís Petra", apelido: "Laura"}
  {nome: "Letícia Chijo", apelido: "Chijo"}

  e em cada um dos tres seu nome e apelido 


*/


//--------------------------------EXERCÍCIO 2---------------------------------------
/*


const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
  })
  
  console.log(novoArrayB)

  a) O que vai ser impresso no console?

  somente os nomes 

  //--------------------------------EXERCÍCIO 3---------------------------------------

const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
  ]
  
  const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
  })
  
  console.log(novoArrayC)

  a) O que vai ser impresso no console?

  vai  retornar com os nomes e apelidos da  mandi e laura 

*/


//--------------------Exercícios de escrita de código---------------------------------------



//--------------------------------EXERCÍCIO 1---------------------------------------
/*
Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

*/

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const soNomePet = pets.filter((nome, index, raca) => {
    const soNomePet = nome
     return soNomePet
 })

 console.log(soNomePet)

//--------------------------------EXERCÍCIO 2---------------------------------------
//--------------------------------EXERCÍCIO 3---------------------------------------


