function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div className="image-content">
          <img src="/lemon-dessert.jpg" alt="Bruschetta" />
        </div>
      </div>
    </header>
  );
}

export default Header;
