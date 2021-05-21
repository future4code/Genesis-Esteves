/**
 * 
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 
 
   /* if(confirm("pergunta de sim ou não")) {
	// o que fazer se o usuário clicar "ok"
} else {
	// o que fazer se o usuário clicar "cancelar"
}
 
 
 *[A♥️, 2♥️, 3♥️, 4♥️, 5♥️, 6♥️, 7♥️, 8♥️, 9♥️, 10♥️, J♥️, Q♥️, K♥️] 
 *[A♣️, 2♣️, 3♣️, 4♣️, 5♣️, 6♣️, 7♣️, 8♣️, 9♣️, 10♣️, J♣️, Q♣️, K♣️] 
 *[A♦️, 2♦️, 3♦️, 4♦️, 5♦️, 6♦️, 7♦️, 8♦️, 9♦️, 10♦️, J♦️, Q♦️, K♦️] 
 *[A♠️, 2♠️, 3♠️, 4♠️, 5♠️, 6♠️, 7♠️, 8♠️, 9♠️, 10♠️, J♠️, Q♠️, K♠️]

  *[A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K] 
  //const mensagem;
  //const retorno = confirm("Clique em um dos bot!");
======

 */





 
 
 
  //const mensagem;
  //cons/  /cons retorno = confirm("Clique em um d master
  
  
  
  if(confirm("Quer iniciar uma nova rodada?")) {
     
   function comprarCarta() {
      
      const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
     
      const naipes = ["♦️", "♥️", "♣️", "♠️"]
    
      
      const numero = cartas[Math.floor(Math.random() * 13)]
    
      
      const naipe = naipes[Math.floor(Math.random() * 4)]
    
      let valor
    
      
      if (numero === "A") {
        valor = 11
      } else if (numero === "J" || numero === "Q" || numero === "K") {
        valor = 10
      } else { 
        valor = Number(numero)
      }
    
      
      const carta = {
        texto: numero + naipe,
        valor: valor
      }
    
      return carta
    }
    

  } else {
     
   console.log("O jogo acabou")
  }
  
  
  const carta= comprarCarta();
   
  const carta1 = comprarCarta();

  const naipe = carta.texto + carta1.texto

  const valor = carta.valor + carta1.valor

  console.log("Usuário - ","cartas",naipe + "","Valor", valor)

  const carta3= comprarCarta();
   
  const carta4 = comprarCarta();

  const naipe2 = carta3.texto + carta4.texto

  const valor2 = carta3.valor + carta4.valor

  console.log("computador - ","cartas",naipe2 + "","Valor", valor2)

 
 
  
  
  //outos
  
  
  //console.log("carta 1 ",carta1.texto +"Valor", carta1.valor)
  
  //console.log("carta 2 ", carta1.texto +"", "Valor",  carta1.valor)
  //console.log(Number("-"carta.valor + carta1.valor))
  
  
  //function carta () {
     
     //}
     
     
     
     // const carta = comprarCarta();
   
   
   
   
   //console.log(carta1Usuario.texto + "valor ",carta1Usuario.valor)
   /*
   
   
   const usuarioTexto = carta2Usuario.texto + carta1Usuario.texto 
   const usuariovalor = carta2Usuario.valor + carta1Usuario.valor

   */
   //const novo = usuarioTexto + usuariovalor
   //return  novo
   ///console.log(usuarioTexto + usuariovalor) 
    //console.log(novo) 
    
    //const carta2Usuario = comprarCarta();
    
//console.log(carta2Usuario.texto)
//console.log(carta2Usuario.valor) 

 
 

