// const imagem = prompt("digite a fonte da imagem: ")
// const link = prompt("digite o link do site: ")

// document.body.innerHTML = `<a href="${link}"><img src="${imagem}"></a>`


const fotos = ["foto1.png","foto2.jpg","foto3.png","foto4.jpg","foto5.jpg"]
let texto = ""
for (foto of fotos) texto += `<img src="fotos/${foto}"/>`
document.body.innerHTML = texto