import { useRouter } from 'next/navigation';
import React, { useState, CSSProperties } from 'react';

import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Navigation, Pagination, FreeMode } from 'swiper/modules';

type Image = {
    id?: number;
    image?: string;
    parentID?: number;
}

type CarouselProps = {
    images: Image[];
    parentID: number;
}


type CustomCSSProperties = CSSProperties & {
    '--swiper-navigation-color'?: string;
    '--swiper-navigation-size'?: string;
    '--swiper-navigation-width'?: string
};

const Carousel: React.FC<CarouselProps> = ({ images, parentID }) => {

    const filteredImages = images.filter(image => image.parentID === parentID);
    const router = useRouter();

    return (
        <div className="h-auto overflow-hidden">
            <a className="h-auto overflow-hidden relative">
                <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg">
                    <Swiper
                        effect={'cube'}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        loop={true}
                        modules={[EffectCube, Pagination, Navigation, FreeMode]}
                        className="mySwiper"
                        style={{
                            '--swiper-navigation-color': '#664481',
                            '--swiper-navigation-size': '20px',
                        } as CustomCSSProperties}
                        navigation={true}
                    >
                        {
                            filteredImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image.image} className='hover:scale-110 trnasition duration-300 ease-in-out' />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </a>
        </div>

    );
};

export default Carousel;