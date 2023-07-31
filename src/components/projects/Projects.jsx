import React, { useState, useEffect } from 'react';
import { ItemsProjects } from './ItemsProjects';

export const Projects = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projectsData.json');
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                // otro component para manejar el erro
                console.error('Error al cargar los datos de los proyectos:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row mt-4 justify-content-center">
                <ItemsProjects projects={projects}/>
            </div>
        </div>
    );
};

