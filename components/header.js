import Image from 'next/image'
import Navbar from './navbar'

export default function Header() {

 // function changeBackground() {
 //  const topHeader = Document.getElementById("top-header");
 //   window.addEventListener("scroll", function(){
 //    topHeader.style.backgroundColor = (window.scrollY > 500) ? "white" : "inherit";
 //   })
 // }


 return (
  <>
   <div className="relative min-h-[430px]">
    <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full after:z-10">
     <Image src="/hp-full.jpeg" alt="Background" fill className="-z-10 w-full max-h-[30rem] object-cover" />
    </div>
    <div id="top-header" className="fixed flex justify-between w-full">
     <a className='inline-block' href="/">
      <Image className="ml-2 mt-2 inline-block align-super" src="/logo.png" alt="Logo" width={56} height={56} />
      <span className='inline-block font-oswald font-normal text-4xl leading-1 max-w-380 outline-none p-4 text-decoration-none truncate text-white'>
       Scuderia Legend Cars
      </span>
     </a>
     <Navbar />
    </div>

    <p className="text-center pt-[120px] z-20">
     <span className='pb-4 border-b-[12px] border-red-500 text-white lg:text-[60pt] md:text-[25px] uppercase'>
      Scuderia Legend Cars
     </span>
    </p>
   </div>
  </>
 )


}