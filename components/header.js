import Image from 'next/image'

export default function Header() {
 return (
  <>
   <div className="flex items-center">
    <Image src="/path/to/logo.png" alt="Logo" width={50} height={50} />
   </div>
   <nav>
    <ul className="flex space-x-4">
     {pagine.map((pagina) => (
      <li key={pagina}><a href={`/${pagina}`}>{pagina}</a></li>
     ))}
    </ul>
   </nav>
  </>
 )
}