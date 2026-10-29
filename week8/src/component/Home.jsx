function Home({ setPage }) {
  return (
    <div className="container">
      <div className="profile-circle"></div>

      <h1>Chu Seoyeon</h1>
      <p className="subtitle">Welcome to my portfolio</p>

      <nav className="menu">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("photo")}>Photo</button>
        <button onClick={() => setPage("about")}>About Me</button>
      </nav>

      <p className="footer-text">✦ Student · Chung-ang · Frontend ✦</p>
    </div>
  );
}

export default Home;