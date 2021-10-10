import React from 'react';

function TextArea(props) {
  return (
    <textarea className="h-52 resize-none bg-gray-200 py-4 px-5 rounded-2xl outline-none focus:ring-2 transition w-full" placeholder={props.name}/>
  );
}

export default TextArea;
