import React, { useState } from 'react';

function Carosel(props) {
  const [num, updateNum] = useState(0);
  const img = props.imgs[num];

  const handleLeft = (direction) => {
    if (direction === 'Right' && num === 3) {
      updateNum(0);
    } else if (direction === 'Right') {
      updateNum(num + 1);
    } else if (direction === 'Left' && num === 0) {
      updateNum(3);
    } else if (direction === 'Left') {
      updateNum(num - 1);
    }
  };
  console.log(num);
  return (
    <div>
      <button onClick={() => handleLeft('Left')}>Left</button>
      <img src={img} alt="pic" />

      <button onClick={() => handleLeft('Right')}>Right</button>
    </div>
  );
}

export default Carosel;
