import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
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
        <Education />
        <Interests />
      </main>

      <Footer />
    </>
  );
}

export default App;