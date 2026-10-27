const numeroSecret = parseInt(Math.random()*100)+1
let resposta

while (resposta != numeroSecret){
    resposta = prompt("Qual o número?")
    
    if (resposta > numeroSecret){
        alert("Número errado! O número secreto é MENOR que sua resposta.")
    } else if (resposta < numeroSecret){
        alert("Número errado! O número secreto é MAIOR que sua resposta.")
    }
}
alert(`Número encontrado! A resposta era ${numeroSecret}.`)

console.log("Encerrando.")