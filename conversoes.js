// Tipos de dados
// booleano

// conversao implicita
// conversao explicita

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);
console.log(numero + numeroString);

// Number()
console.log(numero + Number(numeroString));

// String()
console.log(String(numero) + numeroString);

// NaN => not a number
console.log(Number("456a"))

// Para saber mais:
let telefone = 12341234;
console.log("O telefone eh " + String(telefone));
// ou
console.log("O telefone eh " + telefone.toString());

// Convertendo booleano para string
let usuarioConectado = false;
console.log(String(usuarioConectado));
usuarioConectado = true;
console.log(String(usuarioConectado));

// Calculando a area + conversao
let largura = "10";
let altura = "5";

console.log(Number(largura) * Number(altura));

// Convertendo texto para numero utilizando + no comeco de cada variavel
console.log(+ largura * + altura);

// NaN
let nome = "Bruno";
console.log(Number(nome));

// Convertendo booleano para numero
const verdadeiro = true;
const falso = false;

console.log(Number(verdadeiro));
console.log(Number(falso));
