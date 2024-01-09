import Image from 'next/image'
import Navbar from './navbar'
import HeaderImage from './header-image'

export default function Header() {
 return (
  <>
   <div className="relative md:min-h-[500px]">
    <div id="top-header" className="flex fixed justify-between w-full z-40">
     <a className='inline-block' href="/">
      <Image className="ml-1 mt-1 md:mt-0 mb-1 inline-block" src="/logo.png" alt="Logo" width={40} height={40} sizes="(max-width: 768px) 80px"/>
      <span className='hidden md:inline-block font-oswald font-normal text-2xl leading-1 max-w-380 outline-none p-4 text-decoration-none'>
       Scuderia Legend Cars
      </span>
     </a>
     <Navbar />
    </div>
    <HeaderImage />
   </div>
  </>
 )
}