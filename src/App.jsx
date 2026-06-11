import { LangProvider } from "./context/LangContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import About from "./components/About";
import Services from "./components/Services";
import News from "./components/News";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <About />
        <Services />
        <News />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}