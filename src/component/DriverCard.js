import React from 'react';
import Rating from './Rating';
import './DriverCard.css';

function DriverCard(props) {
  return (
    <div className="DriverCard">
      <div className="infoBox">
        <div className="image">
          <img src={props.img} alt="pic" />
        </div>
        <div className="info">
          <p>
            {props.name}
            <Rating children={props.rating} />
          </p>
          {props.car.model} - {props.car.licensePlate}
        </div>
      </div>
    </div>
  );
}

export default DriverCard;
