import React, { useState } from 'react';
import './skills.css';

function Skills() {
  
  const [activeTab, setActiveTab] = useState('tech');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className='all'>
    <div className="skills-container">
      <div className="tabs">

        <div className={`tab ${activeTab === 'tech' ? 'active' : ''}`} onClick={() => handleTabChange('tech')}> Tech Skills </div>

        <div className={`tab ${activeTab === 'soft' ? 'active' : ''}`} onClick={() => handleTabChange('soft')}> Soft Skills </div>

      </div>

      <div className="tab-content">

        {/* Contenido de Tech Skills */}
        {activeTab === 'tech' && (
          <div>
            <ul>
              <li><img src='https://img.icons8.com/color/48/000000/javascript.png'></img> JavaScript </li>
              <li><img src='https://img.icons8.com/color/48/000000/react-native.png'></img> Reac.js </li>
              <li><img src='https://img.icons8.com/color/48/000000/nodejs.png'></img> Node.js </li>
              <li><img src='https://img.icons8.com/color/48/000000/redux.png'></img> Redux </li>
              <li><img src='https://img.icons8.com/color/48/000000/express.png'></img> Express </li>
              <li><img src='https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png'></img> PosgreSQL </li>
              <li><img src='https://img.icons8.com/color/48/000000/css3.png'></img> CSS </li>
              <li><img src='https://img.icons8.com/color/48/000000/html-5.png'></img> HTML </li>
              <li><img src='https://assets.stickpng.com/images/58482ee4cef1014c0b5e4a75.png'></img> Sequelize </li>
              <li><img src='https://img.icons8.com/color/48/000000/git.png'></img> Git </li>
            </ul>
          </div>
        )}



        {/* Contenido de Soft Skills */}
        {activeTab === 'soft' && (
          <div>
            <ul>
              <li>Comunicación</li>
              <li>Trabajo en equipo</li>
              <li>Resolución de problemas</li>
              <li>Creatividad</li>
              <li>Adaptabilidad</li>
              <li>Gestión del tiempo</li>
              <li>Ética profesional</li>
              <li>Aprendizaje rápido</li>
              <li>Optimista</li>
              <li>Proactivo</li>
            </ul>
          </div>
        )}

      </div>
    </div>
    </div>
  );
}

export default Skills;
