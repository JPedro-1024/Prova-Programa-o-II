//Nome: João Pedro Gusmão Seabra
//Questão 4:
/*
Faça um programa que leia duas matrizes numéricas de entrada e realize o dot product delas,
testando se possuem, realmente, valores numéricos.
*/
const readline = require('readline');

function dotProductMatriz(A, B) {
    if (A[0].length !== B.length) {
        return null;
    }

    let C = [];
    for (let i = 0; i < A.length; i++) {
        C[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            C[i][j] = 0;
            for (let k = 0; k < B.length; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return C;
}

// Os 3 Rs
function lerArray(nome) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        function ask() {
            rl.question("Digite a linha " + nome + " no formato [n,n,n]: ", (input) => {
                let semColchetes = input.trim().replace("[", "").replace("]", "");
                let partes = semColchetes.split(",");
                let arr = [];
                let valido = true;

                for (let i = 0; i < partes.length; i++) {
                    let num = Number(partes[i]);
                    if (isNaN(num)) {
                        valido = false;
                        break;
                    }
                    arr.push(num);
                }

                if (valido) {
                    rl.close();
                    resolve(arr);
                } else {
                    console.log("Valores invalidos. Digite apenas numeros no formato [1,2,3].");
                    ask();
                }
            });
        }
        ask();
    });
}

function lerNumero(pergunta) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        function ask() {
            rl.question(pergunta, (input) => {
                let num = parseInt(input);
                if (isNaN(num) || num <= 0) {
                    console.log("Valor invalido. Digite um numero inteiro positivo.");
                    ask();
                } else {
                    rl.close();
                    resolve(num);
                }
            });
        }
        ask();
    });
}

function lerMatriz(nome) {
    return new Promise((resolve) => {
        console.log("\nLendo Matriz " + nome + ":");

        lerNumero("Quantas linhas? ").then((linhas) => {
            lerNumero("Quantas colunas? ").then((colunas) => {
                let matriz = [];

                function lerProximaLinha(i) {
                    if (i >= linhas) {
                        resolve(matriz);
                        return;
                    }
                    lerArray((i + 1) + " da matriz " + nome).then((linha) => {
                        if (linha.length !== colunas) {
                            console.log("Linha invalida, tente de novo.");
                            lerProximaLinha(i);
                        } else {
                            matriz.push(linha);
                            lerProximaLinha(i + 1);
                        }
                    });
                }

                lerProximaLinha(0);
            });
        });
    });
}

async function main() {
    let A = await lerMatriz("A");
    let B = await lerMatriz("B");

    let resultado = dotProductMatriz(A, B);

    if (resultado === null) {
        console.log("Erro: colunas de A precisam ser iguais as linhas de B.");
    } else {
        console.log("\nResultado:");
        for (let i = 0; i < resultado.length; i++) {
            console.log("[" + resultado[i].join(", ") + "]");
        }
    }
}

main();