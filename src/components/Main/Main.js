import React from 'react';
import { animals } from '../../data';
import Animal from '../Animal/Animal';
import './Main.css';

export default function Main() {
  return <main>
    {animals.map((animal) => (
      <Animal key={animal.name} name={animal.name} type={animal.type} />
    ))}    
  </main>;
}
