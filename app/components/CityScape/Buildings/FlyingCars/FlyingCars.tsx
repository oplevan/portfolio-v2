// @ts-nocheck
'use client';
import { useState, useEffect } from 'react';
import './FlyingCars.scss';

type Props = {
  cars: number;
  canvasHeight: number;
};

export default function FlyingCars({ cars, canvasHeight }: Props) {
  const numCars = cars;
  const colors = ['#61FDFC', '#F22D66'];

  const [carElements, setCarElements] = useState([]);

  const generateCars = () => {
    const cars = [];

    for (let i = 0; i < numCars; i++) {
      const carStyle = {
        top: `${Math.random() * (canvasHeight - 5) + 5}px`, // Random height between 5px and canvasHeight
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 15 + 5}px`,
        height: `${Math.random() * 5 + 1}px`,
        animationDuration: `${Math.random() * 5 + 3}s`,
        backgroundColor: colors[i % colors.length], // Alternate colors
      };

      const animations = ['moveLeftToRight', 'moveRightToLeft'];
      const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

      cars.push(
        <div
          key={i}
          className={`car ${randomAnimation}`} // Assign a random animation class
          style={carStyle}
        ></div>
      );
    }

    setCarElements(cars);
  };

  useEffect(() => {
    generateCars();
  }, []); // Run only once after the initial render

  return (
    <div className='traffic-container' style={{ height: canvasHeight }}>
      {carElements}
    </div>
  );
}
