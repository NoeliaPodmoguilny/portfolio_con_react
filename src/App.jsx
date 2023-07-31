import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar, Home, Projects, Contact} from './components/index';


export const App = () => {
    return (
        <Router>
        <Navbar />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

