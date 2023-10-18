import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Card({ id, nombre, descripcion, repositorioFront, repositorioBack, lenguajes, fechaCreacion, repositorio, onClickFotos }) {
  return (
    <div className="border border-black rounded-lg p-4 m-4 shadow-lg max-w-xl">

        <div className='text-center'>
            <h1 className="text-2xl font-bold text-black mb-5">{nombre}</h1>
            {/* <p className="text-black my-2 ">{descripcion}</p> */}
        </div>

        <div className='flex flex-col items-center'>

            <div className='mb-2'>
                {repositorioFront ? (
                    <a href={repositorioFront} target="_blank" rel="noopener noreferrer">
                    <button className="text-black border border-black py-2 px-4 ml-10 sm:mx-2 rounded-full hover:bg-gray-950 hover:text-gray-200">
                        <FontAwesomeIcon icon={faGithub} /> Repositorio FrontEnd
                    </button>
                    </a>
                ) : null}

            
                {repositorioBack ? (
                    <a href={repositorioBack} target="_blank" rel="noopener noreferrer">
                    <button className="text-black border border-black py-2 px-4 ml-10 mx-2 rounded-full mt-2 hover:bg-gray-950 hover:text-gray-200">
                        <FontAwesomeIcon icon={faGithub} /> Repositorio BackEnd
                    </button>
                    </a>
                ) : null}

                {repositorio ? (
                    <a href={repositorio} target="_blank" rel="noopener noreferrer">
                    <button className="text-black border border-black py-2 px-4 mx-2 rounded-full mt-2 hover:bg-gray-950 hover:text-gray-200">
                        <FontAwesomeIcon icon={faGithub} /> Repositorio
                    </button>
                    </a>
                ) : null}
            </div>

            <button
                onClick={onClickFotos}
                className="text-black border border-black py-2 px-4 rounded-full mt-2 mb-2 hover:bg-gray-950 hover:text-gray-200"
            >
                <FontAwesomeIcon icon={faCamera} /> Fotos
            </button>

        </div>

      <h2 className=" text-lg text-black mt-4"> <strong>Lenguajes:</strong> {lenguajes}</h2>
      <p className=" text-lg text-black"> <strong>Fecha de Creación: </strong> {fechaCreacion}</p>

    </div>
  );
}

export default Card;
