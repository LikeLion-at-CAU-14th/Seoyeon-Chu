function Header({ setPage }) {
  return (
    <header>
      <nav>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("photo")}>Photo</button>
        <button onClick={() => setPage("about")}>About Me</button>
      </nav>
    </header>
  );
}

export default Header;