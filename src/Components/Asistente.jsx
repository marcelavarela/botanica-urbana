function Asistente({ nombre, tarea, emoji }) {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>{emoji} {tarea}</p>
    </div>
  );
}

export default Asistente;