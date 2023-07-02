
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/navbar/Navbar';
import {Home} from './components/home/Home';
import {Projects} from './components/projects/Projects';
import {Contact} from './components/contact/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


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

