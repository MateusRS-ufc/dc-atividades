//Questão 1
const array = [1, 2, 3, 4, 5, 6]
for (item of array){
    console.log(item)
}

//Questão 2
const array2 = []
for (item of array){
    array2.push(item*2)
}
console.log(array2)

//Questão 3
const arrayPar = []
for (item of array){
    if (item % 2 == 0) arrayPar.push(item)
}
console.log(arrayPar)

//Questão 4
for (item of array){
    if (item > 4){
        console.log(item)
        break
    }
}

//Questão EXTRA
let soma = 0
for (item of array){
    soma += item
}
console.log(soma)

// Revisão
const pessoas = [
    {nome: "Robson", idade: 18},
    {nome: "Alexandre", idade: 52},
    {nome: "Pedro", idade: 24}
]

for (pessoa of pessoas){
    const {nome, idade} = pessoa
    console.log(`${nome} tem ${idade} anos de idade.`)
}