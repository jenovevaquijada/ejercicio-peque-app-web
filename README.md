# 🛒 MiniShop - Experiencias Digitales

Bienvenido a **MiniShop**, una plataforma de e-commerce minimalista desarrollada como parte del bootcamp de Full Stack Development. Este proyecto no solo cumple con los requerimientos técnicos, sino que ha sido construido bajo mi principio rector: **"Construyendo experiencias digitales desde la empatía y la creatividad"**.

---

## 🚀 Características del Proyecto

El sistema es una aplicación robusta de servidor que incluye:

* **Catálogo de Productos**: Listado dinámico de 10 productos con gestión de stock visual.
* **Vistas Dinámicas**: Implementación de **Handlebars** para renderizar contenido en tiempo real.
* **Navegación Inteligente**: Menú *sticky* (fijo) alineado a la derecha y totalmente responsivo.
* **Procesamiento de Formularios**: Manejo de solicitudes POST para capturar datos de contacto.
* **Helpers Personalizados**: Lógica de servidor para transformar datos (como el helper `mayusculas`).
* **Seguridad y Errores**: Manejo de métodos HTTP no permitidos (Error 405) y rutas inexistentes.

---

## 🛠️ Stack Tecnológico

| Tecnología | Descripción |
| :--- | :--- |
| **Node.js** | Entorno de ejecución para JavaScript en el servidor. |
| **Express** | Framework web para el manejo de rutas y middlewares. |
| **Handlebars** | Motor de plantillas para generar HTML dinámico. |
| **CSS3** | Diseño basado en Grid y Flexbox con enfoque responsivo. |

---

## 📂 Estructura de Archivos

```text
m6-ejercicio05/
├── public/              # Archivos estáticos (CSS, imágenes)
│   ├── css/
│   │   └── style.css    # Estilos responsivos
│   └── img/             # Imágenes locales
├── views/               # Plantillas Handlebars
│   ├── layouts/         # Estructura base (main.handlebars)
│   ├── partials/        # Componentes (navbar, footer)
│   ├── home.handlebars  # Vista principal
│   ├── about.handlebars # Vista nosotros
│   ├── contact.handlebars # Formulario
│   └── success.handlebars # Confirmación
├── app.js               # Punto de entrada del servidor
└── package.json         # Dependencias del proyecto
```

---

## ⚙️ Instalación
Para ejecutar este proyecto localmente, sigue estos pasos:

Instala las dependencias necesarias:

Bash
npm install
Inicia el servidor:

Bash
node app.js
Abre tu navegador en: http://localhost:3000

## 🧠 Enfoque de Desarrollo
Como desarrolladora con ADHD y Autismo, este proyecto prioriza la claridad cognitiva. El código está modularizado para facilitar su lectura, y la interfaz evita la sobrecarga visual, utilizando espacios en blanco y una jerarquía tipográfica coherente para mejorar la experiencia del usuario.

"La empatía no solo está en cómo tratamos a las personas, sino en cómo diseñamos el código que interactúa con ellas."

## 👩🏻‍💻 Desarrollado por
Jenoveva Quijada
