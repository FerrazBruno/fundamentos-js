// HOISTING => lê todas as funções e variáveis e trás para o topo, menos expressões de função.

// expressão de função
console.log(soma(1, 1)); // => não funciona
const soma = function(n1, n2) { return n1 + n2 };


console.log(apresentar()); // => funciona
function apresentar() {
    return "Hello!";
}

