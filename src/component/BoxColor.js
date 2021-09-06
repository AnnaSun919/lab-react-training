import React from 'react';
import './BoxColor.css';

function BoxColor(props) {
  const { r, g, b } = props;

  // backgroundColor: 'rgb(255, 255, 0)';
  const color = {
    backgroundColor: `rgb(${r}, ${g}, ${b})`,
  };

  const hex =
    '#' +
    ('0' + r.toString(16)).slice(-2) +
    ('0' + g.toString(16)).slice(-2) +
    ('0' + b.toString(16)).slice(-2);

  return (
    <div className="boxcolor" style={color}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
