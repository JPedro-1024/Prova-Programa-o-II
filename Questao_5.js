//Nome: João Pedro Gusmão Seabra
//Questão 5:
/*
Escreva uma função em JavaScript que receba dois parâmetros: um texto base (string)
e uma substring de busca (string).
A função deve localizar todas as ocorrências exatas da substring dentro do texto
(case-sensitive) e adicionar as tags HTML "<mark>" e "</mark>" antes e depois de
cada ocorrência encontrada.
Exceções:
a) Caso nenhuma ocorrência seja encontrada, retornar null.
b) Caso algum dos parâmetros não seja do tipo string, retornar -1.
*/

function destacarTermo(texto, termo) {
    if (typeof texto !== "string" || typeof termo !== "string") {
        return -1;
    }

    let resultado = "";
    let encontrou = false;
    let i = 0;

    while (i < texto.length) {
        if (texto.substring(i, i + termo.length) === termo) {
            resultado += "<mark>" + termo + "</mark>";
            i += termo.length;
            encontrou = true;
        } else {
            resultado += texto[i];
            i++;
        }
    }

    if (!encontrou) {
        return null;
    }

    return resultado;
}

const resultado = destacarTermo("A prototipagem é essencial.", "prototipagem");
console.log("Teste 1 (Ocorrencia unica):", resultado);

// Sucesso espetacular:
console.log(destacarTermo("banana banana banana", "banana"));
console.log(destacarTermo("JavaScript é diferente de javascript", "JavaScript"));

// Fracasso desastroso:
console.log(destacarTermo("Nada aqui corresponde", "xyz"));
console.log(destacarTermo(123, "teste"));
console.log(destacarTermo("texto valido", 456));
console.log(destacarTermo(undefined, undefined));