import Image from 'next/image'
import Navbar from './navbar'
import HeaderImage from './header-image'

export default function Header() {
 return (
  <>
   <div className="relative min-h-[500px]">
    <div id="top-header" className="fixed flex justify-between w-full z-40">
     <a className='inline-block' href="/">
      <Image className="ml-2 mb-1 inline-block" src="/logo.png" alt="Logo" width={40} height={40} />
      <span className='inline-block font-oswald font-normal text-2xl leading-1 max-w-380 outline-none p-4 text-decoration-none'>
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