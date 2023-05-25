import logo from './logo.svg';
import './App.css';
import Header2 from './components/header/Header2';
import Home from './components/home/Home';

const App = () => {
  return (
    <>
    <Header2/>

    <main className='main'>
      <Home />
    </main>
    </>
  );
}

export default App;
