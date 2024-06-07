import './App.css';
import ContactMe from './componants/Contactme/ContactMe';
import Hero from './componants/Hero/Hero';
import Navbar from './componants/Navbar/Navbar';
import Skill from './componants/Skills/Skill';
import WorkExp from './componants/WorkExp/WorkExp';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
        <Hero/>
        <Skill/>
        <WorkExp/>
        <ContactMe/>
      </div>
    </>
  );
}

export default App;
