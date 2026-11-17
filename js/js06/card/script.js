const sectionCards = document.getElementById("cards")

function criarCard(titulo, desc, imagem, preco){
    const card = document.createElement("div")
    card.setAttribute("class", "card")

    const img = document.createElement("img")
    img.setAttribute("src", imagem)
    card.appendChild(img)

    const content = document.createElement("div")
    content.setAttribute("class", "content")

    const h4 = document.createElement("h4")
    h4.textContent = titulo
    const p = document.createElement("p")
    p.textContent = desc
    const span = document.createElement("span")
    span.textContent = `R$${preco}`

    content.append(h4, p, span)
    
    card.appendChild(content)

    return card
}

// const titulo = prompt("Digite o título do card:")
// const desc = prompt("Digite a descrição do card:")
// const imagem = prompt("Digite o endereço da imagem do card:")
// const preco = prompt("Digite o preço do produto:")

const titulo = "TITULO"
const desc = "descricao"
const imagem = "https://img.magnific.com/fotos-gratis/close-up-de-uma-arara-escarlate-de-vista-lateral-close-up-da-cabeca-da-arara-scarlate_488145-3540.jpg?semt=ais_hybrid&w=740&q=80"
const preco = "60"

sectionCards.appendChild(criarCard(titulo, desc, imagem, preco))