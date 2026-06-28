//Nome:João Pedro Gusmão Seabra
//Questão 2:
/*
 Em nossos exercícios, vimos o método “indexOf()” que recebe como 
parâmetro um valor a ser buscado no Array e o índice do Array a partir do qual 
deve ser procurado o valor buscado. Caso o segundo parâmetro seja omitido, é 
considerado o valor “0” (zero) como o índice inicial do vetor. Caso o valor seja 
encontrado no Array, o valor do índice onde ele está é retornado; caso contrário, é 
retornado o valor “-1”. Crie uma função em Javascript, chamada 
“minhaIndexOf(arr,valor,inicio)” que se comporte conforme o método descrito. 
Faça um programa que use esta função e que demonstre que ela se comporta 
como deveria, conforme receba parâmetros válidos ou inválidos.
*/

function minhaIndexOf(arr, valor, inicio) {
    if (inicio === undefined || inicio === null || isNaN(inicio) || inicio < 0) {
        inicio = 0;
    }
    for (let i = inicio; i < arr.length; i++) {
        if (arr[i] === valor) {
            return i;
        }
    }
    return -1;
}
let teste = [10, 20, 30, 20, 40];
console.log(minhaIndexOf(teste, 20));
console.log(minhaIndexOf(teste, 20, 2));
console.log(minhaIndexOf(teste, 99));
console.log(minhaIndexOf(teste, 10, -3));
console.log(minhaIndexOf(teste, 10, 99));
console.log(minhaIndexOf(teste, "20"));