//Nome: João Pedro Gusmão Seabra
//Questão 6:
/*
No JavaScript moderno, existe o método "flat()", que cria um novo
array concatenando todos os elementos de subarrays aninhados dentro dele.
Faça uma função em Javascript chamada "minhaFlat(arr)" que receba como
parâmetro um Array que pode conter outros Arrays aninhados em múltiplos níveis
(ex: [1, [2, [3, 4], 5], 6]). A sua função deve retornar um único Array unidimensional
contendo todos os elementos originais (ex: [1, 2, 3, 4, 5, 6]), "achatando" a
estrutura.
Regras e Restrições: a) Você não pode utilizar o método nativo
"Array.prototype.flat()";
b) A função deve testar se o parâmetro recebido é realmente um Array (use o
método "Array.isArray()"). Caso não seja, a função deve retornar "null";
c) Sua solução deve ser capaz de lidar com qualquer nível de profundidade de
aninhamento (Dica: pense em como uma chamada recursiva da própria função
pode resolver o problema de estruturas dentro de estruturas).
*/

function minhaFlat(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let arrAchatado = minhaFlat(arr[i]);
            for (let j = 0; j < arrAchatado.length; j++) {
                resultado.push(arrAchatado[j]);
            }
        } else {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}

// Sucesso espetacular:
console.log(minhaFlat([1, [2, [3, 4], 5], 6]));
console.log(minhaFlat([1, [2, 3], 4]));
console.log(minhaFlat([1, [2, [3, [4, [5]]]]]));

// Fracasso desastroso:
console.log(minhaFlat("nao sou um array"));
console.log(minhaFlat(42));