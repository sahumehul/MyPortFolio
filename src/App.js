import './App.css';
import Hero from './componants/Hero/Hero';
import Navbar from './componants/Navbar/Navbar';
import Skill from './componants/Skills/Skill';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skill/>
      </div>
    </>
  );
}

export default App;
