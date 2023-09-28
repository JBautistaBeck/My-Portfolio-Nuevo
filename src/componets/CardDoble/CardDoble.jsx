import './CardDoble.css';

function CardDoble({nombre, descripcion, clonePFront, repositorioFront, clonePBack, repositorioBack, lenguajes, fechaCreacion}) {

  return (
    <div className='cardD-container'>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <button>{clonePFront}</button>
      <button>{repositorioFront}</button>
      <button>{clonePBack}</button>
      <button>{repositorioBack}</button>

      <h2>{lenguajes}</h2>
      <p>{fechaCreacion}</p>
    </div>
  );
}

export default CardDoble;