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

      <div id="sponsors" className="w-full relative bg-white">
        <div className="relative block h-1 w-[81%] mt-3 mx-auto bg-red-500"></div>
        <div className="w-[81%] mx-auto">
          <div className="grid grid-rows-3">
            <div className="row-span-1 uppercase text-center text-4xl">
              I NOSTRI SPONSOR
            </div>
            <div className="grid grid-cols-3 row-span-1">
              <div className="col-span-1">
                <Image src="/sponsors/glassdrive.jpg" width={140} height={100} alt="descrizione" className="" />
              </div>
              <div className="col-span-2">
                <div className="font-bold">
                  Glassdrive Trento
                </div>
                <div>
                  164/m, v. Alto Adige (Lamar di Gardolo) - 38121 Trento (TN)
                </div>
                <a className="block" href="tel:0461994864">
                  Tel. 0461994864
                </a>
                <a href="mailto:trento@glassdrive.it">
                  Mail: trento@glassdrive.it
                </a>
              </div>
            </div>
            <div className="grid grid-cols-3 row-span-1 mt-10">
              <div className="col-span-1">
                <Image src="/sponsors/ancorauto.png" width={140} height={100} alt="descrizione" className="" />
              </div>
              <div className="col-span-2">
                <div className="font-bold">
                  Team Ancorauto
                </div>
                <div>
                  di Ancora Vincenzo
                </div>
                <div>
                  148, Str. Statale dei Giovi - 20032 Ospitaletto di Cormano
                </div>
                <a className="block" href="tel:0266300779">
                  Tel. 0266300779
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative block h-1 w-[81%] mt-4 mb-3 mx-auto bg-red-500"></div>
    </>
  )
}
