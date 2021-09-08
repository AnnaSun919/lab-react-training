import React from 'react';

function NumbersTable(props) {
  let number = [];
  let style = { background: 'white' };

  for (let i = 0; i < props.limit; i++) {
    if (i % 2 == 0) {
      number.push({});
      style = { background: 'white' };
    } else {
      number.push(i);
      style = { background: 'red' };
    }
    console.log(style);
  }

  return (
    <div>
      <li>{number}</li>
    </div>
  );
}

export default NumbersTable;
