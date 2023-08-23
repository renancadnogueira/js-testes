// parametros de função



console.log(soma(5, 10));

// parametros x argumentos

// ordem dos parametros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Renan", 26))

function soma(numero1, numero2) {
    return numero1 + numero2;
}

function multiplica(numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));