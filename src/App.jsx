import Navbar from './Components/Navbar';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Hero from './Components/Hero'
import SkillSet from './Components/Skill';

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <SkillSet/>
      <Service/>
      <Contact/>
      <About/>
    </>
  );
}

export default App;
