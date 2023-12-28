'use client'
import { Parallax, Background } from 'react-parallax';
import Image from 'next/image'

export default function HeaderImage() {
 return (
  <Parallax
   bgImage={('hp-full.jpeg')}
   bgImageAlt="Background"
   strength={200}
  >
   <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full after:z-10"></div>
   <p className="relative text-center pt-[150px] min-h-[500px] z-20">
    <span className='border-b-[12px] border-red-500 text-white lg:text-[60pt] md:text-[25px] uppercase'>
     Scuderia Legend Cars
    </span>
   </p>
  </Parallax>
 )
}