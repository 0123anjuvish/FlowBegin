import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../src/components/NavPages/About';
import Contact from '../src/components/NavPages/Contact';
import EducationPage from './components/Pages/Edu';
import HomePage from './components/Pages/HomePage';
import Nav from './components/nav';
import PaymentDetails from './components/Pages/PaymentDetails';
import Footer from './components/Pages/Footer';
import RegistrationForm from './components/Pages/RegistrationPortal';
import Suc from './components/Pages/Suc';
function App() {
  return (
    <>
   
   <BrowserRouter>
   <Nav/>
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/education" element={<EducationPage />}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/pay" element={<PaymentDetails />} />
        <Route path="/" element={<HomePage />} />
       <Route path="/register" element={<RegistrationForm/>} />
       <Route path="/submit" element={<Suc/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
 
  
    </>
  );
}

export default App;
