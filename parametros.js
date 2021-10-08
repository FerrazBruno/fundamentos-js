function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2));

console.log(soma(624, 2345));

console.log(soma(-500, 40));


function nomeIdade(nome, idade) {
    return `meu nome é ${nome} e minha idade é ${idade}!`;
}

console.log(nomeIdade("Bruno", 27));


function multiplica(n1 = 1, n2 = 1) {
    return n1 * n2;
}

console.log(multiplica(soma(4, 5), soma(3, 3)));

