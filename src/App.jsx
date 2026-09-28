import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Volunteering from "./components/Volunteering";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.scss";

function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <Header />
      <a className="skip-link" href="#about">Skip to content</a>

      <main className="page">
        <Hero />
        <About />
        <Projects />
        <Volunteering />
        <Education />
        <Interests />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
