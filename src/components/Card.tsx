import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dragonImg from "../images/dragon.png";

export type DragonCardType = {
  name: string;
  description: string;
  imgSrc?: string;
  link?: string;
  languages?: string;
}

const DragonCard =(props: DragonCardType) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img 
        variant="top" 
        src={
          props.imgSrc 
            ? 'https://www.dnd5eapi.co' + props.imgSrc 
            : dragonImg
          } 
        />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Subtitle style={{fontSize: '12px', marginBottom: '8px'}}>Size: Huge</Card.Subtitle>
        <Card.Subtitle style={{fontSize: '12px', marginBottom: '8px'}}>Languages: {props.languages ?? "Common dragon language"}</Card.Subtitle>
        <Button variant="primary" >More info</Button>
      </Card.Body>
    </Card>
  );
}

export default DragonCard;