import React from 'react';

function Input(props) {
  const classes = props.classNames + " py-4 px-5 rounded-2xl outline-none focus:ring-2 transition w-full"
  return (
    <input type={props.type} className={classes} placeholder={props.name}/>
  );
}

export default Input;
