import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero__texto">
        <h1>Plantas para cada rincón</h1>
        <p>
          Interior, exterior, exóticas, suculentas y mucho más. Elegimos cada
          ejemplar a mano y lo enviamos listo para que solo tengas que
          encontrarle su lugar.
        </p>
        <Link to="/productos" className="hero__cta">
          Ver catálogo completo
        </Link>
      </div>
    </section>
  )
}
