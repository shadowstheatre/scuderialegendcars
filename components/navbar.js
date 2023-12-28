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
      }
      else {
        topHeader.style.backgroundColor = "inherit";
        topHeader.style.color = "white";
      }
    })
  }

  blendTopHeader();

  return (
    <ul className='z-[100] text-xl'>
      <li className='inline-block hover:text-gray'>
        <a href="/" className='p-4'>
          Home
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/galleria" className='p-4 hover:text-gray' onClick={setSelected}>
          Galleria
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/calendario" className='p-4 hover:text-gray' onClick={setSelected}>
          Calendario
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/tesseramento">
          Tesseramento
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/organigramma">
          Organigramma
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/contatti">
          Contatti
        </a>
      </li>
    </ul>
  )
}