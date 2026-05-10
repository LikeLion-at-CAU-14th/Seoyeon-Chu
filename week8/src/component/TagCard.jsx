function TagCard({ title, tags }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TagCard;