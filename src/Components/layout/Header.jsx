import { Link } from 'react-router-dom'
import { useCarrito } from '../../Context/CarritoContext'

export default function Header() {
  const { cantidadTotal } = useCarrito()

  return (
    <header className="header">
      <Link to="/" className="header__marca">
        <span className="header__logo" aria-hidden="true">🌿</span>
        <span className="header__nombre">Botánica Urbana</span>
      </Link>

      <Link to="/carrito" className="header__carrito" aria-label="Ver carrito">
        <span aria-hidden="true">🛒</span>
        {cantidadTotal > 0 && (
          <span className="header__badge">{cantidadTotal}</span>
        )}
      </Link>
    </header>
  )
}
