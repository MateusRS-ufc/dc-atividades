let frutas = []
let executar = true

while (executar){
    const opcao = prompt(`    ----------------
    1. Cadastrar fruta
    2. Listar frutas
    3. Atualizar cadastro
    4. Deletar cadastro
    5. Sair
    ----------------`)
    
    switch (opcao){
        case "1":
            frutas.push(prompt("Digite o nome da fruta a cadastrar:"))
            break
        case "2":
            if (frutas.length > 0){
                let lista = ""
                let count = 0
                for(fruta of frutas){
                    count++
                    lista += `${count}: ${fruta}\n`
                }
                alert(lista)
            }else{
                alert("Nenhuma fruta encontrada.")
            }
            break
        case "3":
            index = parseInt(frutas.indexOf(prompt("Digite o nome da fruta a substituir:")))
            if (index == -1) alert("Fruta não encontrada!")
            else frutas[index] = prompt("Digite o nome da fruta a ser inserida no lugar:")
            break
        case "4":
            index = parseInt(frutas.indexOf(prompt("Digite o nome da fruta a deletar:")))
            if (index == -1) alert("Fruta não encontrada!")
            else frutas.splice(index, 1)
            break
        case "5":
            executar = false
            break
        default:
            alert("Comando inválido.")
    }
}