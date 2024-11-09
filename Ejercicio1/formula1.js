function calcularResultado() {
    let A = parseFloat(document.getElementById("inputA").value);
    let B = parseFloat(document.getElementById("inputB").value);
    let resultado = Math.pow(((A + 5) * (B / 3) + Math.pow(A * B, 2)), 3);
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
