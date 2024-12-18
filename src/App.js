
import './App.css';
// import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import NavbarComponent from './components/Navbar'; // Adjust if the file name is different
import Home from './pages/Home'; // Example component
import About from './pages/About'; // Example component
import Contact from './pages/Contact'; // Example component
import Projects from './pages/Projects'; // Example component
import Skills from './pages/Skills'; // Example component
import Services from './pages/Services'; // Example component
import Experience from './pages/Experience'; // Example component




import HeaderComponent from './components/Header'; // Adjust if the file name is different


function App() {
  return (
    <>
    {/* // <Router> */}
    <NavbarComponent />
    <HeaderComponent />

    {/* <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />


      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />

    </Routes>
  </Router> */}
      </>
  );
}

export default App;
