let chances = 0
const senha = "123"
let resposta

while ((chances < 4) & (resposta != senha)){
    resposta = prompt("Qual a senha?")
    chances++
}
if (chances > 3) alert("Sem mais tentativas sobrando.")
else alert(`Senha adivinhada corretamente em ${chances} tentativa(s).`)


console.log("Encerrando.")