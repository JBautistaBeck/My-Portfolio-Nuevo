import React, { useState } from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'; 

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
            <ul className='ul-skills-tech'>
              <li><img src='https://img.icons8.com/color/48/000000/javascript.png' alt='JavaScript'></img> <b>JavaScript</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/nodejs.png' alt='Node.js'></img> <b>Node.js</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/redux.png' alt='Redux'></img> <b>Redux</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/react-native.png' alt='React.js'></img> <b>React.js</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/express.png' alt='Express'></img> <b>Express</b> </li>
              <li><img src='https://w7.pngwing.com/pngs/441/460/png-transparent-postgresql-plain-wordmark-logo-icon-thumbnail.png' alt='PosgreSQL'></img> <b>PosgreSQL</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/css3.png' alt='CSS'></img> <b>CSS</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/html-5.png' alt='HTML'></img> <b>HTML</b> </li>
              <li><img src='https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png' alt='Sequelize'></img> <b>Sequelize</b> </li>
              <li><img src='https://img.icons8.com/color/48/000000/git.png' alt='Git'></img> <b>Git</b> </li>
            </ul>
          </div>
        )}



        {/* Contenido de Soft Skills */}
        {activeTab === 'soft' && (
          <div>
            <ul className='ul-skills-soft'>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Comunicación</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Trabajo en equipo</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Resolución de problemas</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Creatividad</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Adaptabilidad</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Gestión del tiempo</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Ética profesional</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Aprendizaje rápido</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Optimista</b></li>
              <li> <FontAwesomeIcon icon={faCircleCheck} style={{color: "#1f5122",}} /> <b>Proactivo</b></li>
            </ul>
          </div>
        )}

      </div>
    </div>
    </div>
  );
}

export default Skills;
