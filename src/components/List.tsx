import { DragonCardType } from "./Card";
import { Row } from "react-bootstrap";
import SmallCard from "./SmallCard";

type DragonsList = {
  dragons: DragonCardType[];
};

const DragonList = (props: DragonsList) => {
  return (
    <Row>
      {props.dragons.map((dragon) => (
        <SmallCard
          name={dragon.name}
          description={dragon.description}
          imgUrl={dragon.imgSrc!}
          key={dragon.name}
          url={dragon.link!}
        />
      ))}
    </Row>
  );
};

export default DragonList;
