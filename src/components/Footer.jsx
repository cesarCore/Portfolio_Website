import React from 'react';

function Footer({ profile }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="container footer-content">
        <h2>Get In Touch</h2>
        <p>
          Interested in collaborating or chatting about a project? Feel free to reach out!
        </p>

        <div className="contact-links">
          {profile.email && (
            <a href={`mailto:${profile.email}`} className="contact-link">
              Email
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
          )}
        </div>

        <p className="copyright">
          &copy; {currentYear} {profile.name}. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
