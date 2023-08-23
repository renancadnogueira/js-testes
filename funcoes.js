// let x = "";
// console.log(x);
// x = "Oi";

function imprimeTexto(texto) { // em Laranja é o tipo de parâmetro que escolhemos passar
    console.log(texto)
}

imprimeTexto(soma()); //execução da função 
// imprimeTexto("Outro texto");

// três formas de escrever funções

function soma() {
    return  2 + 2; // return sempre ser a última linha da função
}

// console.log(soma());