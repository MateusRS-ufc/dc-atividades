document.getElementById("btn").addEventListener("click", ()=>{
    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value
    const operacao = document.getElementById("operacao").value

    const resultadoTxt = document.getElementById("resultado")

    if (n1 && n2){
        let resultado = "?"

        const num1 = parseFloat(n1)
        const num2 = parseFloat(n2)
        
        switch (operacao){
            case "-":
                resultado = num1-num2
                break
            case "+":
                resultado = num1+num2
                break
            case "*":
                resultado = num1*num2
                break
            case "/":
                resultado = num1/num2
                break
        }
    
        resultadoTxt.innerText = `Resultado: ${resultado}`
    } else if (n2 === "0" && operacao === "/") resultadoTxt.innerText = `Erro: Divisão por zero.`
    else resultadoTxt.innerText = "Erro: Preencha os dois campos."
})