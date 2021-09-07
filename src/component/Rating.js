import React from 'react';

function Rating(props) {
  let star = [];

  const rating = Math.round(props.children);

  for (let i = 0; i < 5; i++) {
    if (rating > i) {
      star.push('★');
    } else {
      star.push('☆');
    }
  }

  return <div> {star}</div>;
}

export default Rating;
