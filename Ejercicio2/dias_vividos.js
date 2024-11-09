function calcularDiasVividos() {
    
    let nombre = document.getElementById("nombre").value;
    let edad = parseInt(document.getElementById("edad").value);


    if (isNaN(edad) || edad < 0) {
        console.log("Entrada de edad no válida.");
        document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa una edad válida.</p>";
    } else {
        let diasVividos = edad * 365;
        console.log(`Nombre: ${nombre}, Días vividos: ${diasVividos}`);
        document.getElementById("resultado").innerHTML = `<p>Nombre: ${nombre}</p><p>Has vivido aproximadamente ${diasVividos} días.</p>`;
    }
}
