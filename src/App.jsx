import React from 'react';
import Header from './components/Header.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import Footer from './components/Footer.jsx';
import { profileData, projectsData } from './data/projectsData.js';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      {/* About Me Header */}
      <Header profile={profileData} />

      {/* Main Projects Section */}
      <main id="projects" className="projects-section container">
        <div className="section-heading">
          <h2>My Projects</h2>
          <p>Explore my recent work, watch project demos, and inspect the source code.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Contact Footer */}
      <Footer profile={profileData} />
    </div>
  );
}

export default App;
