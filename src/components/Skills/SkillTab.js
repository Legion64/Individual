import React from 'react';

function SkillTab(props) {
  return (
    <div dangerouslySetInnerHTML={{__html: props.children}} />
  );
}

export default SkillTab;
