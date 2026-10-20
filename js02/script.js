const nome = prompt("Insira o nome do aluno:")
const matematica = Number(prompt("Digite a nota da prova de Matemática:"))
const portugues = Number(prompt("Digite a nota da prova de Português:"))
const historia = Number(prompt("Digite a nota da prova de História:"))
const geografia = Number(prompt("Digite a nota da prova de Geografia:"))
const filosofia = Number(prompt("Digite a nota da prova de Filosofia:"))

const media = (matematica+portugues+historia+geografia+filosofia)/5

if (media >= 7) alert(`${nome} passou de ano com média ${media}.`)
else if (media > 6) alert(`${nome} está de recuperação com média ${media}.`)
else if (media > 5) alert(`${nome} está de conselho com média ${media}.`)
else alert(`${nome} está reprovado com média ${media}.`)