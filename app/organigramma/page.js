import Image from "next/image"


export default function Organigramma() {
 return (
  <>
   <div className="relative bg-white p-4 text-6xl text-center uppercase">
    <div className="p-10">
     consiglio direttivo
    </div>
    <Image src='/consiglio_1.jpeg' width={957} height={694} className="mx-auto" />
    <Image src='/consiglio_2.jpeg' width={957} height={694} className="mt-4 mx-auto" />
   </div>
  </>
 )
}