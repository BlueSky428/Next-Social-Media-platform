import React, { useState, CSSProperties } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import List from './list';

type CustomCSSProperties = CSSProperties & {
    '--swiper-navigation-color'?: string;
    '--swiper-navigation-size'?: string;
    '--swiper-navigation-width'?: string
};

const images = [
    '/image/img/1.jpg',
    '/image/img/2.jpg',
    '/image/img/4.jpg',
    '/image/img/5.jpg',
    '/image/img/6.jpg',
    '/image/img/7.jpg',
];

export default function ServiceImageContent() {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <main className="py-8 w-full bg-white lg:px-24 relative md:justify-center md:items-center sm:justify-center sm:items-center justify-center items-center px-2">
                <div className="relative lg:w-[50%] md:w-full sm:w-ful overflow-hidden rounded-md p-2 sm:p-4 bg-white">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                        } as CSSProperties}
                        loop={true}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {
                            images.map((Img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={Img} alt={`Image` + index} className='rounded-lg hover:scale-110 block w-full h-full object-cover ease-in-out transition duration-300' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                    <Swiper
                        onSwiper={(swiper) => setThumbsSwiper(swiper as SwiperType)}
                        style={{
                            '--swiper-navigation-color': '#571c87',
                            '--swiper-navigation-size': '20px',
                            '--swiper-navigation-bold': 'bold',
                        } as CustomCSSProperties}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        navigation={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper1"
                    >
                        {
                            images.map((Img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={Img} alt={`Image` + index} className='rounded-lg hover:scale-110 block w-full h-full object-cover ease-in-out transition duration-300' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </main>
        </>
    );
}