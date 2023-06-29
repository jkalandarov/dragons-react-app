import dragonImg from "../images/dragon.png";
// import '../index.css';

type SmallCardProps = {
  imgUrl: string;
  name: string;
  description: string;
}

export default function SmallCard(props: SmallCardProps) {

  return (
    <div className="outer-container">
      <div className="avatar">
        <img src={
          props.imgUrl 
          ? 'https://www.dnd5eapi.co' + props.imgUrl
          : dragonImg
        } alt={props.name} />
      </div>
      <div className="dragon-description">
        <h4>{props.name}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  )
}