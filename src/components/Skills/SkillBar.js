import React from 'react';

function SkillBar(props) {
  const style = () => {
    if (props.percent < 0)
      return 0
    else if (props.percent > 100)
      return 100
    return props.percent
  }

  return (
    <div className="relative block w-full h-3 rounded-full bg-gray-300">
      <div className="absolute rounded-full h-full bg-primary" style={{width: style() + '%'}} />
    </div>
  );
}

export default SkillBar;
