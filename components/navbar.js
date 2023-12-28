'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [selected, setSelected] = useState();
  const [path, setPath] = useState();
  const pathNow = usePathname();

  useEffect(() => {
    setPath(pathNow);
    console.log(path + 'useEffect');
  }, [selected])

  console.log(usePathname());

  function blendTopHeader() {
    const topHeader = document.getElementById("top-header");
    console.log(topHeader);
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

  // function changeSelected() {
  //  const path = usePathname();
  //  console.log(path);
  // }

  return (
    <ul className='z-[100] text-xl'>
      <li className='inline-block'>
        <a href="/" className='p-4 hover:text-gray'>
          Home
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/Galleria" className='p-4 hover:text-gray' onClick={setSelected}>
          Galleria
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/Tesseramento">
          Tesseramento
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/Organigramma">
          Organigramma
        </a>
      </li>
      <li className='inline-block p-4 hover:text-gray'>
        <a href="/Contatti">
          Contatti
        </a>
      </li>
      {/* <ul className="space-x-4">
     {pagine.map((pagina) => (
      <li className="inline-block" key={pagina}><a href={`/${pagina}`}>{pagina}</a></li>
     ))}
    </ul> */}
    </ul>
  )
}