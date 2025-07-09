class Hero {
    //campos privados:
    #name;
    #vitorias;
    #derrotas;

    constructor(name, xp, health) {
        this.#name = name;
        this.xp = xp;
        this.health = health;
        this.#vitorias = 10000;
        this.#derrotas = 1;
    }

    gainXp(amount) {
        this.xp += amount;
    }

    takeDamage(amount) {
        this.health -= amount;
    }

    heal(amount) {
        this.health += amount;
    }

    get name() {
        return this.#name;
    }

    get vitorias() {
        return this.#vitorias;
    }

    get derrotas() {
        return this.#derrotas;
    }

    get level() {
        if (this.xp < 1000) return "Iron";
        if (this.xp < 2000) return "Bronze";
        if (this.xp < 5000) return "Silver";
        if (this.xp < 8000) return "Gold";
        if (this.xp < 9000) return "Diamond";
        if (this.xp < 10000) return "Rising";
        if (this.xp <= 10000) return "Immortal";
        return "Effulgent";
    }

    status() {
        return `${this.name} | XP: ${this.xp} | Health: ${this.health} | Level: ${this.level}`;
    }
}


const beowulf = new Hero("Beowulf", 0, 100);

beowulf.gainXp(5100);
beowulf.takeDamage(50);
beowulf.heal(25);
//console.log(beowulf.status());



function nivelarJogador(saldoVitorias) {
    let playerRanking = "";

    if (saldoVitorias < 10) {
        playerRanking = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        playerRanking = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        playerRanking = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        playerRanking = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        playerRanking = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        playerRanking = "Lendário";
    } else {
        playerRanking = "Mito";
    }

    return playerRanking;
}



const gerarSaldoVitorias = (quantidadeVitorias, quantidadeDerrotas) => quantidadeVitorias - quantidadeDerrotas;

let saldoVitorias = gerarSaldoVitorias(beowulf.vitorias, beowulf.derrotas);

let nivel = nivelarJogador(saldoVitorias);

console.log(`O Herói ${beowulf.name} tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
