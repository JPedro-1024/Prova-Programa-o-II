
//Nome:João Pedro Gusmão Seabra
//Questão 1:
/*(1 ponto)  Nas listas de exercícios e nas aulas de nossa disciplina você teve 
contato com o método (função) “slice()” que extrai uma subarray a partir de um 
determinado ponto inicial (chamaremos de “inicio”) até um ponto final 
(chamaremos “fim”), sem incluir o valor localizado neste índice. Se colocarmos 
um valor negativo como parâmetro para este método, teremos como resultado 
uma posição relativa ao parâmetro, decrescida do valor absoluto do parâmetro, 
ou seja, se passarmos como parâmetro “-2”, isso equivale à posição final do 
Array, menos o valor “2” (“fim - 2”). Vejamos um exemplo: 
let arr = [1,2,3,4,5]; 
let resultado = arr.slice(-2); // inicio = fim-2 e fim=arr.length 
console.log(resultado); 
> [4,5] //Retornou os valores iniciados na posição 2 (4 - 2) e 
terminados em 3 (arr.length) 
No exemplo acima, se colocarmos “arr.slice(0,2)”, ele retorna o Array “[1,2]”. Note 
que o valor que está no índice “2”, não foi colocado no resultado retornado pela 
função.  
Se passarmos parâmetros com reais (como “1.5”), ele usa o valor inteiro mais 
próximo do valor real (no caso de “1.5”, seria “1”), sendo este valor inteiro menor 
que o valor real. Se passarmos como parâmetro um valor diferente Number, ele 
retorna um Array vazio “[]”.  
Faça uma função Javascript, chamada “minhaSlice(arr,inicio,fim)”, que receba 
como parâmetros um arr de valores numéricos (você deve testar se são 
numéricos, caso contrário, a função deve retornar null); o valor de início (“inicio”) 
e de final (“fim”), ambos do tipo Number e inteiros. A função deve se comportar 
como a função “slice()” descrita anteriormente, inclusive, testando os valores 
diferentes de inteiro, retornando “[]”, para estes casos, e aceitando como 
parâmetro os valores inteiros negativos como parâmetro.  
Faça um programa que teste essa função criada com valores válidos e inválidos, 
mostrando que seu código funciona conforme os requisitos da função 
(funcionalidades ou “coisas que se deseja que a função faça”), descritos aqui.
*/

function minhaSlice(array, inicio, fim) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== "number") {
            return null;
        }
    }
    if (fim === undefined) {
        fim = array.length;
    }
    if (typeof inicio === "number" && typeof fim === "number") {
        inicio = Math.floor(inicio);
        fim = Math.floor(fim);
        if (inicio < 0) {
            inicio = array.length + inicio;
        }
        if (fim < 0) {
            fim = array.length + fim;
        }
        for (let i = inicio; i < fim; i++) {
            resultado.push(array[i]);
        }
        return resultado;
    } else {
        console.log("Inicio e fim precisam ser do tipo number.");
        return [];
    }

}
// Sucesso espetacular:
console.log(meuSlice([1, 2, 3, 4, 5], 1, 3));
console.log(meuSlice([1, 2, 3, 4, 5], 0, -2));
console.log(meuSlice([1, 2, 3, 4, 5], -3, -1));
console.log(meuSlice([1, 2, 3, 4, 5], 0.9, 2.7));   
console.log(meuSlice([1, 2, 3, 4, 5], 3));

// Fracasso desastroso:
console.log(meuSlice(["a", 2, 3], 0, 2));
console.log(meuSlice([1, 2, 3], "x", 2));
console.log(meuSlice([1, 2, 3], 0, "y"));