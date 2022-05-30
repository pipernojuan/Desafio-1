debugger


// Ciclo FOR estático. Conteo de 0 a 14

let limite = prompt("Ingrese un Nro de 2 cifras:")
    limite = parseInt(limite)

    for (let i = 0; i < limite; i++) {
        if (i == 100){
            break
        }
        console.log("conteo nro.", i)
    }