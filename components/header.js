import Image from 'next/image'

export default function Header() {
 return (
  <>
   <div className="relative min-h-[25rem]">
    <Image src="/hp-full.jpeg" alt="Background" fill className='-z-10 w-full max-h-[30rem]' />
    <div id="top-header" className="flex space-between relative">
     <a className='inline-block' href="/">
      <Image className="ml-2 mt-2 inline-block align-super" src="/logo.png" alt="Logo" width={56} height={56} />
      <span className='inline-block font-oswald font-normal text-4xl leading-1 max-w-380 outline-none p-4 text-decoration-none truncate text-white'>
       Scuderia Legend Cars
      </span>
     </a>
     <ul className='p-4'>
      <li className='inline-block'>
       Pippo
      </li>
      <li className='inline-block'>
       Franco
      </li>
      <li className='inline-block'>
       Antonio
      </li>



      {/* <ul className="space-x-4">
     {pagine.map((pagina) => (
      <li className="inline-block" key={pagina}><a href={`/${pagina}`}>{pagina}</a></li>
     ))}
    </ul> */}
     </ul>
    </div>

    <div className='text-center'>
     Scuderia Legend Cars
    </div>
   </div>
  </>
 )
}