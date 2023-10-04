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
              <li>JavaScript <img src='https://img.icons8.com/color/48/000000/javascript.png'></img></li>
              <li>Reac.js <img src='https://img.icons8.com/color/48/000000/react-native.png'></img></li>
              <li>Node.js <img src='https://img.icons8.com/color/48/000000/nodejs.png'></img></li>
              <li>Redux <img src='https://img.icons8.com/color/48/000000/redux.png'></img></li>
              <li>Express <img src='https://img.icons8.com/color/48/000000/express.png'></img></li>
              <li>PosgreSQL <img src='https://img.icons8.com/color/48/000000/javascript.png'></img></li>
              <li>Sequelize <img src='https://img.icons8.com/color/48/000000/javascript.png'></img></li>
              <li>HTML <img src='https://img.icons8.com/color/48/000000/html-5.png'></img></li>
              <li>CSS <img src='https://img.icons8.com/color/48/000000/css3.png'></img></li>
            </ul>
          </div>
        )}



        {/* Contenido de Soft Skills */}
        {activeTab === 'soft' && (
          <div>
            <p>Aquí van las habilidades blandas (soft skills).</p>
          </div>
        )}

      </div>
    </div>
    </div>
  );
}

export default Skills;
