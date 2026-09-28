function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          Kahoot!
        </div>

        <div className="nav-main-links">
          <a href="#home">HOME</a>
          <a href="#social">Social Gatherings</a>
          <a href="#kids">Learning for Kids</a>
          <a href="#study">Study</a>
          <a href="#pricing">Plans & Pricing</a>
        </div>

        <div className="nav-actions">
          <a href="#explore">Explore Content</a>
          <a href="#join">Join</a>

          <button className="start-btn">
            Start for FREE
          </button>

          <button className="login-btn">
            Log in
          </button>

          <button className="language-btn">
            🌐 EN
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;