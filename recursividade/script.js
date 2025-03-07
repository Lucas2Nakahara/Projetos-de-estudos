//esse é o modo iterativo, que conhecemos mais, que utiliza os loops, como: for e While.
function fatorial (n) {
    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}