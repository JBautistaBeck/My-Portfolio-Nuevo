import './CardDoble.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function CardDoble({id, nombre, descripcion, repositorioFront, repositorioBack, lenguajes, fechaCreacion, repositorio, onClickFotos}) {
    
  return (
    <div className='cardD-container'>
      
      <h1>{nombre}</h1>
      <p>{descripcion}</p>
      {repositorioFront? <a href={repositorioFront} target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon className='icono' icon={faGithub} />Repositorio FrontEnd</button></a> : null}
      {repositorioBack? <a href={repositorioBack} target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon className='icono' icon={faGithub} />Repositorio BackEnd</button></a> : null}
      {repositorio? <a href={repositorio} target="_blank" rel="noopener noreferrer"><button><FontAwesomeIcon className='icono' icon={faGithub} />Repositorio</button></a> : null}
      
      <button onClick={onClickFotos}><FontAwesomeIcon className='icono' icon={faCamera} />Fotos</button>

      <h2>Lenguajes: {lenguajes}</h2>
      <p>Fecha de Creacion: {fechaCreacion}</p>
     
    </div>
  );
}

export default CardDoble;