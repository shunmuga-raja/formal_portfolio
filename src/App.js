import logo from './logo.svg';
import './App.css';
import Header2 from './components/header/Header2';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
    <Header2/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification/>
      <Testimonials />
    </main>
    <Footer />
    <Scrollup/>
    </>
  );
}

export default App;
