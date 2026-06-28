//Nome:João Pedro Gusmão Seabra
//Questão 3:
/*
Faça um programa que leia dois Arrays de valores numéricos 
(Number) fornecido pelo usuário, no formato “[n,n,n]”, testando se os valores do 
Arrays digitados são realmente numéricos (Number), retornando uma mensagem 
de erro caso os valores não sejam válidos. Caso sejam válidos, você deverá 
executar uma operação de produto escalar dos Arrays fornecidos. Note que você 
deverá criar uma função de multiplicação de vetores (que pode chamar de 
“produtoEscalarVet(a,b)”).  
O Produto escalar de dois vetores é dado por: 
Por exemplo: 
[1,2,3,4] . [2,5,6,7] = (1 x 2) + (2 x 5) + (3 x 6) + (4 x 7) = 2 + 10 + 18 + 28 = 58 
Use como base para sua função de leitura dos Arrays de entrada, o código 
presente 
no 
endereço 
https://github.com/wwagner33/prog2-2026-1-codigos/blob/main/aulas/matematicos
/leNumeroInt.js.  
*/
const readline = require('readline');

function produtoEscalarVet(a, b) {
    if (a.length !== b.length) {
        return null;
    }

    let resultado = 0;
    for (let i = 0; i < a.length; i++) {
        resultado += a[i] * b[i];
    }
    return resultado;
}

function lerArray(nome) {
    let rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        function ask() {
            rl.question("Digite o array " + nome + " no formato [n,n,n]: ", (input) => {
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

async function main() {
    let a = await lerArray("A");
    let b = await lerArray("B");

    let resultado = produtoEscalarVet(a, b);

    if (resultado === null) {
        console.log("Os arrays precisam ter o mesmo tamanho.");
    } else {
        console.log("Resultado: " + resultado);
    }
}

main();