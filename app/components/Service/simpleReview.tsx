import React, { useState, CSSProperties, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SimpleReviewData } from '@/app/data/Service/serviceData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type SimpleReview = {
    id: number
    useravatar: string
    username: string
    countryflag: string
    country: string
    review: number
    content: string
    postdata: number
}

const images = [
    '/image/img/1.jpg',
    '/image/img/2.jpg',
    '/image/img/3.jpg',
];

const SimpleReview: React.FC = () => {
    const progressCircle = useRef<SVGSVGElement>(null);
    const progressContent = useRef<HTMLSpanElement>(null);
    const [currentYear, setCurrentYear] = useState<number>(2024);

    const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
        if (progressCircle.current) {
            progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
        }
        if (progressContent.current) {
            progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
        }
    };

    const renderArray = (count: number) => {
        let tempCount
        if (count === 2) tempCount = count;
        else tempCount = 5 - (5 % count);
        const array = new Array(tempCount).fill(undefined);
        return array;
    }

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <main className="py-4 w-full bg-white lg:px-24">
                <div className="lg:w-[45%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                    <div className="w-full relative p-4">
                        <div className='flex items-center w-full mb-4'>
                            <h1 className='text-xl font-bold text-start'>What people loved about this freelancer</h1>
                        </div>
                        <div className="overflow-hidden rounded-md border-gray-300 relative">
                            <div
                                className="flex transition-transform duration-500"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {SimpleReviewData.map((item) => (
                                    <div
                                        key={item.id}
                                        className='min-w-full h-40 border border-gray-400 rounded flex items-center py-2 px-10 lg:flex-row md:flex-row sm:flex-col flex-col'
                                    >
                                        <div className='lg:w-[16%] md:w-[16%] sm:w-full w-full h-full flex justify-center lg:items-start md:items-start sm:items-center items-center'>
                                            <div className='lg:w-[48px] md:w-[48px] sm:w-[32px] w-[32px] lg:h-[48px] md:h-[48px] sm:h-[32px] h-[32px] flex justify-center items-center rounded-full'>
                                                <img src={item.useravatar} className='rounded-full object-cover' alt={item.username} />
                                            </div>
                                        </div>
                                        <div className='lg:w-[84%] md:w-[84%] sm:w-full w-full lg:justify-start md:justify-start sm:justify-center justify-center h-full flex flex-col py-1'>
                                            <div className='w-full h-[25%] flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-4 px-1'>
                                                <span className='font-bold lg:text-base md:text-base sm:text-sm text-xs text-black'>{item.username}</span>
                                                <div className='flex justify-center gap-2 h-full items-center'>
                                                    <div className='lg:w-8 lg:h-6 md:w-8 md:h-6 sm:w-6 sm:h-4 w-4 h-3 flex justify-center items-center'>
                                                        <img src={item.countryflag} className='w-full h-full' alt={item.country} />
                                                    </div>
                                                    <span className='font-medium text-sm text-black lg:block md:block sm:block hidden'>{item.country}</span>
                                                </div>
                                                <div className='flex justify-center gap-1 h-full items-center'>
                                                    {renderArray(item.review).map((_, index) => (
                                                        <svg
                                                            key={index}
                                                            className="lg:w-4 lg:h-4 md:w-4 md:h-4 sm:w-3 sm:h-3 w-3 h-3 text-yellow-300"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="currentColor"
                                                            viewBox="0 0 22 20"
                                                        >
                                                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                        </svg>
                                                    ))}
                                                    <span className='px-2 lg:text-sm md:text-sm sm:text-sm text-xs font-bold text-black'>{item.review}</span>
                                                </div>
                                            </div>
                                            <div className='w-full h-[65%] flex items-center justify-center text-start px-1 lg:text-sm md:text-sm sm:text-sm text-[10px]'>
                                                {item.content}
                                            </div>
                                            <div className='w-full h-[10%] flex justify-end items-center text-[10px] font-bold px-2'>
                                                {currentYear - item.postdata} years ago
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={goToPrevious}
                            className="absolute lg:top-[60%] top-[65%] -left-0 transform -translate-y-1/2 bg-white p-1 opacity-75 hover:opacity-100 transition-opacity duration-200 rounded-full border border-gray-600 shadow-2xl"
                        >
                            <img src="/image/icon/next.png" className='rotate-180' alt="" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute lg:top-[60%] top-[65%] -right-0 transform -translate-y-1/2 bg-white p-1 opacity-75 hover:opacity-100 transition-opacity duration-200 rounded-full border border-gray-600 shadow-2xl"
                        >
                            <img src="/image/icon/next.png" alt="" />
                        </button>
                    </div>
                    <a href="#" className='font-bold text-sm hover:border-b border-black'>See all services</a>
                </div>
            </main>
        </>
    );
}

export default SimpleReview;