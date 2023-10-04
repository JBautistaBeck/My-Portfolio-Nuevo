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
            <p>Aquí van las habilidades técnicas.</p>
            <ul>
              <li>JavaScript</li>
              <li>Reac.js</li>
              <li>Node.js</li>
              <li>Redux</li>
              <li>Express</li>
              <li>PosgreSQL</li>
              <li>Sequelize</li>
              <li>HTML</li>
              <li>CSS</li>
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
