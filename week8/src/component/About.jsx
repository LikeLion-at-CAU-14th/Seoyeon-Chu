import Header from "./Header";
import TagCard from "./TagCard";

function About({ setPage }) {
  return (
    <>
      <Header setPage={setPage} />

      <main className="about-container">
        <p className="intro">
          안녕하세요, 중앙대학교 🦁 14기 FE 추서연입니다.
        </p>

        <TagCard
          title="Tech"
          tags={["Python", "C++", "HTML", "CSS", "JavaScript"]}
        />

        <TagCard
          title="Hobby"
          tags={[
            "Sleeping",
            "Taking photos",
            "Cafe studying",
            "Listening to music",
            "Watching Muck-bang",
          ]}
        />

        <TagCard
          title="Favorites"
          tags={["The Weeknd", "검정치마", "The 1975"]}
        />
      </main>
    </>
  );
}

export default About;