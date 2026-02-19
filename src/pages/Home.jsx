import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>
     <Navbar />
      <Hero /> 
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default Home;
