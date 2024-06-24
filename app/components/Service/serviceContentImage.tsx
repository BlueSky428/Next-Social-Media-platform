"use client"
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const ServiceImageContent: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(8);
    const [isShowImage, setIsShowImage] = useState<boolean>(false);

    const images = [
        '/image/img/1.jpg',
        '/image/img/2.jpg',
        '/image/img/3.jpg',
    ];

    const previous = () => {
        if (currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const forward = () => {
        if (currentIndex < images.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const randomImage = (index: number) => {
        if (index + 1 < currentIndex) {
            setCurrentIndex(currentIndex - (currentIndex - (index + 1)));
        } else if (index + 1 > currentIndex) {
            setCurrentIndex(currentIndex + ((index + 1) - currentIndex));
        } else {
            setCurrentIndex(currentIndex);
        }
    }

    useEffect(() => {
        if (window.innerWidth < 1260) {
            setIsMobile(true);
        } else setIsMobile(false);

        if (window.innerWidth <= 640 && window.innerWidth >= 520) {
            setSliderCount(3)
        } else if (window.innerWidth <= 520 && window.innerWidth >= 320) {
            setSliderCount(2)
        }
    }, [isMobile])

    return (
        <>
            <main className="py-8 w-full bg-white lg:px-24 relative">
                <div className="relative lg:w-[65%] md:w-[70%] overflow-hidden rounded-md bg-gray-900 p-2 sm:p-4">
                    <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-900 px-2 text-center text-sm text-white">
                        <span>{currentIndex}</span>/<span>{images.length}</span>
                    </div>
                    <button
                        onClick={previous}
                        className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
                    >
                        <FontAwesomeIcon icon={faLeftLong} />
                    </button>
                    <button
                        onClick={forward}
                        className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
                    >
                        <FontAwesomeIcon icon={faRightLong} />
                    </button>
                    <div className="relative lg:h-[650px] md:h-[400px] sm:h-[450px] h-80 w-full">
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className={`absolute top-0 transition-opacity duration-300 w-full h-full ${currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <img src={image} alt={`slide-${index}`} className="rounded-sm w-full h-full" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`w-auto h-auto absolute right-24 ${isMobile ? "hidden" : ""}`} style={{ "top": "-10rem" }}>
                    <div className="flex flex-col max-w-sm p-6 mx-auto text-center text-gray-900 bg-white border shadow-lg
                                border-[#581C87] rounded-lg shadow dark:border-[#581C87] xl:p-8 dark:bg-white dark:text-white">
                        <div className="flex items-center justify-center flex-col">
                            <span className="mr-2 text-5xl font-extrabold text-black">$79</span>
                        </div>
                        <div className="flex flex-col justify-center border-b-2">
                            <div className="w-full flex items-center py-2 px-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="animal[]" value="cat" className="mr-2 w-4 h-4" />
                                    <label htmlFor="animal-cat" className="block text-gray-700 font-medium text-base">10000 Words (+5 days)</label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col px-4 py-2 justify-center">
                                <span className="text-gray-700 text-base" style={{ "textAlign": "start" }}>I will professionally translate english to german</span>
                                <span className="text-gray-700 text-base font-bold py-4" style={{ "textAlign": "start" }}>$45</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="w-full flex items-center py-2 px-4">
                                <div className="flex items-center">
                                    <input type="checkbox" name="animal[]" value="cat" className="mr-2 w-4 h-4" />
                                    <label htmlFor="animal-cat" className="block text-gray-700 font-medium text-base">2000 Words (+5 days)</label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col px-4 py-2 justify-center">
                                <span className="text-gray-700 text-base" style={{ "textAlign": "start" }}>I will professionally translate english to german</span>
                                <span className="text-gray-700 text-base font-bold py-4" style={{ "textAlign": "start" }}>$45</span>
                            </div>
                        </div>
                        <a href=""
                            className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 
                                    focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-6 
                                    text-center dark:text-white">Buy Now $79</a>
                    </div>
                    <div className="mt-2 flex flex-col max-w-sm p-6 mx-auto text-center text-gray-900 bg-white border shadow-lg
                                border-[#581C87] rounded-lg shadow dark:border-[#581C87] xl:p-8 dark:bg-white dark:text-white">
                        <div className="flex items-center justify-center flex-col">
                            <span className="mr-2 text-xl font-extrabold text-black">About The Seller</span>
                        </div>
                        <div className="w-full flex itmes-center py-4 border-b-2">
                            <div className="flex items-center">
                                <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg" className="w-20 h-20 rounded-full" alt="" />
                            </div>
                            <div className="flex flex-col jutify-center px-4">
                                <span className="text-gray-700 py-1" style={{ "textAlign": "start" }}>John Powell</span>
                                <span className="text-gray-700 py-1" style={{ "textAlign": "start" }}>Product Manager</span>
                                <div className="w-full flex items-center py-1" style={{ "textAlign": "start" }}>
                                    <svg
                                        className="w-5 h-5 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <span className="px-2 text-sm text-gray-700">3.0</span>
                                    <span className="px-2 text-sm text-gray-700">(1 Review)</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center px-8 py-4">
                            <div className="w-full flex justify-between">
                                <span className="text-gray-600">Location</span>
                                <span className="text-gray-600">Rate</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className="text-gray-600">Los Angels</span>
                                <span className="text-gray-600">$45 - $65 / hr</span>
                            </div>
                        </div>
                        <a href=""
                            className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 
                                    focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-6 
                                    text-center dark:text-white">Contact me</a>
                    </div>
                </div>
            </main>
            <div className="w-full px-24">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={sliderCount}
                    pagination={{ clickable: true }}
                >
                    {
                        images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-38 lg:w-full md:w-full sm:w-full flex items-center mt-3">
                                    <div className="w-auto flex justif-center items-center" onClick={() => randomImage(index)}>
                                        <img src={item} className="rounded-lg cursor-pointer" alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>


    );
}

export default ServiceImageContent;