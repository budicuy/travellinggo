import { IconMail, IconBrandTelegram, IconBrandFacebook, IconBrandWhatsapp, IconBrandInstagram } from "@tabler/icons-react"


export default function Footer() {
    return (
        <section className="bg-black">
            <div className="container overflow-hidden p-10  md:p-16 pb-5">

                <div className="grid lg:grid-cols-4 gap-5">
                    <div>
                        <h3 className="font-bold text-2xl mb-1">TRAVELLING<span className="text-yellow-300">GO</span></h3>
                        <h4 className="font-semibold text-xl">Contact Us</h4>
                        <div>
                            <p>travellinggo@gmail.com </p>
                            <p>021-12345678</p>
                            <p>Jl. Kebon Jeruk No. 5, Jakarta Barat</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Information</h3>
                        <ul className="list-disc list-inside">
                            <li className="hover:underline">About Us</li>
                            <li className="hover:underline">Terms & Condition</li>
                            <li className="hover:underline">Privacy Policy</li>
                            <li className="hover:underline">FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl">Follow Us</h3>
                        <ul className="list-disc list-inside">
                            <li className="hover:underline">Facebook</li>
                            <li className="hover:underline">Instagram</li>
                            <li className="hover:underline">Twitter</li>
                            <li className="hover:underline">Youtube</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-xl mb-1">Subscribe</h3>
                        <p className="mb-2">Subscribe to get the latest news and offers</p>
                        <div className="flex mb-2">
                            <div className="py-2 px-3 rounded-l-lg bg-blue-300">
                                <IconMail className="text-white" size={20} />
                            </div>
                            <input className="w-full rounded-r-lg p-2" type="text" placeholder="Enter your email" />
                        </div>
                        <button className="bg-blue-300 py-2 px-3 rounded-lg">Subscribe</button>
                    </div>
                </div>
                <hr className="h-1 border-t my-5 border-white w-full" />
                <div>
                    <div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold text-xl">TravellingGo</h3>
                            <div className="flex gap-2">
                                <IconBrandFacebook className="text-white" size={20} />
                                <IconBrandInstagram className="text-white" size={20} />
                                <IconBrandWhatsapp className="text-white" size={20} />
                                <IconBrandTelegram className="text-white" size={20} />
                            </div>
                        </div>
                    </div>
                    <p className="text-center text-white">© {new Date().getFullYear()} TravellingGo. All rights reserved.</p>
                </div>
            </div>
        </section >
    )
}
