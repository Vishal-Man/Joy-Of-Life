import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Albums from './components/Albums.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Albums />
      </main>
      <Footer />
    </>
  );
}
