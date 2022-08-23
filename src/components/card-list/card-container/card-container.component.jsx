import "./card-containter.styles.css";

function CardContainer({ monster }) {
  const { id, email, name } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&sixe=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default CardContainer;
