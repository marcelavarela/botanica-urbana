import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Item from './Item'

export default function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)
  const [busqueda, setBusqueda] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()

  const categoriaActiva = searchParams.get('categoria') || 'todas'

  useEffect(() => {
    setCargando(true)
    fetch('/productos.json')
      .then((res) => {
        if (!res.ok) throw new Error('No se pudo cargar el catálogo')
        return res.json()
      })
      .then((data) => {
        setProductos(data)
        setError(null)
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false))
  }, [])

  const productosFiltrados = useMemo(() => {
    let resultado = productos

    if (categoriaActiva !== 'todas') {
      resultado = resultado.filter((p) => p.categoria === categoriaActiva)
    }

    if (busqueda.trim() !== '') {
      const texto = busqueda.trim().toLowerCase()
      resultado = resultado.filter(
        (p) =>
          p.nombre.toLowerCase().includes(texto) ||
          p.descripcion.toLowerCase().includes(texto)
      )
    }

    return resultado
  }, [productos, categoriaActiva, busqueda])

  const cambiarCategoria = (slug) => {
    if (slug === 'todas') {
      searchParams.delete('categoria')
    } else {
      searchParams.set('categoria', slug)
    }
    setSearchParams(searchParams)
  }

  if (cargando) return <p className="estado">Cargando plantas…</p>
  if (error) return <p className="estado estado--error">Error: {error}</p>

  return (
    <section className="catalogo">
      <div className="catalogo__barra">
        <input
          type="search"
          className="catalogo__buscador"
          placeholder="Buscar una planta por nombre…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar productos"
        />

        {categoriaActiva !== 'todas' && (
          <button
            className="catalogo__limpiar"
            onClick={() => cambiarCategoria('todas')}
          >
            Quitar filtro: {categoriaActiva.replace('-', ' ')} ✕
          </button>
        )}
      </div>

      {productosFiltrados.length === 0 ? (
        <p className="estado">No encontramos plantas con esos criterios.</p>
      ) : (
        <div className="catalogo__grilla">
          {productosFiltrados.map((producto) => (
            <Item key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </section>
  )
}
