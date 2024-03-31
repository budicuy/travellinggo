import { Qwigley } from "next/font/google"
import Image from "next/image"
import { IconBrandWhatsapp, IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react"

const qwigley = Qwigley({
    subsets: ["latin"],
    weight: "400",
})

export default function About() {
    return (
        <section className="bg-white">
            <div className="container overflow-hidden px-5 py-10 lg:px-20">
                <div className="grid lg:grid-cols-2 items-center">
                    <div>
                        <h2 className={`text-2xl lg:text-5xl font-semibold text-primary leading-[5px] ${qwigley.className} `}>
                            About Us
                        </h2>
                        <h3 className="font-bold text-5xl text-black">
                            Explore all tour of the world with us.
                        </h3>
                        <p className="text-black font-semibold mt-3">
                            TravellingGo adalah destinasi online pilihan utama bagi para pencinta petualangan dan penggemar perjalanan. Dengan komitmen untuk memberikan pengalaman perjalanan yang tak terlupakan, TravellingGo menggabungkan keahlian lokal dengan teknologi canggih untuk membantu Anda merencanakan petualangan impian Anda.
                        </p>
                        <div>
                            <div className="flex gap-2 mt-5 text-black">
                                <div className="p-2 rounded-full border-black border-2  hover:bg-black hover:text-white">
                                    <IconBrandFacebook className="" size={20} />
                                </div>
                                <div className="p-2 rounded-full border-black border-2 hover:bg-black hover:text-white">
                                    <IconBrandInstagram className="" size={20} />
                                </div>
                                <div className="p-2 rounded-full border-black border-2 hover:bg-black hover:text-white">
                                    <IconBrandWhatsapp className="" size={20} />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Image className="drop-shadow-xl" src="/about.png" alt="about" width={1600} height={1600} />
                    </div>
                </div>
            </div>
        </section>
    )
}
