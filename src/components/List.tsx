import DragonCard from "./Card";
import { DragonCardType } from "./Card";
import { Row } from "react-bootstrap";

type DragonsList = {
  dragons: DragonCardType[];
};

const DragonList = (props: DragonsList) => {
  return (
    <Row>
      {props.dragons.map((dragon) => (
        <DragonCard
          name={dragon.name}
          description={dragon.description}
          imgSrc={dragon.imgSrc}
          key={dragon.name}
          languages={dragon.languages}
          link={dragon.link}
        />
      ))}
    </Row>
  );
};

export default DragonList;
