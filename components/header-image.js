'use client'
import { Parallax, Background } from 'react-parallax';
import Image from 'next/image'

export default function HeaderImage() {
 return (
  <Parallax
   bgImage={('hp-full.jpeg')}
   bgImageAlt="Background"
   strength={500}
  >
   <p className="text-center pt-[150px] min-h-[500px]">
    <span className='border-b-[12px] border-red-500 text-white lg:text-[60pt] md:text-[25px] uppercase'>
     Scuderia Legend Cars
    </span>
   </p>
  </Parallax>
 )
}