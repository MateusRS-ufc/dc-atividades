const pc = {
    hpMax: 100,
    hp: 100,
    manaMax: 50,
    mana: 50,
    defendendo: false,
    armaEquipada: "padrao",
    armaduraEquipada: "padrao",
    atk: 5
}

const inimigo = {
    nome: "Javali",
    hpMax: 30,
    hp: 30,
    atk: 5
}

let dinheiro = 0
let batalhaVencida = false

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checarVidas(){
    if (inimigo.hp <= 0) {
        alert("Batalha vencida!")
        batalhaVencida = true
    }
    else if (pc.hp <= 0) alert("Você morreu!")
    else return true
    return false
}

function ataque(hpInimigo){
    let dano = Math.ceil(random(8, 12)/10 * pc.atk)
    alert(`Você usou um ataque básico e deu ${dano} de dano!`)
    return hpInimigo - dano
}
function ataqueRef(hpInimigo, manaPC){
    let dano = Math.ceil(random(15, 20)/10 * pc.atk)
    alert(`Você usou um ataque reforçado e deu ${dano} de dano!`)
    return [hpInimigo - dano, manaPC - 10]
}

function batalha(){
    alert(`${inimigo.nome} HP:${inimigo.hp}/${inimigo.hpMax}
-----------------------------
Herói HP:${pc.hp}/${pc.hpMax}, Mana:${pc.mana}/${pc.manaMax}`)
    
    // TURNO JOGADOR
    pc.defendendo = false
    acao = prompt(`Escolha uma ação:
                0. Ataque básico
                1. Ataque reforçado (10 mana)
                2. Defender`)
    switch(acao){
        case "0":
            inimigo.hp = ataque(inimigo.hp)
            break
        case "1":
            if (pc.mana >= 10) [inimigo.hp, pc.mana] = ataqueRef(inimigo.hp, pc.mana)
            else alert("Mana insuficiente! Ataque falhou!")
            break
        case "2":
            pc.defendendo = true
            break
    }

    if (checarVidas() != true) return

    // TURNO INIMIGO
    let dano = Math.ceil(random(10, 20)/10 * inimigo.atk)
    if (pc.defendendo) dano = Math.ceil(dano / 2)
    pc.hp -= dano
    alert(`${inimigo.nome} atacou! Você sofreu ${dano} de dano.`)

    if (checarVidas() != true) return

    batalha()
}

const itensLoja = [
    {nome: 'Espada de madeira', preco: 10, comprado: false, id: "espadaMadeira", desc: "10 ATK"},
    {nome: 'Armadura de couro', preco: 10, comprado: false, id: "armaduraCouro", desc: "+50 HP"},
    {nome: 'Espada de ferro', preco: 50, comprado: false, id: "espadaFerro", desc: "20 ATK"},
    {nome: 'Armadura de ferro', preco: 50, comprado: false, id: "armaduraFerro", desc: "+80 HP"},
    {nome: 'Espada da Lenda', preco: 100, comprado: false, id: "espadaLenda", desc: "50 ATK"},
    {nome: 'Armadura abençoada', preco: 100, comprado: false, id: "armaduraBencao", desc: "+100 HP, +10 MANA"},
    {nome: 'Espada de Magia Negra', preco: 500, comprado: false, id: "espadaMagica", desc: "80 ATK, +20 MANA"},
    {nome: 'Armadura de Magia Negra', preco: 500, comprado: false, id: "armaduraMagica", desc: "+150 HP, +20 MANA"}
]

function loja(){
    console.log('teste')

    let texto = `------- Loja ($: ${dinheiro}) -------`
    let count = 0
    const itensDisponiveis = []
    for (item of itensLoja){
        if (!item.comprado){
            count++
            texto += (`\n${count}: ${item.nome}, $${item.preco}, ${item.desc}`)
            itensDisponiveis.push(item)
        }
    }
    texto += "\nDigite o número do item a comprar, ou 0 para sair."

    const opcao = parseInt(prompt(texto))
    if (opcao === 0) return
    else if (opcao > 0 && opcao <= itensDisponiveis.length){
        const idComprado = itensDisponiveis[opcao - 1].id
        const itemComprado = itensLoja.find((i) => i.id === idComprado)
        console.log(itemComprado)

        if (dinheiro >= itemComprado.preco){
            itemComprado.comprado = true
            if (itemComprado.id.startsWith("espada")) pc.armaEquipada = idComprado
            else if (itemComprado.id.startsWith("armadura")) pc.armaduraEquipada = idComprado

            dinheiro -= itemComprado.preco
        } else alert("Dinheiro insuficiente!")
    }
    else alert('Opção inválida.')
    loja()
}

function aplicarStats(){
    pc.manaMax = 50

    switch(pc.armaEquipada){
        case "espadaMadeira":
            pc.atk = 10
            break
        case "espadaFerro":
            pc.atk = 20
            break
        case "espadaLenda":
            pc.atk = 50
            break
        case "espadaMagica":
            pc.atk = 80
            pc.manaMax += 20
            break
        default:
            pc.atk = 0
    }

    switch (pc.armaduraEquipada){
        case "armaduraCouro":
            pc.hpMax = 150
            break
        case "armaduraFerro":
            pc.hpMax = 180
            break
        case "armaduraBencao":
            pc.hpMax = 200
            pc.manaMax += 10
            break
        case "armaduraMagica":
            pc.hpMax = 250
            pc.manaMax += 20
            break
        default:
            pc.hpMax = 100
    }
    pc.hp = pc.hpMax
    pc.mana = pc.manaMax
}

function checarBatalha(){
    if (!batalhaVencida){
        aplicarStats() // Usando para reiniciar vida e mana do PC
        inimigo.hp = inimigo.hpMax
        const opcao = prompt("Você morreu! Digite 0 para tentar novamente e 1 para abrir a loja antes de tentar novamente.")
        switch(opcao){
            case "0":
                batalha()
                checarBatalha()
                break
            case "1":
                loja()
                batalha()
                checarBatalha()
                break
            default:
                alert("Opcão inválida.")
            
        }
    }
}

// Fluxo do jogo ---------------------------------------------

// Fase 1
alert('Você é um herói, chamado para derrotar o Lorde das Trevas e salvar o seu reino. A caminho da vila que te convocou, você decide pegar um atalho pela floresta, mas de repente um grande javali aparece no seu caminho, parece que você terá que derrotar ele antes!')
batalha()
checarBatalha()
dinheiro += 20
alert('Depois de derrotar o javali, você finalmente sai da floresta e chega na vila. Você aproveita esse momento para ir para a loja local e comprar um equipamento melhor.')
loja()
aplicarStats()

// Fase 2
batalhaVencida = false
alert('No momento que você vai sair da loja, um ladrão armado entra com tudo para tentar saqueá-la! Derrote-o para poder continuar sua jornada.')
inimigo.nome = "Ladrão"
inimigo.hpMax = 100
inimigo.hp = 100
inimigo.atk = 10
batalha()
checarBatalha()
dinheiro += 100
alert('Você derrota o ladrão, e como agradecimento, o dono da loja te dá 100$ para você comprar algo que precise para as próximas batalhas')
loja()
aplicarStats()

// Fase 3
batalhaVencida = false
alert('Agora preparado, você decide deixar a vila e ir em direção ao castelo do Lorde das Trevas, mas antes que você possa fazer isso, um Ogro enorme aparece na vila para aterrorizar os cidadãos e ficar no seu caminho!')
inimigo.nome = "Ogro"
inimigo.hpMax = 200
inimigo.hp = 200
inimigo.atk = 20
batalha()
checarBatalha()
dinheiro += 200
alert('Você consegue derrotar o Ogro e ainda pega um pouco (200$) do dinheiro que ele tinha guardado com si mesmo.')
loja()
aplicarStats()

// Fase 4
batalhaVencida = false
alert('Agora realmente começa sua jornada até o castelo do Lorde das Trevas, e depois de muito tempo, você finalmente chega até ele, porém, antecipando sua chegada, o Dragão guarda se encontra imponente na sua frente, bloqueando seu caminho e protegendo o castelo das Trevas.')
inimigo.nome = "Dragão"
inimigo.hpMax = 300
inimigo.hp = 300
inimigo.atk = 40
batalha()
checarBatalha()
dinheiro += 1000
alert('Com muito esforço, você derrota o Dragão, e percebendo que não há mais nada protegendo o castelo, decide pegar um pouco do tesouro do Lorde das Trevas para si. (+1000$)')
loja()
aplicarStats()

// Fase 5
batalhaVencida = false
alert('Você sobe as tenuosas escadas do castelo das Trevas até chegar na sala do trono, o Lorde das Trevas pacientemente esperando sua chegada. Ele lentamente se levanta e se prepara para lutar com você. Ele não parece disposto a ser derrotado.')
inimigo.nome = "Lorde das Trevas"
inimigo.hpMax = 400
inimigo.hp = 400
inimigo.atk = 60
batalha()
checarBatalha()
alert('Com o Lorde das Trevas derrotado, você traz ao reino uma nova era próspera de paz. PARABÉNS! FIM DO JOGO.')