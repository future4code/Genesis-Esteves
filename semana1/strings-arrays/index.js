/*           
             Exercícios de interpretação de código

          
    1) Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

a.  undefined (so consegui rodando o codigo)
b.  null
c.  11
d.  3
e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f.  9


2) Leia o código abaixo com atenção

Qual será o valor impresso no console se a entrada do usuário for: 
"Subi num ônibus em Marrocos"?

resposta: "SUBI NUM ÔNIBUS EM MIRROCOS" 


              Exercícios de escrita de código


       1)
       
       Faça um programa que pergunte ao usuário seu nome e seu e-mail. 
        Em seguida, imprima na tela a seguinte mensagem:
        O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), 
        nomeDoUsuario!


const nomeDoUsuario = prompt("qual seu nome")
const qualSeuEmail = prompt("qual seu Email")

const nomeDeUsuarioEEmail = ` O e-mail ${qualSeuEmail} foi cadastrado com sucesso. 
Seja bem-vinda(o) !, ${nomeDoUsuario}`

console.log(nomeDeUsuarioEEmail)


2)

Faça um programa que contenha um array com 5 das suas comidas preferidas, 
armazenado em uma variável. Em seguida, siga os passos:

a) Imprima na tela o array completo
b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", 
seguida por cada uma das comidas, uma embaixo da outra.
c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. 
Troque a segunda comida da sua lista pela inserida pelo usuário. 
Imprima na tela a nova lista


const comidasPreferidas = [
"Tropeiro",    
"Tortas salgadas",    
"Pizza fria",    
"Churrasco",   
"Arroz",    
    ]


console.log(`Essas são as minhas comidas preferidas:`)

console.log(comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4])

const qualSuaComidaFavorita = prompt("qual sua comida favorita")

const fraseInserida = comidasPreferidas.replaceAll("Tortas salgadas", "qualSuaComidaFavorita")

letra c nao consequi fazer da forma correta mas irei corrigir todas depois 

3)

Faça um programa, seguindo os passos:

a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas
b) Pergunte ao usuário 3 tarefas que ele precisa realizar no dia e armazene-as, 
uma por uma, no array
c) Imprima o array na tela
d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2
e) Remova da lista o item de índice que o usuário escolheu.
f) Imprima o array na tela

*/
const tarefa1 = prompt("primeira tarefa")
const tarefa2 = prompt("segunda tarefa")
const tarefa3 = prompt("terceira tarefa")

const listaDeTarefas = [
`tarefa 1, ${tarefa1} 
tarefa 2 ${tarefa2} 
tarefa 3 ${tarefa3},`]

console.log (listaDeTarefas)

const tarefaRealisada = prompt( 'digite na ordem a tarefa realisada de 0 a 2')

listaDeTarefas.pop(tarefaRealisada)

console.log (listaDeTarefas)


