'use client'

import { Swiper, SwiperSlide, } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Qwigley } from "next/font/google";

import "swiper/css";

const qwigley = Qwigley({
    subsets: ["latin"],
    weight: "400",
});

export default function Banner() {

    return (
        <>
            <Swiper className="mySwiper relative overflow-hidden "
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
            >
                <div className="absolute z-50 overflow-hidden left-0 top-0 right-0 bottom-0 shadow">
                    <div className="flex w-full h-full justify-center items-center text-center">
                        <div>
                            <h3 className="text-3xl lg:text-5xl font-bold">TRAVELLING<span className="text-warning">GO</span></h3>
                            <p className={`text-xl my-1 lg:text-3xl lg:my-2 text-primary  ${qwigley.className}`}>Explore Your Travel</p>
                            <div className="font-semibold text-[8px] lg:text-lg">
                                <p>🌍✈️ Selamat datang di TravelingGo! Temukan Petualangan Tak Terlupakan Anda! ✈️🌍</p>
                                <p>🚀 Temukan Pengalaman Wisata yang Tidak Terlupakan dengan TravelingGo! 🚀</p>
                                <p>🌈 Liburan Tanpa Batas di Ujung Jari Anda - Kunjungi TravelingGo Sekarang! 🌈</p>
                                <p>🔥 Pesan Sekarang dan Rasakan Sensasi Petualangan yang Luar Biasa! 🔥</p>

                                <p className="mt-6 text-warning">#TravelingGo  #LiburanTanpaBatas  #JelajahiDunia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <SwiperSlide>
                    <div className="h-[100dvh] overflow-hidden">
                        <img className="block object-cover object-center w-full h-full opacity-50 " src="/337.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[100dvh] overflow-hidden">
                        <img className="block object-cover object-center w-full h-full opacity-50 " src="/337.jpg" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[100dvh] overflow-hidden">
                        <img className="block object-cover object-center w-full h-full opacity-50 " src="/337.jpg" alt="" />
                    </div>
                </SwiperSlide>


            </Swiper>

        </>
    );
}
