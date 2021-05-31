~~~javascript 
//primeira tentativa 
const apenasNome = animais.map(function(item)  {
    
   
   return item.nome;
      
   })
console.log(apenasNome)

// segunda 
function criarArrayNomesAnimais() {
    const animais = [
      { nome: "Cachorro", classificacao: "mamífero" },
      { nome: "Papagaio", classificacao: "ave" },
      { nome: "Gato", classificacao: "mamífero" },
      { nome: "Carpa", classificacao: "peixe" },
      { nome: "Pomba", classificacao: "ave" }
    ]
    const somenteNome = animais.map(function(item, indice){
        return item.nome;
     });
     
     document.write(somenteNome);
~~~