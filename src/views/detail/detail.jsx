import React, { useState } from 'react';
import './detail.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

function Detail({ onClose, proyecto }) {
  const [activeTab, setActiveTab] = useState('fotos'); // Estado para controlar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="detail-overlay">
      <div className="detail-content">
        <button className="close-button" onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </button>
        <h1 className="project-name">{proyecto.nombre}</h1>

        {/* Pestañas */}
        <div className="tabs">

          <div className={`tab ${activeTab === 'fotos' ? 'active' : ''}`} onClick={() => handleTabClick('fotos')}>
            <h1>Fotos</h1>
          </div>

          <div className={`tab ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => handleTabClick('videos')}>
            <h1>Videos</h1>
          </div>

        </div>

        {/* Contenido de las pestañas */}
        <div className="columns">

          <div className={`column ${activeTab === 'fotos' ? 'active' : ''}`}>

            <div className="carousel-container">
              <Carousel   showThumbs={false} showStatus={false} width="94%" height="90%" dynamicHeight={false}>
                {proyecto.fotos.map((imagen, index) => (
                  <div key={index}>
                    <img src={imagen} alt={`Foto ${index}`} />
                  </div>
                ))}
              </Carousel>
            </div>

          </div>

          <div className={`column ${activeTab === 'videos' ? 'active' : ''}`}>

            <div className="video-container">

              <iframe
                width="560"
                height="315"
                src={proyecto.linkVideo}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>

            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Detail;

// import React, { useState } from 'react';
// import './detail.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faX } from '@fortawesome/free-solid-svg-icons';

// function Detail({ onClose, proyecto }) {
//   const [activeTab, setActiveTab] = useState('fotos'); // Estado para controlar la pestaña activa

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   return (
//     <div className="detail-overlay">
//       <div className="detail-content">
//         <button className="close-button" onClick={onClose}>
//           <FontAwesomeIcon icon={faX} />
//         </button>
//         <h1 className="project-name">{proyecto.nombre}</h1>

//         {/* Pestañas */}
//         <div className="tabs">
//             <div className={`tab ${activeTab === 'fotos' ? 'active' : ''}`} onClick={() => handleTabClick('fotos')}> 
//                 <h1>Fotos</h1>
//             </div>
//             <div className={`tab ${activeTab === 'videos' ? 'active' : ''}`} onClick={() => handleTabClick('videos')}>
//                 <h1>Videos</h1>
//             </div>
//         </div>

//         {/* Contenido de la pestaña Fotos */}
//         {activeTab === 'fotos' && (
//         <div className="carousel-container">
//             <Carousel showThumbs={false}>
//                 {proyecto.fotos.map((imagen, index) => (
//                     <div key={index}>
//                     <img src={imagen} alt={`Foto ${index}`} />
//                     </div>
//                 ))}
//             </Carousel>
//         </div>
//         )}

//         {/* Contenido de la pestaña Videos */}
//         {activeTab === 'videos' && (
//         <div className="video-container">
//             <iframe 
//                 width="560" 
//                 height="315"
//                 src={proyecto.linkVideo}
//                 title="YouTube video player" 
//                 frameborder="0" 
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media;gyroscope; picture-in-picture; web-share" 
//                 allowfullscreen>
//             </iframe>
//         </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Detail;