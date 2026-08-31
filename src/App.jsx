import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <main className="page">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Interests />
      </main>

      <Footer />
    </>
  );
}

export default App;