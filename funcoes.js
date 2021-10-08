function imprimeTexto(texto) {
    console.log(texto)
}

imprimeTexto("oi");
imprimeTexto("outro texto");

function soma() {
    return 2 + 2;
}

imprimeTexto(soma());

let listaFuncionarios = ["Frodo", "Galadriel", "Barbarvore"];
let listaIdades = [123, 532, 1029];

function exibeLista(lista, descricao) {
    e = "";
        for (let i = 0; i < lista.length; i++) {
            e += "\n" + descricao + lista[i];
        }
    return e;
}

console.log(exibeLista(listaFuncionarios, "Funcionarios: "));
console.log(exibeLista(listaIdades, "Idades: "));
