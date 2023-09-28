//import logo from './logo.svg';
import './App.css';
import Home from './views/home/home';
import About from './views/about/about';
import Proyectos from './views/proyectos/proyectos';
import Skills from './views/skills/skills';
import NavBar from './componets/NavBar/navBar';
import {Route, Routes} from "react-router-dom";

function App() {

  // const location = useLocation()

  return (
    <div>

      <NavBar/>

      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/proyectos' element={<Proyectos/>}/>
        <Route path='/skills' element={<Skills/>}/>
      </Routes>


    </div>
  );
}

export default App;
