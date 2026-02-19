import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedStrip from './components/FeaturedStrip';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navigation />
      <main>
        <Hero />
        <FeaturedStrip />
        <Portfolio />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
