import React from 'react';

import Facebook from '../assets/img/icons8-facebook 2.svg'
import Instagram from '../assets/img/icons8-instagram 2.svg'
import Linkedin from '../assets/img/icons8-linkedin 2.svg'
import Github from '../assets/img/icons8-github 1.svg'

function FooterContainer(props) {
  return (
    <div className="text-white bg-footer">
      <div className="py-6 flex justify-between items-center container font-thin font-source">
        <span>Tüm hakları saklıdır. <span className="font-bold">Muhammed Melih Budak</span> tarafından yapılmıştır.</span>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/profile.php?id=100009137017516">
            <img src={Facebook} alt="Facebook"/>
          </a>
          <a href="https://www.instagram.com/melih.bdk27/">
            <img src={Instagram} alt="Instagram"/>
          </a>
          <a href="https://www.linkedin.com/in/muhammed-melih-budak-292332183/">
            <img src={Linkedin} alt="Linkedin"/>
          </a>
          <a href="https://github.com/Legion64">
            <img src={Github} alt="Github"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterContainer;
