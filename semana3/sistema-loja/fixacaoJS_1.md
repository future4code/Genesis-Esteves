~~~javascript
function calculaSalario(carrosVendidos, valorVendas) {
  const salario = 2000
  let vendas = carrosVendidos * 100
  let porcentagens = valorVendas * 0.05
  const total = salario + vendas + porcentagens
  
  return total
} ~~~

