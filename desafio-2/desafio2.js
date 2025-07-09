

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



const gerarSaldoVitorias=(quantidadeVitorias, quantidadeDerrotas) => quantidadeVitorias - quantidadeDerrotas;

let saldoVitorias = gerarSaldoVitorias(1000,33);

let nivel = nivelarJogador(saldoVitorias);

console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`) ;
