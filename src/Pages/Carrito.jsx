import { Link } from 'react-router-dom'
import { useCarrito } from '../Context/CarritoContext'

export default function Carrito() {
  const { items, actualizarCantidad, quitarItem, vaciarCarrito, totalPrecio } =
    useCarrito()

  if (items.length === 0) {
    return (
      <section className="carrito carrito--vacio">
        <h1 className="pagina__titulo">Tu carrito</h1>
        <p>Todavía no agregaste ninguna planta.</p>
        <Link to="/productos" className="hero__cta">
          Ver catálogo
        </Link>
      </section>
    )
  }

  return (
    <section className="carrito">
      <h1 className="pagina__titulo">Tu carrito</h1>

      <ul className="carrito__lista">
        {items.map((item) => (
          <li className="carrito__item" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <div className="carrito__item-info">
              <Link to={`/producto/${item.id}`}>{item.nombre}</Link>
              <p>${item.precio.toLocaleString('es-AR')} c/u</p>
            </div>

            <input
              type="number"
              min="1"
              value={item.cantidad}
              onChange={(e) =>
                actualizarCantidad(item.id, Number(e.target.value))
              }
              aria-label={`Cantidad de ${item.nombre}`}
            />

            <p className="carrito__subtotal">
              ${(item.precio * item.cantidad).toLocaleString('es-AR')}
            </p>

            <button
              className="carrito__quitar"
              onClick={() => quitarItem(item.id)}
              aria-label={`Quitar ${item.nombre}`}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <div className="carrito__resumen">
        <button className="carrito__vaciar" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
        <p className="carrito__total">
          Total: <strong>${totalPrecio.toLocaleString('es-AR')}</strong>
        </p>
      </div>
    </section>
  )
}

