import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const nombre = "< Juan Beck />"
    const abouteMe = "< About Me />"
    const proyectos = "< Proyectos />"
    const skills = "< Skills />"

  return (
    <div className='nav-container'>

      <Link to="/" className='nav-link'>{nombre}</Link>
      <Link to="/about" className='nav-link'>{abouteMe}</Link>
      <Link to="/proyectos" className='nav-link'>{proyectos}</Link>
      <Link to="/skills" className='nav-link'>{skills}</Link>
      

    </div>
  );
}

export default NavBar;