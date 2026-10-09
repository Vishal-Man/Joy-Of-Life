import wallpaper from '../assets/wallpaper.jpg';

export default function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${wallpaper})` }}>
      <h1 className="hero__title">The Joy of Life</h1>
    </section>
  );
}
