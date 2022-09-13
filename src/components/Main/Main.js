import React from 'react';
import { animals } from '../../data';
import Animal from '../Animal/Animal';
import './Main.css';
import background from '../../background.png'; 

export default function Main() {
  return <main style={{ backgroundImage: `url(${background})` }}>
    
    {animals.map((animal) => (
      <Animal key={animal.name}
        name={animal.name}
        type={animal.type}
        top={animal.top}
        left={animal.left}
        says={animal.says}
      />
    ))}    
  </main>;
}
