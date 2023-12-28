import Image from "next/image"

export default function Home() {
  return (
    <>
      <div id="simple-paragraph" className="w-full bg-white">
        {/*  */}
        <div className="relative block h-1 w-[81%] mt-3 mx-auto bg-red-500"></div>
        <div className="relative block p-50 text-center">
          <span className="pt-50">
            La Scuderia nasce da un gruppo di amici appassionati di auto d'epoca che da molti anni partecipano a raduni e passeggiate e più volte sono stati riconosciuti con simpatia.
          </span>
          <div className="relative">
            <Image src="/logo.png" width='340' height='340' className="mx-auto"></Image>
          </div>
        </div>
        <div className="relative block h-1 w-[81%] mb-3 mx-auto bg-red-500"></div>
      </div>

      <div id="bg-paragraph" className="w-full relative bg-[url('/cinquecento-blu.jpeg')] bg-cover text-center">
        <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full"></div>
        <div className="h-full p-24 text-white uppercase text-6xl">
          <a className="relative h-full hover:border-b-4 hover:border-b-white z-20" href="https://www.facebook.com/groups/71107471872/about/">
            <span>
              iscriviti al nostro gruppo facebook!
            </span>
          </a>
        </div>
      </div>

      <div id="image-paragraph" className="w-full bg-white">
        <div className="relative block h-1 w-[81%] mt-3 mx-auto bg-red-500"></div>
        <div className="grid grid-cols-3 py-10 max-w-[81%] mx-auto">
          <div className="col-span-2 col-start-1">
            Vuoi diventare socio? <br></br>
            <a href="">
              <span className="border-b-4 border-b-black">
                Scopri come!
              </span>
            </a>
          </div>
          <div className="col-start-3">
            <Image src="/old_logo.jpeg" width='600' height='597' className="mx-auto"></Image>
          </div>
        </div>

        <div className="relative block h-1 w-[81%] mb-3 mx-auto bg-red-500"></div>
      </div>

      <div id="team-paragraph" className="w-full relative bg-[url('/team-photo.jpeg')] bg-center text-center">
        <div className="after:content-[''] after:absolute after:top-0 after:left-0 after:block after:bg-black after:opacity-25 after:h-full after:w-full"></div>
        <div className="relative h-full p-24 text-white uppercase text-6xl z-20">
          <a className="relative h-full hover:border-b-4 hover:border-b-white" href="https://drive.google.com/open?id=10wVgXZC9NSGizpHUiCpmlUPqbETntS1R7WNx0qSS0EU">
            <span>
              Leggi lo statuto dell'associazione!
            </span>
          </a>
        </div>
      </div>

      <div id="sponsors" className="w-full bg-white">
        <div className="relative block h-1 w-[81%] mt-3 mx-auto bg-red-500"></div>
        <div className="grid grid-rows-3">
          <div className="uppercase">
            I NOSTRI SPONSOR
          </div>
          <div className="grid-col-2">
            <div className="">
              <Image></Image>

            </div>
            <div className=""></div>
          </div>
          <div className="grid-col-2">
            <div className="">
              <Image></Image>

            </div>
            <div className=""></div>
          </div>

        </div>
        <div className="relative block h-1 w-[81%] mb-3 mx-auto bg-red-500"></div>
      </div>
    </>
  )
}
