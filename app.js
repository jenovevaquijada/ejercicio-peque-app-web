const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express(); 
const PORT = 3000;

const hbs = exphbs.create({
    helpers: {
        mayusculas: function (texto) {
            if (texto && typeof texto === 'string') {
                return texto.toUpperCase();
            }
            return ""; 
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const nombreTienda = "MiniShop";
const mensajeBienvenida = "Democratizamos el diseño.";

const productos = [
    { nombre: "Camiseta Básica", precio: 15, disponible: true, imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600" },
    { nombre: "Pantalón Jeans", precio: 30, disponible: false, imagen: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600" },
    { nombre: "Zapatos Deportivos", precio: 50, disponible: true, imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
    { nombre: "Chaqueta de Cuero", precio: 80, disponible: true, imagen: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
    { nombre: "Gorra Clásica", precio: 12, disponible: true, imagen: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?w=600" },
    { nombre: "Bolso de Mano", precio: 45, disponible: false, imagen: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600" },
    { nombre: "Reloj Digital", precio: 60, disponible: true, imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600" },
    { nombre: "Bufanda de Lana", precio: 18, disponible: true, imagen: "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600" },
    { nombre: "Sudadera Hoodie", precio: 35, disponible: false, imagen: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600" },
    { nombre: "Gafas de Sol", precio: 25, disponible: true, imagen: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600" }
];

// --- 4. RUTAS ---
app.get('/', (req, res) => {
    res.render('home', { nombreTienda, mensajeBienvenida, productos });
});

app.get('/about', (req, res) => {
    res.render('about', { nombreTienda });
});

app.get('/contact', (req, res) => {
    res.render('contact', { nombreTienda });
});

app.post('/contact', (req, res) => {
    const { nombre } = req.body;
    res.render('success', { nombre, nombreTienda });
});

app.all(['/', '/about', '/contact'], (req, res, next) => {
    if (['GET', 'POST'].includes(req.method)) {
        next();
    } else {
        res.status(405).send("Método no permitido");
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
});
