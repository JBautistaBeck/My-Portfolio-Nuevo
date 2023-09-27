import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {

    const nombre = "< Juan Beck />"

  return (
    <div className='nav-container'>

      <Link to="/home" className='nav-link'>{nombre}</Link>
      <Link to="/proyectos" className='nav-link'>Proyectos</Link>
      <Link to="/skills" className='nav-link'>Skills</Link>
      <Link to="/about" className='nav-link'>About Me</Link>

    </div>
  );
}

export default NavBar;