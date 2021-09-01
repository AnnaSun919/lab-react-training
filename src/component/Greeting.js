import React from 'react';

function Greetings(props) {
  let text = '';
  if (props.lang == 'de') {
    text = 'Hallo';
  } else if (props.lang == 'en') {
    text = 'hello';
  } else if (props.lang == 'es') {
    text = 'hola';
  } else if (props.lang == 'fr') {
    text = 'Bonjour';
  }

  return (
    <div>
      {text}
      {props.children}
    </div>
  );
}

export default Greetings;
