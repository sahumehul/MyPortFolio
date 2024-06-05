import './App.css';
import Hero from './componants/Hero/Hero';
import Navbar from './componants/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
      </div>
    </>
  );
}

export default App;
