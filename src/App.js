import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/components/NavPages/About';
import Contact from '../src/components/NavPages/Contact';
import EducationPage from './components/Pages/Edu';
import HomePage from './components/Pages/HomePage';
import Nav from './components/nav';
import Footer from './components/Pages/Footer';
function App() {
  return (
    <>
   
   <BrowserRouter>
   <Nav/>
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<EducationPage />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<HomePage />} />
       
      </Routes>
      <Footer/>
    </BrowserRouter>
 
  
    </>
  );
}

export default App;
