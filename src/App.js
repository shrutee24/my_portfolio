import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import NavbarComponent from './components/Navbar'; // Adjust if the file name is different
import Home from './pages/Home'; // Example component
import About from './pages/About'; // Example component
import Contact from './pages/Contact'; // Example component

function App() {
  return (
    <Router>
    <NavbarComponent />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
  );
}

export default App;
