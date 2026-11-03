import React from 'react';

/**
 * Helper that converts a standard YouTube URL (watch?v=... or youtu.be/...)
 * into an embeddable YouTube URL (youtube.com/embed/...) so participants
 * can paste any YouTube link into projectsData.js.
 */
function getYouTubeEmbedUrl(url) {
  if (!url) return '';

  try {
    const parsedUrl = new URL(url);

    // Standard watch link: https://www.youtube.com/watch?v=VIDEO_ID
    if (parsedUrl.hostname.includes('youtube.com')) {
      if (parsedUrl.pathname.startsWith('/embed/')) {
        return url;
      }
      const videoId = parsedUrl.searchParams.get('v');
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    // Shortened share link: https://youtu.be/VIDEO_ID
    if (parsedUrl.hostname === 'youtu.be') {
      const videoId = parsedUrl.pathname.slice(1);
      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }
  } catch {
    // Return original string if URL parsing fails
    return url;
  }

  return url;
}

function ProjectCard({ project }) {
  const embedUrl = getYouTubeEmbedUrl(project.videoUrl);

  return (
    <article className="project-card">
      <div className="video-container">
        {embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${project.title} Demo Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="video-placeholder">No Demo Video Provided</div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <a
          href={project.repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="repo-button"
        >
          View Repository &rarr;
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;
