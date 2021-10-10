import React from 'react';
import Slider from "react-slick";
import {Link} from "react-router-dom";
import RightArrow from "../../assets/img/RightArrow.svg";
import LeftArrow from "../../assets/img/LeftArrow.svg";


function NextArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className}
      style={{...style}}
      onClick={onClick}
    >
      <img src={RightArrow} alt=""/>
    </div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props;
  return (
    <div
      className={className + ' right-4'}
      style={{...style}}
      onClick={onClick}
    >
      <img src={LeftArrow} alt=""/>
    </div>
  );
}

function BlogContainer(props) {
  return (
    <section id="blog">
      <div className="w-full mx-auto flex justify-center items-center flex-col">
        <h2 className="tracking-widest uppercase font-source my-12 font-source text-2xl"
            style={{letterSpacing: '.4rem'}}>Makaleler</h2>
        <div className="container">
          <Slider
            arrows={true}
            nextArrow={<NextArrow/>}
            prevArrow={<PrevArrow/>}
            slidesToShow={3}
            slidesToScroll={3}
            initialSlide={0}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]}
          >
            {[1, 2, 3, 4].map(num => (
              <div key={num}>
                <div className="mx-auto">
                  <div className="px-10">
                    <div className="relative rounded-xl overflow-hidden">
                      <div className="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-16 flex items-center pl-10">
                        <span className="text-white">Başlık</span>
                      </div>
                      <img src={'https://picsum.photos/400/600?random=' + num} className="w-full h-80 object-cover"
                           alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <span className="uppercase font-source text-lg py-10" style={{color: '#0079EE'}}>
            <Link to="/">Daha Fazlası</Link>
          </span>
      </div>
    </section>
  );
}

export default BlogContainer;
