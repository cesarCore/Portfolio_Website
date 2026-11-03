import React from 'react';

function Header({ profile }) {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="navbar">
          <span className="logo">{profile.name}</span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section id="about" className="about-hero">
          <p className="role-badge">{profile.role}</p>
          <h1>Hi, I&apos;m {profile.name}</h1>
          <p className="about-description">{profile.aboutMe}</p>
        </section>
      </div>
    </header>
  );
}

export default Header;
