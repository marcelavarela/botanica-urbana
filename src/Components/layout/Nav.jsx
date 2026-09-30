import { NavLink } from 'react-router-dom'

const categorias = [
  { slug: 'interior', etiqueta: 'Interior' },
  { slug: 'exterior', etiqueta: 'Exterior' },
  { slug: 'exoticas', etiqueta: 'Exóticas' },
  { slug: 'suculentas-cactus', etiqueta: 'Suculentas y cactus' },
  { slug: 'con-flor', etiqueta: 'Con flor' },
]

export default function Nav() {
  const claseLink = ({ isActive }) =>
    isActive ? 'nav__link nav__link--activo' : 'nav__link'

  return (
    <nav className="nav">
      <ul className="nav__lista">
        <li>
          <NavLink to="/productos" end className={claseLink}>
            Todos los productos
          </NavLink>
        </li>
        {categorias.map((cat) => (
          <li key={cat.slug}>
            <NavLink to={`/productos?categoria=${cat.slug}`} className="nav__link">
              {cat.etiqueta}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
