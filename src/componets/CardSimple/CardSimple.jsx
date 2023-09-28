import './CardSimple.css';

function CardSimple({nombre, descripcion, cloneP, repositorio, lenguajes, fechaCreacion}) {

  return (
    <div className='card-container'>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <a href={cloneP} target="_blank" rel="noopener noreferrer"><button>Clonar</button></a>
      <a href={repositorio} target="_blank" rel="noopener noreferrer"><button>Repositorio</button></a>

      <h2>{lenguajes}</h2>
      <p>{fechaCreacion}</p>
    </div>
  );
}

export default CardSimple;