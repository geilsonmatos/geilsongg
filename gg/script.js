function agregar(valor) {
    document.getElementById('pantalla').value += valor;
}

function limpiar() {
    document.getElementById('pantalla').value = '';
}

function calcular() {
    try {
        const resultado = eval(document.getElementById('pantalla').value);
        document.getElementById('pantalla').value = resultado;
    } catch (e) {
        alert('Expresión inválida');
    }
}
