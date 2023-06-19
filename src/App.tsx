import './App.css';
import { DragonCardType } from './components/Card';
import DragonList from './components/List';

const dragonsList: DragonCardType[] = [
  {
    name: 'Adult Black Dragon',
    description: 'Huge black dragon',
    languages: 'Common, Draconic',
    imgSrc: '/api/images/monsters/adult-black-dragon.png',
    link: '/api/monsters/adult-black-dragon'
  },
  {
    name: 'Adult Black Dragon',
    description: 'Huge black dragon',
    languages: 'Common, Draconic',
    imgSrc: '/api/images/monsters/adult-black-dragon.png',
    link: '/api/monsters/adult-black-dragon'
  },
  {
    name: 'Adult Black Dragon',
    description: 'Huge black dragon',
    languages: 'Common, Draconic',
    imgSrc: '/api/images/monsters/adult-black-dragon.png',
    link: '/api/monsters/adult-black-dragon'
  },
  {
    name: 'Adult Black Dragon',
    description: 'Huge black dragon',
    languages: 'Common, Draconic',
    imgSrc: '/api/images/monsters/adult-black-dragon.png',
    link: '/api/monsters/adult-black-dragon'
  },
  {
    name: 'Adult Black Dragon',
    description: 'Huge black dragon',
    languages: 'Common, Draconic',
    imgSrc: '/api/images/monsters/adult-black-dragon.png',
    link: '/api/monsters/adult-black-dragon'
  },
]

function App() {
  return (
    <DragonList dragons={dragonsList}/>
  );
}

export default App;
