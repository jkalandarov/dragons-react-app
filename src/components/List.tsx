import DragonCard from "./Card";
import { DragonCardType } from "./Card";

type DragonsList = {
  dragons: DragonCardType[];
}

export const DragonList = (props: DragonsList) => {
  return (
    <ul>
      {
        props.dragons.map(dragon => { 
        return <DragonCard
          name={dragon.name}
          description={dragon.description}
          imgSrc={dragon.imgSrc}
          key={dragon.name}
          languages={dragon.languages}
          link={dragon.link}
        /> 
      })
      }
    </ul>
  )
}