const express = require('express');
const { create } = require('express-handlebars');
const path = require('path');

const app = express();

const hbs = create({
    extname: '.handlebars', 
    defaultLayout: 'main',  
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    helpers: {

        mayusculas: (str) => str.toUpperCase()
    }
});

app.engine('.handlebars', hbs.engine);
app.set('view engine', '.handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use(express.urlencoded({ extended: true }));    

const productos = [
    { nombre: "Camiseta Básica", precio: 15, disponible: true, imagen: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600" },
    { nombre: "Pantalón Jeans", precio: 30, disponible: false, imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" },
    { nombre: "Zapatos Deportivos", precio: 50, disponible: true, imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
    { nombre: "Chaqueta de Cuero", precio: 80, disponible: true, imagen: "https://images.unsplash.com/photo-1520975954732-35dd2229969e?w=600" }
];

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "MiniShop - Inicio",
        bienvenida: "Bienvenido a nuestra tienda creativa", 
        productos: productos
    });
});

app.get('/about', (req, res) => {
    res.render('about', { titulo: "Sobre Nosotros" });
});

app.get('/contact', (req, res) => {
    res.render('contact', { titulo: "Contacto" });
});

app.post('/contact', (req, res) => {
    const { nombre, email } = req.body;
    res.render('success', { 
        titulo: "¡Éxito!",
        nombre: nombre 
    });
});

app.use((req, res, next) => {
    const rutasValidas = ['/', '/about', '/contact'];
    
    if (rutasValidas.includes(req.path)) {
        if (req.method !== 'GET' && req.method !== 'POST') {
            return res.status(405).send("Método no permitido");
        }
    }
    next();
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor MiniShop corriendo en http://localhost:${PORT}`);
});