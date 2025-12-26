import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" min-h-dvh bg-slate-950 text-gray-100">
      <Navbar />

      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
}

export default App;
