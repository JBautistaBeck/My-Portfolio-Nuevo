import NavBar from './componentes/NavBar';
import Footer from './componentes/footer';
import About from './views/about';
import Home from './views/home';
import Proyectos from './views/proyectos';
import Skills from './views/skills';


function App() {

  return (
    <div className="flex flex-col h-screen">
      <div >
        <NavBar > </NavBar> 
      </div>

      <div className="flex-1" id="home">
        <Home />
      </div>
      <div className="flex-1" id="about">
        <About />
      </div>
      <div className="flex-1" id="proyectos">
        <Proyectos></Proyectos>
      </div>
      <div className='flex-1' id="skills">
        <Skills></Skills>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;


