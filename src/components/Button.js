import React from 'react';

function Button(props) {
  const isPrimary = props.primary && true

  const style = () => {
    if (isPrimary){
      return "bg-primary w-full h-14 rounded-full font-sans text-md shadow-xl font-bold uppercase text-white"
    }else{
      return "bg-white w-full h-14 rounded-full font-sans text-md shadow-xl font-bold uppercase text-black"
    }
  }

  return (
    <button className={style()}>
      {props.children}
    </button>
  );
}

export default Button;
