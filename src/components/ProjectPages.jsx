import React from 'react';

const ProjectsPage = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A web app built using React that helps manage tasks and deadlines.',
      image: 'src/assets/train-8239077_640.jpg',
      link: '#'
    },
    {
      title: 'Project 2',
      description: 'An interactive portfolio showcasing my design and web development skills.',
      image: 'src/assets/photo_2.jpg',
      link: '#'
    },
    {
      title: 'Project 3',
      description: 'A fully responsive e-commerce website built with Next.js and Tailwind CSS.',
      image: 'src/assets/omo.jpeg',
      link: '#'
    }
  ];

  return (
    <section className="projects">
      <div className="projects-content">
        <h2 className="projects-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="project-link">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
