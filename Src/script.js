
let valoresArmazenados = [];
let valoresArmazenadosAux = [];

const button = document.querySelectorAll('#button input')

button.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.value === "<x") {
            remover();
        }
        else if (button.value === "=") {
            calcularResultadoFinal();
        } else if (button.value === "C") {
            limpar();
        }
        else {
            button.addEventListener
            adicionar(button.value);

        }


    })
})



const limpar = () => {
    valoresArmazenados = []
    valoresArmazenadosAux = [];
    document.getElementById('visor').innerText = '';

}

const adicionar = (valor) => {
    valoresArmazenados.push(valor);

    document.getElementById('visor').innerText = valoresArmazenados.join("")


}
const remover = () => {
    valoresArmazenados.pop();

    document.getElementById('visor').innerText = valoresArmazenados.join("")

}

const multiplicar = (a, b) => {
    return a * b;
}

const somar = (a, b) => {
    return a + b;


}
const subtrair = (a, b) => {
    return a - b;

}
const dividir = (a, b) => {
    return a / b;

}


const calcularResultadoFinal = () => {
    definirExpressao();
    let resultao = 0;
    let valorAtual = '';
    let proximoValor = '';
    let valorAnterior = '';
    let expressao = valoresArmazenadosAux;
    console.log(expressao)
    for (let i = 0; i < expressao.length; i++) {
        valorAnterior = expressao[i - 1];
        valorAtual = expressao[i];
        proximoValor = expressao[i + 1];
        if (valorAtual === 'x') {
            expressao.splice(i - 1, 3, multiplicar(Number(valorAnterior), Number(proximoValor)));

            i--;



        } else if (valorAtual === '/') {
            expressao.splice(i - 1, 3, dividir(Number(valorAnterior), Number(proximoValor)));

            i--;

        }




    }
    for (let j = 0; j < expressao.length; j++) {
        valorAnterior = expressao[j - 1];
        valorAtual = expressao[j];
        proximoValor = expressao[j + 1];
        if (valorAtual === '+') {
            expressao.splice(j - 1, 3, somar(Number(valorAnterior), Number(proximoValor)));
            j--;

        } else if (valorAtual === '-') {
            expressao.splice(j - 1, 3, subtrair(Number(valorAnterior), Number(proximoValor)));
            j--;

        }


    }
    resultao = expressao;
    document.getElementById('visor').innerText = resultao;
    valoresArmazenados = [String(resultao)];
    valoresArmazenadosAux = [];



}
//função Responsavel por definir como a expressão vai se comportar
const definirExpressao = () => {
    valoresArmazenadosAux = [];

    for (let i = 0; i < valoresArmazenados.length; i++) {

        const atual = valoresArmazenados[i];

        if (atual === "-" && (i === 0 || isNaN(valoresArmazenados[i - 1]))) {

            valoresArmazenadosAux.push("-" + valoresArmazenados[i + 1]);
            i++;
            continue;

        }



        if (!isNaN(atual)) {

            if (
                valoresArmazenadosAux.length === 0 ||
                isNaN(valoresArmazenadosAux[valoresArmazenadosAux.length - 1])
            ) {

                valoresArmazenadosAux.push(atual);

            } else {

                valoresArmazenadosAux[valoresArmazenadosAux.length - 1] +=
                    atual;

            }

        } else {

            valoresArmazenadosAux.push(atual);

        }
    }



}




