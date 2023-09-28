import './CardDoble.css';

function CardDoble({nombre, descripcion, repositorioFront, repositorioBack, lenguajes, fechaCreacion}) {
    
  return (
    <div className='cardD-container'>
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      <a href={repositorioFront} target="_blank" rel="noopener noreferrer"><button>Repositorio FrontEnd</button></a>
      <a href={repositorioBack} target="_blank" rel="noopener noreferrer"><button>Repositorio BackEnd</button></a>

      <h2>Lenguajes: {lenguajes}</h2>
      <p>Fecha de Creacion: {fechaCreacion}</p>
    </div>
  );
}

export default CardDoble;