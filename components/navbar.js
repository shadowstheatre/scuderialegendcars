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

 // function changeSelected() {
 //  const path = usePathname();
 //  console.log(path);
 // }

 return (
  <ul className='p-4'>
   <li className='inline-block text-white'>
    <a href="/" className='p-4 hover:text-gray'>
     Home
    </a>
   </li>
   <a href="/Galleria" className='p-4 hover:text-gray' onClick={setSelected}>
    <li className='inline-block p-4 text-white hover:text-gray'>
     Galleria
    </li>
   </a>
   <li className='inline-block p-4 text-white hover:text-gray'>
    Tesseramento
   </li>
   <li className='inline-block p-4 text-white hover:text-gray'>
    Organigramma
   </li>
   <li className='inline-block p-4 text-white hover:text-gray'>
    Contatti
   </li>
   {/* <ul className="space-x-4">
     {pagine.map((pagina) => (
      <li className="inline-block" key={pagina}><a href={`/${pagina}`}>{pagina}</a></li>
     ))}
    </ul> */}
  </ul>
 )
}