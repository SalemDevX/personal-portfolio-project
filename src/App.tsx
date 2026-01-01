import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className=" min-h-dvh bg-slate-950 text-gray-100">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
