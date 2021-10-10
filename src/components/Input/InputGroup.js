import React from 'react';

function InputGroup(props) {
  return (
    <div className="flex gap-10 justify-between w-full">
      {props.children}
    </div>
  );
}

export default InputGroup;
