import React from 'react';

function IdCard(props) {
  return (
    <div>
      Last Name :{props.lastName}
      First name : {props.firstName}
      Gender :{props.gender}
      Height : {props.height}
      Birth : {props.birth}
      Picture : <img src={props.picture} alt="pic" />
    </div>
  );
}

export default IdCard;
