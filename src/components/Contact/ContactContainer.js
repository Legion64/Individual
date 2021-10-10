import React from 'react';
import Input from "../Input/Input";
import InputGroup from "../Input/InputGroup";
import TextArea from "../Input/TextArea";
import MarkerIcon from '../../assets/img/gps.png'

import {MapContainer, Marker, TileLayer} from "react-leaflet";
import {divIcon} from "leaflet";
import {renderToStaticMarkup} from "react-dom/server";

function ContactContainer(props) {
  const pos = [38.4145, 27.1434]

  const MarkerPin = () => {
    return divIcon({
      html: renderToStaticMarkup(
        <img src={MarkerIcon} alt="Marker" height={20} width={20}/>
      )
    })
  }

  return (
    <section className="bg-primary flex justify-center items-center flex-col">
      <h2 className="tracking-widest text-white uppercase font-source py-12 font-source text-2xl"
          style={{letterSpacing: '.4rem'}}>İletişim</h2>
      <div className="container bg-white p-16 rounded-2xl flex-col lg:flex-row shadow-2xl flex gap-20 mb-16">
        <div className="flex-1 flex gap-x-10 gap-y-5 flex-wrap">
          <InputGroup>
            <Input name="Adınız" type="text" classNames="bg-gray-200" />
            <Input name="Soyadınız" type="text" classNames="bg-gray-200" />
          </InputGroup>
          <Input type="text" name="Telefon Numaranız" classNames="bg-gray-200" />
          <Input type="text" name="Websiteniz" classNames="bg-gray-200" />
          <TextArea name="Projenizi Detaylandırın" />
          <Input type="submit" classNames="bg-primary text-white uppercase font-bold text-sm" />
        </div>
        <div className="flex-1">
          <div className="rounded-2xl overflow-hidden h-1/2">
            <MapContainer center={pos} zoom={10} scrollWheelZoom={true} className="h-full">
              <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={pos} icon={MarkerPin()} />
            </MapContainer>
          </div>
          <div className="py-5">
            <div className="py-4">
              <span className="block font-bold">Cep Telefonu</span>
              <span>+90 (505) 666 03 03</span>
            </div>
            <div className="py-4">
              <span className="block font-bold">Adres</span>
              <span>Aydınlıkevler Mh. 6792 Sk. Çiğli / İzmir</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactContainer;
