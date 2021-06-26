// Atividade Avaliativa 

// 1. O que é o ES6? 

// R: ECMAScript é a especificação usada para implementar a linguagem JavaScript e o ES6 ou ECMAScript6 é a sexta versão da padronização JS 
// criada em 1997 e nasceu com o objetivo de tornar a linguagem mais acessível e versátil, alem disso tambem foi a primeira atualização 
// significativa para a linguagem desde o ES5 ja quue as versoes anterioreis nao trouxeram mudancas significativas.

//2. Exemplifique algumas features introduzidas no ES6.
//                                                                            Para executar os exemplos so descomentar o " /* ", " */ "
/* 
//==========================================================================================================================================
map: Cria um array contendo o mesmo número de elementos de um determinado array e os elementos do array criado são definidos por uma 
função, ou seja, converte o array original em outro 

//exemplo pratico:

var nomes = ['cris', 'rafa', 'mateus']

function transferenciaNome(val) {
    return val.toUpperCase()
}

var nomes2 = nomes.map(transferenciaNome)

console.log(nomes2)

//==========================================================================================================================================
filter: Cria um array contendo um subconjunto dos elementos do array original. O subconjunto de elementos do novo array é determinado por 
uma função que retorna true ou false quando verifica uma determinada condição para cada elemento do array original.

//exemplo pratico:

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function maiorQue5(val) {
    return val > 5
}

var numerosMaiorQ5 = numeros.filter(maiorQue5)

console.log(numerosMaiorQ5)

//==========================================================================================================================================
forEach: Executa uma função para cada um dos elementos de um array. O argumento dessa função helper é cada um dos elementos do array.

var nomes = ['cris', 'rafa', 'mateus']

function print(val) {
  console.log(val)
}

nomes.forEach(print)

//==========================================================================================================================================
*/