const Navbar = () => (
  <nav id="navbar">
    <a href="#" className="nav-logo">ITZFIZZ</a>
    <ul className="nav-links">
      {['Works', 'About', 'Services', 'Contact'].map(link => (
        <li key={link}><a href="#">{link}</a></li>
      ))}
    </ul>
    <button className="nav-cta">Get Started</button>
  </nav>
);

export default Navbar;
