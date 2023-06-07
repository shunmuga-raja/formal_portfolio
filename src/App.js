import logo from './logo.svg';
import './App.css';
import Header2 from './components/header/Header2';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';

const App = () => {
  return (
    <>
    <Header2/>

    <main className='main'>
      <Home />
      <About />
      <Skills />
    </main>
    </>
  );
}

export default App;
