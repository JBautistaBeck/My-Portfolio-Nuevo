import CardSimple from '../../componets/CardSimple/CardSimple';
import CardDoble from '../../componets/CardDoble/CardDoble';
import './proyectos.css';
import informacionPro from '../../utils/informacionPro.json';

function Proyectos() {

  return (
    <div className='proyectos-container'>
      <h1>Este es el Proyectos</h1>
      <div className="proyectos-list">
      {informacionPro.map((proyecto, index) => (
      proyecto.status === 'simple' ? (
        <CardSimple
          key={index}
          nombre={proyecto.nombre}
          descripcion={proyecto.descripcion}
          cloneP={proyecto.cloneP}
          repositorio={proyecto.repositorio}
          lenguajes={proyecto.lenguajes}
          fechaCreacion={proyecto.fechaCreacion}
        />
      ) : (
        <CardDoble
          key={index}
          nombre={proyecto.nombre}
          descripcion={proyecto.descripcion}
          clonePBack={proyecto.clonePBack}
          clonePFront={proyecto.clonePFront}
          repositorioBack={proyecto.repositorioBack}
          repositorioFront={proyecto.repositorioFront}
          lenguajes={proyecto.lenguajes}
          fechaCreacion={proyecto.fechaCreacion}
        />
      )
      ))}
      </div>
    </div>
  );
}

export default Proyectos;
