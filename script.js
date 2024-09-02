
const tiposDeRostro = ["cuadrado", "redondo", "ovalado", "triangular"]
const cortesRecomendados = [
    ["Corte al rape", "Corte con textura", "Corte con volumen en la parte superior"], // 0
    ["Corte en capas", "Corte con flequillo hacia un lado", "Corte con laterales cortos y largo arriba"], // 1
    ["Corte clásico", "Corte peinado hacia atrás", "Corte con degradado alto"], // 2
    ["Corte con volumen en los lados", "Corte con flequillo", "Corte con estilo despeinado"] // 3
]


function mostrarOpciones() {
    let mensaje = "Selecciona tu tipo de rostro:\n"
    for (let i = 0; i < tiposDeRostro.length; i++) {
        mensaje += `${i + 1}. ${tiposDeRostro[i]}\n`
    }
    return mensaje
}


function obtenerCortesRecomendados(indice) {
    if (indice >= 0 && indice < cortesRecomendados.length) {
        return cortesRecomendados[indice]
    } else {
        return null 
    }
}


function mostrarCortes(cortes) {
    let mensaje = "Los mejores cortes de pelo para tu tipo de rostro son:\n"
    for (let i = 0; i < cortes.length; i++) {
        mensaje += `- ${cortes[i]}\n`
    }
    alert(mensaje)
}


function simuladorCortesDePelo() {
    const opcion = prompt(mostrarOpciones())
    const indice = parseInt(opcion) - 1

    if (isNaN(indice) || indice < 0 || indice >= tiposDeRostro.length) {
        alert("Opción no válida. Por favor, intenta de nuevo.")
        simuladorCortesDePelo()
    } else {
        const cortes = obtenerCortesRecomendados(indice)
        if (cortes) {
            mostrarCortes(cortes)
        }
    }
}

simuladorCortesDePelo()