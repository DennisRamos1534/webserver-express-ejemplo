const express = require('express');
const app = express(); // nos permite usar express como nosotros queremos

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); // definimos una carperta publica para usar el archivo que se encuentre en la carpeta public

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs'); // express HBS



app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'dennis',
    });
});

app.get('/about', (req, res) => {

    res.render('about', {});
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});