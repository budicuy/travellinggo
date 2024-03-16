import Banner from "./banner";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <section className="bg-white">
          <div className="p-10 bg-white w-[90%] mx-auto -translate-y-32 z-50 sticky rounded-lg shadow">
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
          <p className="text-black">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi cupiditate eum et accusamus saepe, architecto recusandae tempore beatae! Quas porro voluptatem enim dolor, iste eaque eius sed est tempore aspernatur.</p>

        </section>
        <section className="block my-[1000rem]"></section>
      </main>
    </div>
  );
}
