import React from 'react';

function Random(props) {
  const number = Math.floor(Math.random() * props.max) + props.min;

  return (
    <div>
      Random value between {props.min} & {props.max} = {number}
    </div>
  );
}

export default Random;
