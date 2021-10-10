import React, {useState} from 'react';
import Skill from "./Skill";

import CSS from '../../assets/img/css3.svg'
import HTML from '../../assets/img/html5.svg'
import JS from '../../assets/img/javascript.svg'
import PHP from '../../assets/img/php.svg'
import SkillTabs from "./SkillTabs";
import SkillTab from "./SkillTab";

function SkillContainer(props) {
  const tabs = [
    {
      icon: HTML,
      percent: 100,
      content: `
        <p>HTML yazılıma ilk başlayanların karşılaştığı bir dil. Bu dilde de aldığım eğitimler sayesinde hakim bir alanda olduğumu düşünüyorum.</p>
        <br>
        <span>Eğitim aldığım kişiler ve kurumlar;</span>
        <ul class="list-disc list-inside">
            <li>Siliconmade</li>
            <li>Tayfun Erbilen</li>
        </ul>
      `
    },{
      icon: CSS,
      percent: 90,
      content: `İçerik Boş`
    },{
      icon: JS,
      percent: 80,
      content: `İçerik Boş`
    },{
      icon: PHP,
      percent: 90,
      content: `İçerik Boş`
    }
  ]

  const [tab, setTab] = useState(0)

  const tabSelector = (index) => {
    setTab(index)
  }

  return (
    <section id="skills" className="flex justify-center items-center my-10">
      <div className="w-5/6 bg-primary rounded-xl p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 min-h-96 bg-white rounded-xl">
            <div className="p-5 flex gap-5 flex-col">
              {tabs.map((item, index) => (
                <Skill key={index} index={index} icon={item.icon} percent={item.percent} onClick={tabSelector} />
              ))}
            </div>
          </div>
          <div className="flex-1 bg-black bg-opacity-10 rounded-xl">
            <div className="p-6 text-gray-200 font-sora">
              <SkillTabs tab={tab}>
                {tabs.map((item, index) => (
                  <SkillTab index={index}>
                    {item.content}
                  </SkillTab>
                ))}
              </SkillTabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillContainer;
