function contarParesImpares() {
  
    let numeros = [
        parseInt(document.getElementById('numero1').value),
        parseInt(document.getElementById('numero2').value),
        parseInt(document.getElementById('numero3').value),
        parseInt(document.getElementById('numero4').value),
        parseInt(document.getElementById('numero5').value)
    ];

    let pares = 0;
    let impares = 0;


    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    
    document.getElementById("resultado").innerHTML = `
        <p>Se ingresaron ${pares} números pares y ${impares} números impares.</p>
    `;
}