import { IconBookmarkPlus, IconStarFilled } from "@tabler/icons-react"

import { Qwigley } from "next/font/google"
import Image from "next/image"


const qwigley = Qwigley({
    subsets: ["latin"],
    weight: "400",
})

const dataImage = [
    {
        name: "Bali",
        location: "Indonesia",
        image: "/image-grid.jpg",
        deskripsi: "Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan.",
        price: "Rp. 100.000"
    },
    {
        name: "Fuji",
        location: "Japan",
        image: "/image-grid.jpg",
        deskripsi: "Mount Fuji is the highest mountain in Japan, standing 3,776.24 m (12,389 ft) and is one of Japan's Three Holy Mountains. It is an active stratovolcano that last erupted in 1707–1708.",
        price: "Rp. 200.000"
    },
    {
        name: "Kuala Lumpur",
        location: "Malaysia",
        image: "/image-grid.jpg",
        deskripsi: "Kuala Lumpur, officially the Federal Territory of Kuala Lumpur and colloquially referred to as KL, is a federal territory and the capital city of Malaysia. It is the largest city in Malaysia, covering an area of 243 km2 (94 sq mi) with an estimated population of 1.73 million as of 2016.",
        price: "Rp. 300.000"
    },

]

export default function Popular() {
    return (
        <>
            <section className="bg-white ">
                <div className="container overflow-hidden py-32">

                    <div className="text-center">
                        <h2 className={`text-2xl lg:text-5xl font-semibold text-primary leading-[5px] ${qwigley.className} `}>Featured Tours</h2>
                        <h1 className="text-black mb-5 text-2xl lg:text-5xl font-bold lg:mb-8">Most Popular Tours</h1>
                    </div>

                    <div className="grid md:grid-cols-3 gap-5 px-10">
                        {dataImage.map((item, index) => (
                            <div key={index} className="shadow-2xl shadow-black/50 rounded-lg p-5 ">
                                <h3 className="text-black flex justify-between">
                                    <span className="font-bold text-xl">{item.name} - {item.location}</span>
                                    <Image src="/bookmart.svg" alt="star" width={25} height={25} />
                                </h3>
                                <div className="w-full overflow-hidden mt-4 rounded-md ">
                                    <Image width={1600} height={900} className="aspect-video object-cover object-center lg:transition-all hover:scale-125" src={item.image} alt={item.name} />
                                </div>
                                <div className="flex gap-2 text-black my-3">
                                    <span className="font-semibold text-black/50 text-xl">Rating : </span>
                                    <span className="flex text-3xl text-yellow-300">
                                        <Image className="w-4" src="/star.svg" alt="star" width={20} height={20} />
                                        <Image className="w-4" src="/star.svg" alt="star" width={20} height={20} />
                                        <Image className="w-4" src="/star.svg" alt="star" width={20} height={20} />
                                        <Image className="w-4" src="/star.svg" alt="star" width={20} height={20} />
                                        <Image className="w-4" src="/star.svg" alt="star" width={20} height={20} />
                                    </span>
                                </div>

                                <div className="text-lg font-semibold">

                                    <p className="text-black ">
                                        {item.deskripsi.substr(0, 100)}...
                                    </p>

                                    <div className="text-black mt-3 flex justify-between items-center">
                                        <span>
                                            <span className="text-black/50 block leading-[0.5]">Best Price</span>
                                            <span>{item.price}</span>
                                        </span>
                                        <button className="py-2 px-4 bg-black rounded-lg text-white">
                                            Explore Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
