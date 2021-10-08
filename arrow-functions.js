function helloWorld(p) {
    return `Hello ${p}!`;
}

console.log(helloWorld("World"));

// arrow function

const apresentar = (nome) => `Meu nome é ${nome}`;
console.log(apresentar("Bruno"));

const soma = (n1, n2) => n1 + n2;
console.log(soma(3, 3));

// mais de uma linha de instrução
const somaNumerosPequenos = (n1, n2) => {
    if ((n1 > 0 && n1 < 10) && (n2 > 0 && n2 < 10)) {
        return n1 + n2;
    } else {
        return "somente números de 1 a 9";
    }
}

console.log(somaNumerosPequenos(2, 11));
console.log(somaNumerosPequenos(5, 5));