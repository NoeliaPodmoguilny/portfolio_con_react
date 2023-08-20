import 'bootstrap/dist/css/bootstrap.min.css';
import { GitHubLink, LinkedInLink, CVLink, Skills, Image, Title } from './';


export const Home = () => {

    return (
        <div className="container">
            <Title />
            <div className=" row">
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


