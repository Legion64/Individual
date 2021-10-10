import React from 'react';

import DeuLogo from '../../assets/img/deu-logo.png'
import SiliconLogo from '../../assets/img/siliconmade.png'

function EducationContainer(props) {
  return (
    <section id="education">
      <div className="w-full mx-auto flex justify-center items-center flex-col font-source text-lg">
        <h2 className="tracking-widest uppercase font-source my-12 font-source text-2xl"
            style={{letterSpacing: '.4rem'}}>Eğitimler</h2>
        <div className="pb-20 flex gap-10 items-center md:flex flex-wrap justify-center md: justify-start">
          <div className="card rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <img src={DeuLogo} className="h-56 w-full object-contain p-4" alt=""/>
            <div className="p-4">
              <span className="font-bold">Dokuz Eylül</span>
              <p className="py-6">Endüstri ve otomasyon, Mekatronik bölümünde halen daha okumaktayım.</p>
            </div>
          </div>
          <div className="card rounded-3xl overflow-hidden shadow-xl ring-1 ring-gray-200">
            <img src={SiliconLogo} className="h-56 w-full object-contain p-4" style={{background: '#202844'}} alt=""/>
            <div className="p-4">
              <span className="font-bold">Siliconmade Academy</span>
              <p className="py-6">Endüstri ve otomasyon, Mekatronik bölümünde halen daha okumaktayım.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationContainer;
