function obtenerPromedio(edades) {
    let suma = edades.reduce((a, b) => a + b, 0);
    return suma / edades.length;
}

function calcularPromedios() {
    // Obtenemos las edades de cada turno
    let edadesManana = Array.from(document.querySelectorAll("#turnoManana input")).map(input => parseInt(input.value));
    let edadesTarde = Array.from(document.querySelectorAll("#turnoTarde input")).map(input => parseInt(input.value));
    let edadesNoche = Array.from(document.querySelectorAll("#turnoNoche input")).map(input => parseInt(input.value));

    // Verificamos que todas las entradas sean números válidos
    if (edadesManana.some(isNaN) || edadesTarde.some(isNaN) || edadesNoche.some(isNaN)) {
        document.getElementById("resultado").innerHTML = "<p>Por favor, ingresa todas las edades correctamente.</p>";
        return;
    }

    // Calculamos los promedios de cada turno
    let promedioManana = obtenerPromedio(edadesManana);
    let promedioTarde = obtenerPromedio(edadesTarde);
    let promedioNoche = obtenerPromedio(edadesNoche);

    // Mostramos los promedios
    let resultadoHTML = `
        <p>Promedio del turno mañana: ${promedioManana.toFixed(2)}</p>
        <p>Promedio del turno tarde: ${promedioTarde.toFixed(2)}</p>
        <p>Promedio del turno noche: ${promedioNoche.toFixed(2)}</p>
    `;

    // Determinamos el turno con el mayor promedio
    let mayorPromedio = Math.max(promedioManana, promedioTarde, promedioNoche);
    let turnoMayorPromedio = "";

    if (mayorPromedio === promedioManana) turnoMayorPromedio = "mañana";
    else if (mayorPromedio === promedioTarde) turnoMayorPromedio = "tarde";
    else turnoMayorPromedio = "noche";

    resultadoHTML += `<p>El turno con el mayor promedio de edades es el turno ${turnoMayorPromedio}.</p>`;

    // Mostramos el resultado en el div con id "resultado"
    document.getElementById("resultado").innerHTML = resultadoHTML;
}
