'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [selected, setSelected] = useState();
  const [path, setPath] = useState();
  const [isSubMenuShown, setShowSubMenu] = useState(false);
  const pathNow = usePathname();

  useEffect(() => {
    setPath(pathNow);
  }, [selected])


  function blendTopHeader() {
    const topHeader = document.getElementById("top-header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        topHeader.style.backgroundColor = "white";
        topHeader.style.color = "black";
        topHeader.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
      }
      else {
        topHeader.style.backgroundColor = "inherit";
        topHeader.style.color = "white";
        topHeader.style.boxShadow = "inherit";
      }
    })
  }

  blendTopHeader();

  return (
    <ul className='z-[100] text-xl font-normal'>
      <li className='inline-block p-4'>
        <a href="/" className='hover:text-gray-300'>
          Home
        </a>
      </li>
      <li className='inline-block p-4'>
        <a
          onMouseEnter={() => setShowSubMenu(true)}
          onMouseLeave={() => setShowSubMenu(false)}
          id="galleria" href="/galleria" className='hover:text-gray-300 after:content-["\f078"] after:float-right after:border-none after:font-["FontAwesome"] after:pl-6 after:font-light pt-1'>
          Galleria
        </a>
        {isSubMenuShown &&
          <div
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
            id="hidden-menu" className="absolute bg-white pr-12 py-2 text-black">
            <a href="/galleria/foto" className="block px-4 pt-2 pb-2 hover:text-gray-300">
              Foto
            </a>
            <a href="/galleria/video" className="block px-4 pt-2 pb-2 hover:text-gray-300">
              Video
            </a>
          </div>
        }
      </li>
      <li className='inline-block p-4'>
        <a href="/calendario" className='hover:text-gray-300' onClick={setSelected}>
          Calendario
        </a>
      </li>
      <li className='inline-block p-4'>
        <a href="/tesseramento" className="hover:text-gray-300">
          Tesseramento
        </a>
      </li>
      <li className='inline-block p-4'>
        <a href="/organigramma" className="hover:text-gray-300">
          Organigramma
        </a>
      </li>
      <li className='inline-block p-4'>
        <a href="/contatti" className="hover:text-gray-300">
          Contatti
        </a>
      </li>
    </ul>
  )
}