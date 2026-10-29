import Header from "./Header";

function Photo({ setPage }) {
  return (
    <>
      <Header setPage={setPage} />

      <main className="photo-container">
        <div className="photo-card">
          <img src="/붉은악마사진.jpg" alt="photo" />
        </div>
      </main>
    </>
  );
}

export default Photo;