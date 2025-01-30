import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AnimatedHero from './animation/Heropage';
import  Header from './component/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './pages/About';
import Achievement from './pages/Achievement';
import Mission from './pages/Mission';
import Contact from './pages/Contact';



const App = () => {

  return (
 <>
 <Router>
      <Header />
      <Routes>
        <Route index element={<AnimatedHero />} />
        <Route path="/" element={<AnimatedHero />} />
        <Route path="/about" element={<About />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/mission" element={<Mission/>} />
        <Route path="/contact" element={<Contact/>} />
        
      </Routes>
      
    </Router>
 </>
  );
};

export default App;
