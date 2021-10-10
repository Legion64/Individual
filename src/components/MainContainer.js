import React from 'react';
import Button from "./Button";
import Man from "../assets/img/Man.png";

function MainContainer(props) {
  return (
    <section id="main" className="relative overflow-hidden">
      <div
        className="absolute md:left-80 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:-translate-x-1 transform">
        <div className="flex flex-col gap-20">
            <span className="block font-sora font-bold text-primary text-5xl" style={{lineHeight: '3rem'}}>Muhammed Melih
              <span className="block">Budak</span>
            </span>
          <div className="font-sora font-medium text-md w-80">
            <span className="block">Türkiyede bir Freelancer</span>
            <span className="block">Front-End & Back-End Developer</span>
          </div>
          <div className="font-sora font-medium w-40">
            <Button primary>İşe Al</Button>
          </div>
        </div>
      </div>
      <div className="absolute hidden 2xl:block lg:right-48 md:right-20 bottom-0">
        <img src={Man} alt="Man"/>
      </div>
    </section>
  );
}

export default MainContainer;
