//8. Quais as vantagens de se usar Promises ao invés de callbacks?


/*Uma Promise é um objeto que representa a eventual conclusão ou falha de uma operação assincrona, Essencialmente, uma promise é um objeto 
retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função, ao contrário dos callbacks com retornos de 
funções old-style, uma promisse tem algumas garantias como: 

Callbacks nunca serão chamados antes da conclusão da execução atual do loop de eventos do JavaScript. 
Callbacks adicionadas com .then mesmo depois do sucesso ou falha da operação assincrona, serão chamadas, como acima.
Multiplos callbacks podem ser adicionados chamando-se .then várias vezes, para serem executados independentemente da ordem de inserção.

Mas o benefício mais imediato da promises é o encadeamento onde  o retorno da declaração é uma variável, o que torna o processo de  
encadeamento de handlers muito mais simples permitindo, por exemplo, avaliações em cascata. */