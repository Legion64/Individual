import React from 'react';
import SkillBar from "./SkillBar";

function Skill(props) {
  const {onClick, index} = props

  return (
    <div className="p-4 rounded-xl cursor-pointer flex items-center odd:bg-black odd:bg-opacity-5 ring-1 ring-gray-300" onClick={() => onClick(index)}>
      <div className="h-10 w-10 mx-6">
        <img src={props.icon} className="w-full" alt=""/>
      </div>
      <SkillBar percent={props.percent} />
    </div>
  );
}

export default Skill;
