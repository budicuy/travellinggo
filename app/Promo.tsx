import { Poppins } from "next/font/google"

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: "700",
})


export default function Promo() {
    return (
        <section className="bg-white pt-52">
            <div className="bg-[url('/bg-image.jpg')] bg-fixed bg-cover bg-center ">
                <div className="container">
                    <div className={`p-20 text-center `}>
                        <span className={`font-bold lg:text-3xl ${PoppinsFont.className} `}>BURUAN CHECKOUT SEKARANG JUGA!</span>
                        <button className="mx-auto mt-2 border-2  bg-blue-700 shadow-lg font-semibold shadow-blue-700 rounded-lg px-10 py-3 block">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
