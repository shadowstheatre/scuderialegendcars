'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {

  const [selected, setSelected] = useState();
  const [path, setPath] = useState();
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
    <ul className='z-[100] text-xl'>
      <li className='inline-block p-4'>
        <a href="/" className='hover:text-gray-300'>
          Home
        </a>
      </li>
      <li className='inline-block p-4'>
        <a href="/galleria" className='hover:text-gray-300' onClick={setSelected}>
          Galleria
        </a>
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