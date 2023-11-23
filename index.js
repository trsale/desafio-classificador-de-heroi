//Declaração das variáveis
let nomeDoHeroi = "Joker"
let xpDoHeroi = 5555
let nivelDoHeroi

//Apesar do requisito ser "XP for menor do que 1.000 = Ferro" considerei como "menor ou igual a 1.000"
if(xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro"

// Se XP for entre 1.001 e 2.000 = Bronze
} else if(xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze"

// Se XP for entre 2.001 e 5.000 = Prata
} else if(xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata"

//Apesar do requisito ser "XP for entre 6.001 e 7.000 = Ouro" considerei como "menor que 7.000"
} else if(xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro"

// Se XP for entre 7.001 e 8.000 = Platina
} else if(xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina"

// Se XP for entre 8.001 e 9.000 = Ascendente
} else if(xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente"

// Se XP for entre 9.001 e 10.000 = Imortal
} else if(xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal"

// Se XP for maior ou igual a 10.001 = Radiante
} else if(xpDoHeroi > 10000) {
    nivelDoHeroi = "Radiante"
}

// Concatenação das Strings nomeDoHeroi e nivelDoHeroi
let msg = "O Herói de nome " + nomeDoHeroi + " está no nível de " + nivelDoHeroi

// Exibição da mensagem no console
console.log(msg)