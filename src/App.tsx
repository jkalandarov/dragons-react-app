import React from 'react';
import './App.css';
import DragonCard from './components/Card';

function App() {
  return (
    <DragonCard 
      name='Some dragon' 
      description='Some description' 
      imgSrc='/api/images/monsters/adult-black-dragon.png'
    />
  );
}

export default App;
