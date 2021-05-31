 function funcao (letras){     
     let nova = letras.split("")
     let armazena = []

     for(let letra of nova){
     if(letra === 'a' || letra ==='e' || letra ==='i' || letra ==='o' || letra ==='u'){
      armazena.push(letra)
    }     
    }
    for(let letra of nova){
     if(letra !== 'a' & letra !=='e' & letra !=='i' & letra!=='o' & letra !=='u'){
      armazena.push(letra) 
    }     
    }
    return armazena
 }
 console.log (funcao("letras"))