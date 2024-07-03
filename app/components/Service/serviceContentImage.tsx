"use client"
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

type RadioButton = {
    id: number,
    title: string,
    price: string
}

const ServiceImageContent: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(8);
    const [price, setPrice] = useState<string>("$25");

    const [radioButton, setRadioButton] = useState<RadioButton[]>(
        [
            {
                id: 0,
                title: "Starter",
                price: "$25"
            }, {
                id: 1,
                title: "Standard",
                price: "$95"
            }, {
                id: 2,
                title: "Advanced",
                price: "$194"
            },
        ]
    )

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

    const choosePrice = (id: number) => {
        setPrice(radioButton[id].price);
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
            <main className="py-8 w-full bg-white lg:px-24 relative md:justify-center md:items-center sm:justify-center sm:items-center justify-center items-center">
                <div className="relative lg:w-[65%] md:w-full sm:w-ful overflow-hidden rounded-md bg-gray-900 p-2 sm:p-4">
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
                <div className={`w-auto h-auto absolute right-24 responsiveItem`} style={{ "top": "2rem" }}>
                    <div className="flex flex-col max-w-sm p-6 mx-auto text-center text-gray-900 bg-white border shadow-lg
                                border-gray-300 rounded-lg shadow xl:p-8 dark:bg-white dark:text-white">
                        <div className="flex items-center justify-center flex-col">
                            <div className="text-black font-bold">Select service tier</div>
                            <div className="w-full flex justify-between items-center">
                                {
                                    radioButton.map((item) => (
                                        <div className="flex flex-col items-center justify-center mt-4" key={item.id} onClick={() => choosePrice(item.id)}>
                                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-[#581C87] bg-gray-100" />
                                            <label htmlFor="inline-radio" className="text-sm font-medium text-gray-900 dark:text-black-500">{item.title}</label>
                                            <label htmlFor="inline-radio" className="text-base text-gray-900 dark:text-black-500 font-bold">{item.price}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="flex flex-col justify-center py-4">
                            <div className="w-full flex items-center py-2">
                                <h1 className="text-black font-bold text-xl">B A S I K (Simple)</h1>
                            </div>
                            <div className="w-full flex flex-col py-2 justify-center">
                                <span className="text-gray-700 text-base font-bold" style={{ "textAlign": "start" }}>3 Logo Design Concepts + Printable file + Vector Source File + 3D Mockup</span>
                            </div>
                            <div className="w-full flex flex-col justify-center items-center">
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Delivery Time</span>
                                    <span className="text-black text-sm">1 Day</span>
                                </div>
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Number of Revisions</span>
                                    <span className="text-black text-sm">3</span>
                                </div>
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Number of Initial Concepts</span>
                                    <span className="text-black text-sm">3</span>
                                </div>
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Printable Resolution File</span>
                                    <span className="text-black text-sm">3</span>
                                </div>
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Logo Transparency</span>
                                    <span className="text-black text-sm">3</span>
                                </div>
                                <div className="w-full flex justify-between items-center py-1">
                                    <span className="text-black text-sm">Source Files</span>
                                    <span className="text-black text-sm">Vector File</span>
                                </div>
                            </div>
                        </div>
                        <a href=""
                            className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 
                                    focus:ring-purple-200 font-medium rounded-xl text-sm px-5 py-4 
                                    text-center dark:text-white mt-2">Buy Now {price}</a>
                    </div>
                </div>
            </main>
            <div className="w-full lg:px-24">
                <Swiper
                    spaceBetween={5}
                    slidesPerView={sliderCount}
                    pagination={{ clickable: true }}
                >
                    {
                        images.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full lg:w-full md:w-full sm:w-full flex items-center mt-3 border">
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