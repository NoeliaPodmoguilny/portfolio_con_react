import 'bootstrap/dist/css/bootstrap.min.css';
import { GitHubLink, LinkedInLink, CVLink, Skills, Image, Title } from './';
import { useEffect, useState } from 'react';


export const Home = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const shouldRender = windowWidth <= 991;

    return (
        <div className='container'>
            <Title />
            <div className={`row ${shouldRender ? 'mt-4' : ''}`}>
                <Image />
                <div className="col-md-6 bg-transparent align-self-center">
                    <Skills />
                    <div className="text-center mt-4 mb-4 animate__animated animate__fadeIn">
                        <GitHubLink />
                        <LinkedInLink />
                        <CVLink />
                    </div>
                </div>
            </div>
        </div>
    );
};


