const hpMaxInimigo = 100
let hpInimigo = hpMaxInimigo
const hpMaxPC = 100
let hpPC = hpMaxPC

const manaMaxPC = 50
let manaPC = manaMaxPC

let defendendo = false

let emBatalha = true

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checarVidas(){
    if (hpInimigo <= 0) alert("Batalha vencida!")
    else if (hpPC <= 0) alert("Você morreu!")
    else return true
    return false
}

function ataque(hpInimigo){
    let dano = random(1, 15)
    alert(`Você usou um ataque básico e deu ${dano} de dano!`)
    return hpInimigo - dano
}
function ataqueRef(hpInimigo, manaPC){
    let dano = random(10, 25)
    alert(`Você usou um ataque reforçado e deu ${dano} de dano!`)
    return [hpInimigo - dano, manaPC - 10]
}

function batalha(){
    while (emBatalha){
        alert(`Inimigo HP:${hpInimigo}/${hpMaxInimigo}
        -----------------------------
        HERO HP:${hpPC}/${hpMaxPC}, Mana:${manaPC}/${manaMaxPC}`)
        
        // TURNO JOGADOR
        acao = prompt(`Escolha uma ação:
                    0. Ataque básico
                    1. Ataque reforçado (10 mana)
                    2. Defender`)
        switch(acao){
            case "0":
                hpInimigo = ataque(hpInimigo)
                break
            case "1":
                [hpInimigo, manaPC] = ataqueRef(hpInimigo, manaPC)
                break
            case "2":
                defendendo = true
                break
        }
    
        if (checarVidas() != true) break
    
        // TURNO INIMIGO
        let dano = random(10, 20)
        if (defendendo) dano = random(1, 15)
        hpPC -= dano
        alert(`O inimigo atacou! Você sofreu ${dano} de dano.`)
    
        if (checarVidas() != true) break
    }
}