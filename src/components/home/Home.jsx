
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {

    return (
        <div className="container">
            <div className='d-flex justify-content-center mt-4'>
                <h1 className='bg-transparent mainTitle'><span className='redColor'>{'<'}</span><span className='lightBlueColor'>Front-EnD</span>eveloper/<span className='redColor'>{'>'}</span></h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="/assets/pic.png"
                        alt="Foto de Noelia"
                        className="photo"
                    />
                </div>
                <div className="col-md-6 bg-transparent align-self-center">
                    <p className='text-center lightColor'>
                        <span className='fs2'>HTML5</span> <span className='fs3'>CSS</span> <span className='fs1'>JAVASCRIPT</span> <span className='fs2'>BOOTSTRAP</span> <span className='fs3'>TAILWIND</span> <span className='fs2'>GIT</span> <span className='fs3'>GITHUB</span> <span className='fs2'>SCRUM</span> <span className='fs1'>SQL</span> <span className='fs2'>ANGULAR TYPESCRIPT</span> <span className='fs1'>REACT</span><span className='fs3'>JAVA</span>
                    </p>
                    <div className="text-center mt-4 mb-4">
                        <a
                        href="https://github.com/NoePodmoguilny"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn subtitle btnRed"
                        > GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/npodmoguilny/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn subtitle ms-2 btnRed"
                        > LinkedIn
                        </a>
                        <a
                            href="/assets/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn subtitle ms-2 btnCV"
                        > Download CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


