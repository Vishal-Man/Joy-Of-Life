const links = [
  { label: 'Our Albums', href: '#albums' },
  { label: 'Members', href: '#members' },
  { label: 'Merchandise', href: '#merchandise' },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar__logo">Logo</a>
      <nav className="navbar__links" aria-label="Main">
        {links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
        <a href="#contact" className="navbar__cta">Book Now</a>
      </nav>
    </header>
  );
}
