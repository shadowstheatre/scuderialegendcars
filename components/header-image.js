'use client'

import { Parallax } from 'react-parallax';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function HeaderImage() {

  const [name, setName] = useState();
  const pathNow = usePathname();

  useEffect(() => {
    switch (pathNow) {
      case "/": setName("Scuderia Legend Cars");
        break;
      case "/galleria/foto": setName("Foto");
        break;
      case "/galleria/video": setName("Video");
        break;
      default: setName(pathNow.substring(1));
        break;
    }
  }, [])

  return (
    <Parallax
      bgImage={('/headers/' + name + '.jpeg')}
      bgImageAlt="Background"
      bgClassName='md:top-[-50%]'
      strength={200}
      // disabled={window.innerWidth > 768 ? false : true}
    >
      <div className="after:absolute after:content-[''] after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full after:z-10"></div>
      <p className="relative text-center py-[100px] md:pt-[150px] md:min-h-[500px] z-20">
        <span className='border-b-[5px] md:border-b-[12px] border-red-500 text-white lg:text-[60pt] text-[25px] uppercase'>
          {name}
        </span>
      </p>
    </Parallax >
  )
}