import React, { useState } from 'react';
import './Dice.css';

function Dice() {
  const [img, updateImg] = useState(
    `${process.env.PUBLIC_URL}/img/dice${Math.floor(Math.random() * 6) + 1}.png`
  );

  const handleClick = () => {
    setTimeout(() => {
      updateImg(`${process.env.PUBLIC_URL}/img/dice-empty.png`);
    }, 1);

    setTimeout(() => {
      updateImg(
        `${process.env.PUBLIC_URL}/img/dice${
          Math.floor(Math.random() * 6) + 1
        }.png`
      );
    }, 100);

    console.log(img);
  };

  return (
    <div>
      <img onClick={handleClick} className="diceImg" src={img} alt="pic" />
    </div>
  );
}

export default Dice;
