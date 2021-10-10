import React from 'react';

function SkillTabs(props) {
  const {tab} = props

  return (
    <div>
      {props.children.filter(item => item.props.index === tab)}
    </div>
  );
}

export default SkillTabs;
