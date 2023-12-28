'use client'

import { Parallax } from 'react-parallax';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function HeaderImage() {

 const [name, setName] = useState();
 const pathNow = usePathname();

 useEffect(() => {
  if (pathNow == "/") {
   setName("Scuderia Legend Cars");
  }
  else {
   setName(pathNow.substring(1));
  }
 }, [])

 return (
  <Parallax
   bgImage={('/headers/' + name + '.jpeg')}
   bgImageAlt="Background"
   bgClassName='top-[-50%]'
   strength={200}
  >
   <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full after:z-10"></div>
   <p className="relative text-center pt-[150px] min-h-[500px] z-20">
    <span className='border-b-[12px] border-red-500 text-white lg:text-[60pt] md:text-[25px] uppercase'>
     {name}
    </span>
   </p>
  </Parallax>
 )
}