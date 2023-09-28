import './home.css';
import 'font-awesome/css/font-awesome.min.css';
import github from "../../utils/github.svg"
import instagram from "../../utils/instagram.svg"
import linkedin from "../../utils/linkedin.svg"
import twitter from "../../utils/twitter.svg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home-container'>
      <div className='info-container'>
        <h1 className='title'>Juan Bautista María Beck</h1>
        <h2 className='subtitle'>Full Stack Developer</h2>
      </div>
      <div className="icon-container">
        <a className='img-icons' href="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt='LinkedIn'/></a>
        <a className='img-icons' href="https://github.com/JBautistaBeck" target="_blank" rel="noopener noreferrer"><img src={github} alt='GitHub'/></a>
        <a className='img-icons' href="https://www.instagram.com/bautista.beck/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt='Instagram'/></a>
        <a className='img-icons' href="https://twitter.com/JuanBeckFS" target="_blank" rel="noopener noreferrer"><img src={twitter} alt='Twitter'/></a>
      </div>
      <Link to="/about"><button className='button-aboutme'>More about me</button></Link>
    </div>
  );
}

export default Home;
