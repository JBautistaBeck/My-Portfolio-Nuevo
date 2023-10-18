import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';


function NavBar() {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };



    const handleAboutClick = (id) => {
        if(id === "about") {

          const aboutSection = document.getElementById('about');
          if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
          }

        } else if (id === "proyectos") {

          const proyectosSection = document.getElementById('proyectos');
          if (proyectosSection) {
          proyectosSection.scrollIntoView({ behavior: 'smooth' });
          }

        }  else if (id === "skills") {

          const skillsSection = document.getElementById('skills');
          if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
          }

        }  else if (id === "home") {

          const homeSection = document.getElementById('home');
          if (homeSection) {
          homeSection.scrollIntoView({ behavior: 'smooth' });
          }

        }
    };


    return (
      <div className={` text-xs  sm:text-base fixed top-0 w-full p-2 pl-6 flex justify-between duration-500 ${ scrolling ? 'backdrop-blur-lg bg-white opacity-90' : ' backdrop-blur-lg '}`}>

        <FontAwesomeIcon onClick={() => handleAboutClick("home")} className=' w-12 h-12' icon={faLaptopCode} title="Principio" />

        <div className="">

            <button onClick={() => handleAboutClick("about")} className=" text-black border-b border-black mt-2 ml-6 scroll-link hover:text-slate-700 hover:border-slate-700">Sobre mí</button>
            <button onClick={() => handleAboutClick("proyectos")} className="text-black border-b border-black mt-4 sm:mt-2 ml-3 sm:ml-6 scroll-link hover:text-slate-700 hover:border-slate-700">Proyectos</button>
            <button onClick={() => handleAboutClick("skills")} className="text-black border-b border-black mt-2 ml-3 sm:ml-6 mr-2 sm:mr-4 scroll-link hover:text-slate-700 hover:border-slate-700">Habilidades</button>

        </div>

        
  
      </div>
    );
  }
  
  export default NavBar;
  