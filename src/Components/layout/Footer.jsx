import { useState } from 'react'

const equipo = [
  {
    nombre: 'Julieta Fernández',
    rol: 'Fundadora y vivero',
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300',
  },
  {
    nombre: 'Martín Souza',
    rol: 'Logística y envíos',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300',
  },
  {
    nombre: 'Rocío Paz',
    rol: 'Atención al cliente',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300',
  },
]

const sedes = [
  { ciudad: 'La Plata', direccion: 'Diagonal 74 n.º 1523' },
  { ciudad: 'CABA', direccion: 'Av. Córdoba 3450, Palermo' },
  { ciudad: 'Mar del Plata', direccion: 'Av. Colón 2140' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [enviado, setEnviado] = useState(false)

  const manejarSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setEnviado(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer__equipo">
        <h3 className="footer__titulo">Quiénes hacen Botánica Urbana</h3>
        <div className="footer__tarjetas">
          {equipo.map((persona) => (
            <article className="tarjeta-persona" key={persona.nombre}>
              <img src={persona.foto} alt={persona.nombre} />
              <h4>{persona.nombre}</h4>
              <p>{persona.rol}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="footer__grid">
        <div className="footer__col">
          <h4>Botánica Urbana</h4>
          <p>
            Botánica Urbana S.R.L. — Vivero online dedicado a plantas de interior,
            exterior y especies exóticas.
          </p>
          <p className="footer__legal">
            © {new Date().getFullYear()} Botánica Urbana S.R.L. Todos los derechos
            reservados. Marca, logo y contenidos son propiedad intelectual de
            Botánica Urbana S.R.L.
          </p>
        </div>

        <div className="footer__col">
          <h4>Contacto</h4>
          <a href="mailto:hola@botanicaurbana.com.ar?subject=Consulta desde la web">
          hola@botanicaurbana.com.ar
          </a>
          <p>+54 221 456-7890</p>
          <p>Lun a vie, 9 a 18 hs</p>
        </div>

        <div className="footer__col">
          <h4>Sucursales</h4>
          <ul className="footer__sedes">
            {sedes.map((sede) => (
              <li key={sede.ciudad}>
                <strong>{sede.ciudad}</strong> — {sede.direccion}
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Legales</h4>
          <ul className="footer__legales">
            <li>Política de privacidad</li>
            <li>Términos y condiciones</li>
            <li>Política de cambios y devoluciones</li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Newsletter</h4>
          <p>Novedades y consejos de cuidado, una vez por mes.</p>
          {enviado ? (
            <p className="footer__ok">¡Gracias por suscribirte!</p>
          ) : (
            <form className="footer__newsletter" onSubmit={manejarSubmit}>
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Suscribirme</button>
            </form>
          )}
        </div>
      </div>
    </footer>
  )
}
