import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Services from './pages/Services';
import Experience from './pages/Experience';
import HeaderComponent from './components/Header';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <HeaderComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
