import { createContext, useContext, useEffect, useState } from 'react'

const CarritoContext = createContext(null)

export function CarritoProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const guardado = localStorage.getItem('botanica-urbana-carrito')
      return guardado ? JSON.parse(guardado) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('botanica-urbana-carrito', JSON.stringify(items))
  }, [items])

  const agregarItem = (producto, cantidad = 1) => {
    setItems((prev) => {
      const existente = prev.find((it) => it.id === producto.id)
      if (existente) {
        return prev.map((it) =>
          it.id === producto.id
            ? { ...it, cantidad: it.cantidad + cantidad }
            : it
        )
      }
      return [...prev, { ...producto, cantidad }]
    })
  }

  const quitarItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id))
  }

  const actualizarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      quitarItem(id)
      return
    }
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, cantidad } : it))
    )
  }

  const vaciarCarrito = () => setItems([])

  const cantidadTotal = items.reduce((acc, it) => acc + it.cantidad, 0)
  const totalPrecio = items.reduce((acc, it) => acc + it.cantidad * it.precio, 0)

  return (
    <CarritoContext.Provider
      value={{
        items,
        agregarItem,
        quitarItem,
        actualizarCantidad,
        vaciarCarrito,
        cantidadTotal,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  )
}

export function useCarrito() {
  const contexto = useContext(CarritoContext)
  if (!contexto) {
    throw new Error('useCarrito debe usarse dentro de un CarritoProvider')
  }
  return contexto
}
