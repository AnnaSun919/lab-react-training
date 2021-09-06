import React from 'react';
import visa from './img/visa.png';
import master from './img/master-card.svg';
import './CreditCard.css';

function CreditCard(props) {
  // const { expirationMonth, expirationYear } = props;
  const style = {
    backgroundColor: props.bgColor,
    color: props.color,
  };

  let img = '';
  if (props.type === 'Visa') {
    img = visa;
  } else {
    img = master;
  }

  const month = ('0' + props.expirationMonth.toString(16)).slice(-2);

  const hidenumber = props.number.slice(-4).padStart(props.number.length, '•');

  let numberWithSpace = '';

  for (let i = 0; i < hidenumber.length; i++) {
    if (i > 0 && i % 4 === 0) {
      numberWithSpace += ' ' + hidenumber[i];
    } else {
      numberWithSpace += hidenumber[i];
    }
  }

  return (
    <>
      <div className="creditCard" style={style}>
        <img src={img} alt="pic" />
        <div className="cardNumber">{numberWithSpace}</div>
        <p>
          Expires {month}/{props.expirationYear} {props.bank}
          <br />
          {props.owner}
        </p>
      </div>
    </>
  );
}

export default CreditCard;
