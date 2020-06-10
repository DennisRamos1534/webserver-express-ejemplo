const http = require('http'); // incluimos en la libreria de htpp que ya viene por defecto en node

http.createServer((req, res) => { // creamos un servidor web
        res.writeHead(200, { 'Content-Type': 'application/json' }); // Le decimos que en el content guarde la informacion del objeto que creamos
        let salida = {
            nombre: 'Dennis',
            edad: 24,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('Hola mundo');
        res.end();
    })
    .listen(8080); // escuchamos lo que haya en el puerto 8080

console.log('Escuchando el puerto 8080');