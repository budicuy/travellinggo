import Banner from "./banner";
import { Qwigley, Ruge_Boogie } from "next/font/google";

const qwigley = Qwigley({
  subsets: ["latin"],
  weight: "400",
});

const rugeBoogie = Ruge_Boogie({
  subsets: ["latin"],
  weight: "400",
});

const dataPlace = [
  {
    name: "Male",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1617525257943-dfaca45b8022?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Kuala Lumpur",
    location: "Malaysia",
    image: "/image-grid.jpg"
  },
  {
    name: "Bali",
    location: "Indonesia",
    image: "/image-grid.jpg"
  },
  {
    name: "Fuji",
    location: "Japan",
    image: "/image-grid.jpg"
  }
]


export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <section className="bg-white ">
          <div className="p-10 bg-white container w-[90%] mx-auto -translate-y-32 z-50 sticky rounded-lg shadow">
            <div className="conainer">
              <div className="grid lg:grid-cols-5 gap-5">
                <div className="text-center text-black p-5 bg-gradient-to-b from-blue-300 rounded-lg">
                  <img className="mx-auto" src="/menu/menu-1.svg" alt="" />
                  <h5 className="font-bold">Paket Hemat</h5>
                  <p className="mt-2">Tersedia berbagai penawaran harga untuk anda</p>
                </div>
                <div className="text-center text-black p-5 bg-gradient-to-b from-blue-300 rounded-lg">
                  <img className="mx-auto" src="/menu/menu-1.svg" alt="" />
                  <h5 className="font-bold">Paket Hemat</h5>
                  <p className="mt-2">Tersedia berbagai penawaran harga untuk anda</p>
                </div>
                <div className="text-center text-black p-5 bg-gradient-to-b from-blue-300 rounded-lg">
                  <img className="mx-auto" src="/menu/menu-1.svg" alt="" />
                  <h5 className="font-bold">Paket Hemat</h5>
                  <p className="mt-2">Tersedia berbagai penawaran harga untuk anda</p>
                </div>
                <div className="text-center text-black p-5 bg-gradient-to-b from-blue-300 rounded-lg">
                  <img className="mx-auto" src="/menu/menu-1.svg" alt="" />
                  <h5 className="font-bold">Paket Hemat</h5>
                  <p className="mt-2">Tersedia berbagai penawaran harga untuk anda</p>
                </div>
                <div className="text-center text-black p-5 bg-gradient-to-b from-blue-300 rounded-lg">
                  <img className="mx-auto" src="/menu/menu-1.svg" alt="" />
                  <h5 className="font-bold">Paket Hemat</h5>
                  <p className="mt-2">Tersedia berbagai penawaran harga untuk anda</p>
                </div>
              </div>
            </div>
          </div >
        </section>

        <section className="bg-white">
          <div className="container">

            <div className="text-center">
              <h2 className={`text-2xl lg:text-5xl font-semibold text-primary leading-[5px] ${qwigley.className} `}>Destinations</h2>
              <h1 className="text-black mb-5 text-2xl lg:text-5xl font-bold lg:mb-8">Choose Your Place</h1>
            </div>



            <div className="flex flex-wrap -m-1 md:-m-2 lg:px-20 px-5">

              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="w-1/2 p-1 md:p-2">
                  <div className="image-card-gallery group ">
                    <img alt="gallery" className="image-gallery" src={dataPlace[0].image} />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />

                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <div className="image-card-gallery group ">
                    <img alt="gallery" className="image-gallery" src="/image-grid.jpg" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />

                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
                <div className="w-full p-1 md:p-2">
                  <div className="image-card-gallery group">
                    <img alt="gallery" className="image-gallery" src="/image-grid.jpg" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />

                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
              </div>

              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="w-1/2 md:w-full p-1 md:p-2">
                  <div className="image-card-gallery group">
                    <img alt="gallery" className="image-gallery" src="/image-grid.jpg" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />
                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
                <div className="w-1/2 p-1 md:p-2">
                  <div className="image-card-gallery group">
                    <img alt="gallery" className="image-gallery" src="/image-grid.jpg" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />
                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
                <div className="w-full md:w-1/2 p-1 md:p-2">
                  <div className="image-card-gallery group">
                    <img alt="gallery" className="image-gallery" src="/image-grid.jpg" />

                    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/30 to-black/70" />
                    <div className="absolute text-white font-bold lg:bottom-5 bottom-2 left-2 lg:left-5">
                      <h2 className={`${rugeBoogie.className} text-accent text-lg lg:text-3xl leading-none`}>
                        {dataPlace[0].name}
                      </h2>
                      <h3 className="text-xl lg:text-3xl">{dataPlace[0].location}</h3>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section className="block my-[1000rem]"></section>
      </main>
    </div >
  );
}
