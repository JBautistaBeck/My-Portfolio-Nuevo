import './CardSimple.css';

function CardSimple({nombre, descripcion, cloneP, repositorio, lenguajes, fechaCreacion}) {

  return (
    <div className='card-container'>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <button>{cloneP}</button>
      <button>{repositorio}</button>

      <h2>{lenguajes}</h2>
      <p>{fechaCreacion}</p>
    </div>
  );
}

export default CardSimple;