import React, { useState } from 'react';

function LikeButton() {
  const [count, updateCount] = useState(0);

  const handleClick = () => {
    updateCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleClick}> {count} Like</button>
    </div>
  );
}

export default LikeButton;
