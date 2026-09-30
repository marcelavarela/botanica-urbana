# 🌿 Botánica Urbana

Ecommerce de plantas desarrollado como proyecto de práctica en el curso de React de **Talento Tech**. Catálogo de plantas de interior, exterior, exóticas, suculentas/cactus y con flor, con filtros por categoría, detalle de producto y carrito de compras persistente.

## ✨ Funcionalidades

- **Catálogo de productos** con carga dinámica desde un archivo JSON (`fetch` + `useEffect`)
- **Filtro por categoría** (interior, exterior, exóticas, suculentas y cactus, con flor)
- **Detalle de producto** individual con selector de cantidad y control de stock
- **Carrito de compras**:
  - Agregar, quitar y modificar cantidad de productos
  - Cálculo automático de subtotales y total
  - Persistencia en `localStorage` (el carrito no se pierde al recargar la página)
  - Contador de items visible en el header
- **Navegación** entre páginas con `react-router-dom`, sin recargar el sitio

## 🛠️ Tecnologías

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/)
- Context API + `useState` para el manejo global del carrito
- CSS puro

## 📁 Estructura del proyecto

```
src/
├── Components/
│   └── layout/
│       ├── Header.jsx
│       ├── Nav.jsx
│       ├── Footer.jsx
│       ├── Item.jsx
│       ├── ItemListContainer.jsx
│       └── Layout.jsx
├── Context/
│   └── CarritoContext.jsx
├── Pages/
│   ├── Home.jsx
│   ├── Productos.jsx
│   ├── ProductoDetalle.jsx
│   └── Carrito.jsx
├── App.jsx
└── main.jsx

public/
├── productos.json
└── img/
```

## 🚀 Cómo correr el proyecto localmente

1. Cloná el repositorio (o descargá los archivos)
2. Instalá las dependencias:
   ```bash
   npm install
   ```
3. Iniciá el servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Abrí en el navegador la URL que indique la terminal (por defecto `http://localhost:5173`)

## 🗺️ Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Página de inicio |
| `/productos` | Catálogo completo, con filtro por categoría |
| `/producto/:id` | Detalle de un producto |
| `/carrito` | Carrito de compras |

## 📌 Próximas mejoras

- [ ] Subir el proyecto a GitHub
- [ ] Deploy en Vercel / Netlify
- [ ] Reemplazar imágenes de stock por fotos propias
- [ ] Agregar buscador de productos

## 👩‍💻 Autora

Proyecto desarrollado por **Marcela** como práctica del curso de React (Talento Tech).

---

*Este proyecto fue creado con fines educativos.*
