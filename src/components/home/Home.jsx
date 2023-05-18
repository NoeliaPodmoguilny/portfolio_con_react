import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Home = () => {

  const whiteShadow={
    'box-shadow': '10px 10px 50px 5px rgba(252,219,231,0.5)'
  }
  const center={
    'margin-top': '20vh'
  }
  const colorButton={
    'border-color': '#fff',
    'color': '#fff'
  }
  return (
    <div className="container" style={center}>
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            src="./src/assets/photo/fotonoe.png"
            alt="Portfolio"
            className="img-fluid rounded-circle"
            style={whiteShadow}
          />
        </div>
        <div className="col-md-6 text-bg-dark bg-transparent align-self-center">
          <h2>About Me</h2>
          <p>
            Front end developer, con conocimientos de Back end. Estudiante de Desarrollo de Software.
            Stack: HTML5, CSS, JAVASCRIPT, BOOTSTRAP, TAILWIND, GIT, GITHUB, SCRUM, SQL, ANGULAR, TYPESCRIPT, REACT, JAVA
          </p>
          <div className="mt-4 mb-4">
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary ms-2"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ms-2"
              style={colorButton}
            >
              Download CV
            </a>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
