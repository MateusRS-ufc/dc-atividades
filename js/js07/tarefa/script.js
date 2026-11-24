document.getElementById("btn").addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value
    const preco = document.getElementById("preco").value
    const desc = document.getElementById("desc").value

    const produto = document.createElement("li")
    produto.innerText = `${nome}: R$${preco}, ${desc}`
    document.getElementById("lista").appendChild(produto)
})