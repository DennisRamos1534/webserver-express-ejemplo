const hbs = require('hbs');

// helpers
hbs.registerHelper('getAnio', () => { // Sino hay varibales en el render viene a buscar al helper
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar', (texto) => { // Sino hay varibales en el render viene a buscar al helper
    let palabras = texto.split(' '); // Separamos las palabras por el espacio en un arreglo
    palabras.forEach((palabra, idx) => { // Recorremos las palabras con el forEach
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase(); // Ponemos la primera letra en mayusculas y las demas en minusculas
    });

    return palabras.join(' '); // Unimos las palabras luego de capitalizarlas
});