/* 11. Um professor de algoritmos está ensinando seus alunos a
implementarem árvores binárias e cobra o seguinte exercício:

“Implemente uma árvore binária cujo nó raiz seja um número qualquer. A
árvore deve conter um método para criar 2 nós folha à direita e à
esquerda do nó raiz, sendo ambos números quaisquer diferentes do
valor do nó raiz e a estrutura deve automaticamente colocar o maior
número informado à direita do nó raiz e o menor número informado à
esquerda.”

Implemente o exercício descrito acima usando as classes JavaScript.
Deverá haver uma classe “Folha”, uma classe “No” e uma classe
“Arvore”. A classe “Arvore” deve ser responsável por criar o nó raiz e
deve conter o método que cria os nós folha baseados nos critérios do
exercício descrito. Além disso, deve haver um modo de checar se o nó é
um nó folha ou não e na execução da aplicação teste devem haver
console.log’s informando o nó raiz e seus filhos e quais os tipos de cada
nó (nó ou nó folha). Use conceitos de OO tais como herança.*/

class Folha {

    constructor(valor) {

        this.valor = valor;

    }
}

class No extends Folha {

    constructor(valor) {

        super(valor);
        this.esquerda = null;
        this.direita = null;
    }
}

class Arvore {

    constructor() {

        this.Arvore = null

    }

    inserirNo(novoValor) {

        let novoNo = new Folha(novoValor)

        if (this.Arvore == null) {

            this.Arvore = novoNo



        } else {

            this.inserirForlhaNo(this.Arvore, novoNo)
        }
    }



    inserirForlhaNo(antigoNo, novoNo) {

        if (novoNo.valor < antigoNo.valor) {

            if (antigoNo.esquerda == null) {

                antigoNo.esquerda = novoNo;

            } else {
                this.inserirForlhaNo(antigoNo.esquerda, novoNo)
            }

        } else {

            if (antigoNo.direita == null) {

                antigoNo.direita = novoNo;

            } else {
                if (antigoNo.direita == null) {

                    antigoNo.direita = novoNo;

                } else {

                    this.inserirForlhaNo(antigoNo.direita, novoNo)
                }
            }
        }

    }

    verificarNoFolha(no) {

        if (no.esquerda == null && no.direita == null) {

            console.log(no.valor + " = No FOLHA")
        } else {

            console.log(no.valor + " = No PAI")

            if (no.esquerda != null) {

                this.verificarNoFolha(no.esquerda)

            }

            if (no.direita != null) {

                this.verificarNoFolha(no.direita)

            }
        }
    }
}

let i = new Arvore()

numeros = [10, 20, 30, 5, 40, 50]
console.log("            *");
console.log("           *▓*");
console.log("          *▓▓▓*");
console.log("         *▓▓▓*▓*");
console.log("        *▓*▓▓▓▓▓*");
console.log("       *▓▓▓▓*▓▓▓▓*");
console.log("      *▓▓▓▓▓▓▓*▓▓▓*");
console.log("     *▓▓*▓▓▓▓▓▓▓▓▓▓*");
console.log("    *▓▓▓▓▓▓▓▓*▓▓▓▓▓▓*");
console.log("   *▓▓*▓▓▓▓▓▓▓▓▓▓▓*▓▓*");
console.log("           ███");
console.log("           ███");

numeros.forEach(valor => i.inserirNo(valor));
i.verificarNoFolha(i.Arvore);