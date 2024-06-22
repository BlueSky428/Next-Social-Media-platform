"use client"
import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


type Price = {
    id: number,
    price: string,
    plantype: string,
}

const PriceComponent: FC = () => {

    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(4);

    const [price, setPrice] = useState<Price[]>(
        [
            {
                id: 0,
                price: "$29",
                plantype: "Basic Plan",
            },
            {
                id: 1,
                price: "$59",
                plantype: "Standard Plan",
            },
            {
                id: 2,
                price: "$89",
                plantype: "Extended Plan",
            },
            {
                id: 3,
                price: "$129",
                plantype: "Enterprise Plan",
            }
        ]
    )

    useEffect(() => {
        if (window.innerWidth <= 1150 && window.innerWidth >= 700) {
            setIsMobileMD(true);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(3);
        } else if (window.innerWidth <= 700 && window.innerWidth >= 640) {
            setIsMobileMD(false);
            setIsMobileSM(true);
            setIsMobileXS(true);
            setSliderCount(2);
        } else if (window.innerWidth <= 640) {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(true);
            setSliderCount(1);
        } else {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(4);
        }
    }, [isMobileMD, isMobileSM, isMobileXS, sliderCount])

    return (
        <section className="bg-white dark:bg-white">
            <div className="max-w-screen-xl px-4 py-4 mx-auto lg:py-24 lg:px-6">
                <Swiper spaceBetween={10} slidesPerView={sliderCount}>
                    {
                        price.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border shadow-lg
                                    border-[#581C87] rounded-lg shadow dark:border-[#581C87] xl:p-8 dark:bg-white dark:text-white">
                                    <div className="flex items-center justify-center flex-col my-8">
                                        <span className="mr-2 text-5xl font-extrabold text-black">{item.price}</span>
                                        <span className="text-black dark:text-black py-2">{item.plantype}</span>
                                        <span className="py-4 text-black">One time fee for one listing or task highlighted in search results.</span>
                                    </div>
                                    <ul role="list" className="mb-4 space-y-2 text-left">
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>20 Listing</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>50 Days Visibility</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>Highlighted in Search Results</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>10 Revisions</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>9 Days Delivery Time</span>
                                        </li>
                                        <li className="flex items-center space-x-2 text-black text-center justify-center">
                                            <span>Support 24/7</span>
                                        </li>
                                    </ul>
                                    <a href="#"
                                        className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white">Buy Now</a>
                                </div>
                            </SwiperSlide>
                        ))

                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PriceComponent;