export type DragonCardType = {
  name: string;
  description: string;
  imgUrl?: string;
  link?: string;
  languages?: string;
};

const DragonCard = (props: DragonCardType) => {
  return (
    <div className="main-content-container">
      <div className="img-container">
        <img src={props.imgUrl} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <div className="content-body">
        <div className="content-description">{props.description}</div>
      </div>
      <div className="dragon-stats">
        <span>Size: </span>
        <span>Type: </span>
        <span>Armor: </span>
        <ul>
          <p>Speed</p>
          <li>Blindsight: </li>
          <li>Darkvision: </li>
          <li>Passive perception: </li>
        </ul>
        <span>Strength: </span>
        <span>Wisdom: </span>
        <span>Charisma: </span>
        <ul>
          <p>Senses</p>
          <li>Blindsight: </li>
          <li>Darkvision: </li>
          <li>Passive perception: </li>
        </ul>
        <ul>
          <p>Special abilities</p>
          <li>Blindsight: </li>
          <li>Darkvision: </li>
          <li>Passive perception: </li>
        </ul>
        <ul>
          <p>Legendary actions</p>
          <li>Blindsight: </li>
          <li>Darkvision: </li>
          <li>Passive perception: </li>
        </ul>
      </div>
    </div>
  );
};

export default DragonCard;
