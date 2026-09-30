import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useCarrito } from '../Context/CarritoContext'

export default function ProductoDetalle() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [cantidad, setCantidad] = useState(1)
  const [agregado, setAgregado] = useState(false)
  const { agregarItem } = useCarrito()

  useEffect(() => {
    setCargando(true)
    setAgregado(false)
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => String(p.id) === id)
        if (!encontrado) throw new Error('Producto no encontrado')
        setProducto(encontrado)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [id])

  if (cargando) return <p className="estado">Cargando…</p>
  if (error) return <p className="estado estado--error">{error}</p>
  if (!producto) return null

  const manejarAgregar = () => {
    agregarItem(producto, cantidad)
    setAgregado(true)
  }

  return (
    <section className="detalle">
      <Link to="/productos" className="detalle__volver">
        ← Volver al catálogo
      </Link>

      <div className="detalle__grid">
        <img src={producto.imagen} alt={producto.nombre} />

        <div className="detalle__info">
          <span className="item__categoria">
            {producto.categoria.replace('-', ' ')}
          </span>
          <h1>{producto.nombre}</h1>
          <p className="detalle__precio">
            ${producto.precio.toLocaleString('es-AR')}
          </p>
          <p className="detalle__descripcion">{producto.descripcion}</p>
          <p className="detalle__stock">
            {producto.stock > 0
              ? `${producto.stock} unidades disponibles`
              : 'Sin stock'}
          </p>

          <div className="detalle__acciones">
            <input
              type="number"
              min="1"
              max={producto.stock}
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
              aria-label="Cantidad"
            />
            <button
              onClick={manejarAgregar}
              disabled={producto.stock === 0}
              className="detalle__boton"
            >
              Agregar al carrito
            </button>
          </div>

          {agregado && (
            <p className="detalle__ok">
              Se agregó al carrito.{' '}
              <Link to="/carrito">Ir al carrito →</Link>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
