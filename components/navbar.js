'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {

  const pathNow = usePathname();
  const isMobile = window.innerWidth < 769 ? true : false;
  const [scrolled, setScrolled] = useState(false);
  const [isSubMenuShown, setShowSubMenu] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  function blendTopHeader() {
    const topHeader = document.getElementById("top-header");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        setScrolled(true);
        topHeader.style.backgroundColor = "white";
        topHeader.style.color = "black";
        topHeader.style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.75)";
      } else {
        setScrolled(false);
        topHeader.style.backgroundColor = "initial";
        topHeader.style.color = "white";
        topHeader.style.boxShadow = "initial";
      }
    })
  }
  blendTopHeader();


  if (!isMobile) {
    return (
      <ul className='md:block z-[100] text-xl font-normal'>
        <li className='inline-block p-4'>
          <a href="/" className={`hover:text-gray-300 ${pathNow == '/' ? 'active' : ''}`}>
            Home
          </a>
        </li>
        <li className='inline-block p-4'>
          <a
            onMouseEnter={() => setShowSubMenu(true)}
            onMouseLeave={() => setShowSubMenu(false)}
            id="galleria" href="/galleria" className={`hover:text-gray-300 after:float-right after:border-none after:font-["FontAwesome"] after:pl-6 after:font-light pt-1 ${pathNow === '/galleria' ? 'active' : ''}`}>
            Galleria
          </a>
          {isSubMenuShown &&
            <div
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}
              id="hidden-menu" className="absolute bg-white pr-12 py-2 text-black shadow">
              <div className="px-4 pt-2 pb-2">
                <a href="/galleria/foto" className={`block px-[5px] py-[2px] hover:text-gray-300 ${pathNow === "/galleria/foto" ? 'active' : ''}`}>
                  Foto
                </a>
                <a href="/galleria/video" className={`block px-[5px] py-[2px] hover:text-gray-300 ${pathNow == "/galleria/video" ? 'active' : ''}`}>
                  Video
                </a>

              </div>
            </div>
          }
        </li>
        <li className='inline-block p-4'>
          <a href="/calendario" className={`hover:text-gray-300 ${pathNow == '/calendario' ? 'active' : ''}`}>
            Calendario
          </a>
        </li>
        <li className='inline-block p-4'>
          <a href="/tesseramento" className={`hover:text-gray-300 ${pathNow == '/tesseramento' ? 'active' : ''}`}>
            Tesseramento
          </a>
        </li>
        <li className='inline-block p-4'>
          <a href="/organigramma" className={`hover:text-gray-300 ${pathNow == '/organigramma' ? 'active' : ''}`}>
            Organigramma
          </a>
        </li>
        <li className='inline-block p-4'>
          <a href="/contatti" className={`hover:text-gray-300 ${pathNow == '/contatti' ? 'active' : ''}`}>
            Contatti
          </a>
        </li>
      </ul>
    )
  } else {
    return (
      <>
        <div id="hm" className="flex flex-col justify-between ml-auto mt-3 mr-3 bg-red w-[20px] h-[15px] z-50" onClick={isMobileMenuOpen ? () => setMobileMenuOpen(false) : () => setMobileMenuOpen(true)}>
          <div className={`border-t-2 ${(scrolled || isMobileMenuOpen) ? 'border-t-black' : ''} ${isMobileMenuOpen ? 'close-button' : ''}`}></div>
          <div className={`border-t-2 ${(scrolled || isMobileMenuOpen) ? 'border-t-black' : ''} ${isMobileMenuOpen ? 'close-button' : ''}`}></div>
          <div className={`border-t-2 ${(scrolled || isMobileMenuOpen) ? 'border-t-black' : ''} ${isMobileMenuOpen ? 'close-button' : ''}`}></div>
        </div>
        <ul className={`absolute right-0 h-screen w-[70%] text-black text-2xl bg-white z-40 ${isMobileMenuOpen ? 'open' : 'hidden'}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/galleria">Galleria</a>
          </li>
          <li>
            <a href="/calendario">Calendario</a>
          </li>
          <li>
            <a href="/tesseramento">Tesseramento</a>
          </li>
          <li>
            <a href="/organigramma">Organigramma</a>
          </li>
          <li>
            <a href="/contatti">Contatti</a>
          </li>
        </ul>
      </>
    )
  }
}
