function Card({ id, title, body }) {
  return (
    <div style={{ border: "2px solid green", padding: "10px", margin: "8px",borderRadius:"10px" }}>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default Card;
