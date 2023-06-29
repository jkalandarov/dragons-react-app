//@ts-ignore
import dragonImg from "../images/dragon.png";
import { Link } from "react-router-dom";

type SmallCardProps = {
  imgUrl: string;
  name: string;
  description: string;
  url: string;
};

export default function SmallCard(props: SmallCardProps) {
  return (
    <Link to={props.url}>
      <div className="outer-container">
        <div className="avatar">
          <img
            src={
              props.imgUrl
                ? "https://www.dnd5eapi.co" + props.imgUrl
                : dragonImg
            }
            alt={props.name}
          />
        </div>
        <div className="dragon-description">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  );
}
