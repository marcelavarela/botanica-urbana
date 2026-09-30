import { Link } from 'react-router-dom'

export default function Item({ producto }) {
  const { id, nombre, precio, imagen, categoria, stock } = producto

  return (
    <article className="item">
      <Link to={`/producto/${id}`} className="item__imagen-link">
        <img src={imagen} alt={nombre} loading="lazy" />
      </Link>
      <div className="item__info">
        <span className="item__categoria">{categoria.replace('-', ' ')}</span>
        <h3 className="item__nombre">
          <Link to={`/producto/${id}`}>{nombre}</Link>
        </h3>
        <p className="item__precio">${precio.toLocaleString('es-AR')}</p>
        {stock <= 5 && <p className="item__stock-bajo">Últimas unidades</p>}
        <Link to={`/producto/${id}`} className="item__boton">
          Ver producto
        </Link>
      </div>
    </article>
  )
}
