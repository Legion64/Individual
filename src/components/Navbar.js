import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="absolute px-16 md:px-28 py-14 w-full">
      <div className="flex justify-between items-baseline">
        <div className="text-primary text-xl font-bold">Mb;dk</div>
        <div className="flex gap-6 text-sm hidden md:flex">
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              Ana Sayfa
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              Eğitim Bilgileri
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              Makaleler
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              Sosyal Ağlar
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              Beceriler
            </div>
          </Link>
          <Link to="/">
            <div className="p-3 rounded-xl transition hover:bg-gray-900 hover:bg-opacity-10">
              İletişim Bilgileri
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
