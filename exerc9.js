/* 9. Uma requisição a um servidor é feita, caso o valor enviado para o
servidor seja uma cadeia de caracteres, o mesmo devolve essa cadeia
de caracteres em caixa-alta, caso contrário um erro é devolvido
informando “the request value is not supported”. Implemente uma
Promise que simule o caso descrito e implemente um teste para o caso
de sucesso e de erro. Além disso, a simulação deve conter um atraso
aleatório de 500 milissegundo a 2 segundos, simulando o atraso da
comunicação com o servidor. Dica: pesquisar sobre a função
setTimeout.*/

function time(min, max) {

    return Math.random() * (max - min) + min
}

let requisicao = "valorteste";

function request() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

                let requiResult;

                if (typeof requisicao == typeof '') {

                    requiResult = {
                        status: 200,
                        valor: requisicao.toUpperCase(),
                    };
                    console.log("_________requisisao feita com sucesso!_____________");

                } else {

                    requiResult = {
                        status: 404,
                        valor: "ERRO: the request value is not supported"

                    };

                }

                if (requiResult.status === 200) {
                    resolve(requiResult);

                } else {
                    reject(requiResult)
                }

            },
            time(500, 2000))

    });
}

function testar() {

    request(1)
        .then(resultado => console.log(resultado))
        .catch(resultado => console.log(resultado))

}

testar();