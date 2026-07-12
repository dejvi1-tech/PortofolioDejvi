import { useState } from "react";
import "./App.css";
import "./index.css";
import { Navbar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Education } from "./components/sections/Education";
import { Projects } from "./components/sections/Projects";
import { Skills } from "./components/sections/Skills";
import { Languages } from "./components/sections/Languages";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
    <LanguageProvider>
      <div className="min-h-screen t-body">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main>
          <Home />
          <Stats />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Languages />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
