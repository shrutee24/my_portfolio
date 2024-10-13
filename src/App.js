import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import NavbarComponent from './Navbar'; // Adjust if the file name is different
import Home from './Home'; // Example component
import About from './About'; // Example component
import Contact from './Contact'; // Example component

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
