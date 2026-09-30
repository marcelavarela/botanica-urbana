import { Routes, Route } from 'react-router-dom'
import Layout from './Components/layout/Layout'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import ProductoDetalle from './Pages/ProductoDetalle'
import Carrito from './Pages/Carrito'
import { CarritoProvider } from './Context/CarritoContext'

export default function App() {
  return (
    <CarritoProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="producto/:id" element={<ProductoDetalle />} />
          <Route path="carrito" element={<Carrito />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </CarritoProvider>
  )
}