import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companylogo from "./components/CompanyLogo";
import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Form from "./components/Form";
import Mission from "./components/Mission";
import Partener from "./components/Partener";
import Footer from './components/Footer';

function Myapp() {
 
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Companylogo />
      <Cards />
      <Dashboard />
      <Features  />
      <Mission />
      <Partener />
      <Form />
      <Footer />
      
     </div>
  );
}

export default Myapp;
