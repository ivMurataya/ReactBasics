import "./card-list.styles.css";
import CardContainer from "./card-container/card-container.component";

function CardList(props) {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((element, index) => {
        return <CardContainer monster={element} />;
      })}
    </div>
  );
}

export default CardList;
