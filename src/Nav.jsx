function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <a href="/" className="logo">
          <img src="/Logo.png" alt="Little Lemon Logo" />
        </a>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
