import github from "../utils/github.svg"
import instagram from "../utils/instagram.svg"
import linkedin from "../utils/linkedin.svg"
import twitter from "../utils/twitter.svg"
import "./home.css"

function Home() {

    const handleAboutClick = (id) => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        }

    };

  return (
    <div className=" bg-gradient-to-l from-mantis-400 to-mantis-700 p-10 h-screen">

      <div className="flex flex-col justify-center items-center mt-14 sm:mt-32 slide-from-top">
        <h1 className=" text-7xl">Juan Bautista María Beck</h1>
        <h2 className=" text-3xl mt-5">Full Stack Developer</h2>
      </div>

      <div className="flex justify-center mt-12 slide-from-bottom ">
        <a  href="https://www.linkedin.com/in/juan-bautista-mar%C3%ADa-beck/" target="_blank" rel="noopener noreferrer">    <img className='w-14 h-14 hover:transform hover:scale-105' src={linkedin} alt='LinkedIn'/>    </a>
        <a  href="https://github.com/JBautistaBeck" target="_blank" rel="noopener noreferrer">                              <img className='w-14 h-14 ml-6 hover:transform hover:scale-105' src={github} alt='GitHub'/>        </a>
        <a  href="https://www.instagram.com/bautista.beck/" target="_blank" rel="noopener noreferrer">                      <img className='w-14 h-14 ml-6 mr-6 hover:transform hover:scale-105' src={instagram} alt='Instagram'/>  </a>
        <a  href="https://twitter.com/JuanBeckFS" target="_blank" rel="noopener noreferrer">                                <img className='w-14 h-14 hover:transform hover:scale-105' src={twitter} alt='Twitter'/>      </a>
      </div>

        <div className="flex justify-center mt-12 slide-from-bottom ">
            <button onClick={handleAboutClick} className=" text-lg text-black px-4 py-2 rounded-lg border border-black hover:bg-gray-950 hover:text-gray-200">Más sobre mí</button>
        </div>

    </div>

  );
}

export default Home;
