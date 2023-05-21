import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Carga los datos del JSON
    const fetchData = async () => {
      try {
        const response = await fetch('./src/projectsData.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error al cargar los datos de los proyectos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-4">
        {projects.map((project) => (
          <div key={project.nombre} className="col-lg-4 col-md-6 mb-4">
            <div className="card bg-transparent cardProjects">
              <img
                src={project.imagen}
                className="card-img-top"
                alt={project.nombre}
              />
              <div className="card-body">
                <h5 className="card-title title">{project.nombre}</h5>
                <p className="card-text subtitle">{project.descripcion}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btnCV"
                >
                  View...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
