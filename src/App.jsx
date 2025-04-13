import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import SkillSet from "./Components/Skill";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <SkillSet />
            <Service />
            <Contact />
            <About />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skill" element={<SkillSet />} />
      </Routes>
    </>
  );
}

export default App;
