import './about.css';
import fotoPerfil from "../../utils/foto-perfil.jpeg"
import { Link } from 'react-router-dom';

function About() {

  const aboutMeText = "¡Hola! 👋🏼 Soy Juan Bautista María Beck, un estudiante avanzado en Administración de Empresas con una gran pasión por la programación. Durante mi recorrido universitario, mi incesante curiosidad por el mundo de la programación me impulsó a dar un paso al frente. Inicié mi formación en programación en Soy Henry y desde entonces, me he sumergido de lleno en el fascinante universo tecnológico. En la actualidad, me encuentro en constante exploración de nuevas tecnologías y mantengo al día con las últimas tendencias."

  return (
    <div className='about-container'>
      <div className='img-container'>
        <img className='round-image' src={fotoPerfil}></img>
      </div>
        
      <div className='text-container'>
        <Link to="/proyectos" className='top-right-button'> <button className='button-aboutme'>Proyectos</button> </Link>
        <h1>About Me</h1>
        <p>{aboutMeText}</p>
        <a href='https://docs.google.com/document/d/11-ACxx88UTeenLH1yS40QdkM-7Y5Uk-5AFdoxkhnGt4/edit' target="_blank" rel="noopener noreferrer"><button className='button-aboutme'>Curriculum Vitae</button></a>
      </div>
    </div>
  );
}

export default About;
