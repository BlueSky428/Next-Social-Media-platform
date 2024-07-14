"use client"
import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Image from "next/image";


type FooterComponent = {
    id: number,
    image: string,
    content: string,
}

const PriceComponent: FC = () => {

    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(3);

    const [footerComponent, setFooterComponent] = useState<FooterComponent[]>([
        { id: 0, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/94cd1fb842d2f83673cb82471cf31391-1681338894376/1679327104976-Socialmediacampaignexamples.png", content: "10 Inspiring social media campaign examples(+tips)" },
        { id: 1, image: "https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/f8b90c2d98253cab80acab0fcdb7ccfe-1683018247626/1679327122574-Socialmediatrends.png", content: "Top 10 social media trends to add to your strategy" },
        { id: 2, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/12fb4aa47ab0418009abf26a668c3068-1683117055632/1682363404403-Tiktokvsinta_howtochoosethebestoneforyourbrand_.jpeg", content: "Tiktok vs. Instagram: how to choose the best platform for your brand" },
        { id: 3, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/6826e34b1484e1335aa97b54071def3f-1686782493289/1685545819018-9UGCStrategiesThatCanSkyrocketYourEngagementandConversions.jpg", content: "9 UGC strategies to skyrocket engagement and conversions" },
        { id: 4, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/6826e34b1484e1335aa97b54071def3f-1686782493289/1685545819018-9UGCStrategiesThatCanSkyrocketYourEngagementandConversions.jpg", content: "9 UGC strategies to skyrocket engagement and conversions" },
        { id: 5, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/6826e34b1484e1335aa97b54071def3f-1686782493289/1685545819018-9UGCStrategiesThatCanSkyrocketYourEngagementandConversions.jpg", content: "9 UGC strategies to skyrocket engagement and conversions" }
    ])

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
            setSliderCount(3);
        }
    }, [isMobileMD, isMobileSM, isMobileXS, sliderCount])

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    const updateItemsPerPage = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 768) {
            setItemsPerPage(3);
        } else if (screenWidth >= 625) {
            setItemsPerPage(2);
        } else {
            setItemsPerPage(1);
        }
    };

    // Call updateItemsPerPage on initial load and window resize
    useEffect(() => {
        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);
        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(footerComponent.length / itemsPerPage);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    };

    // const displayedImages = footerComponent.slice(currentIndex, currentIndex + itemsPerSlide).concat(footerComponent.slice(0, Math.max(0, currentIndex + itemsPerSlide - footerComponent.length)));

    return (
        <section className="bg-white dark:bg-white">
            <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 flex justify-between items-center">
                <h1 className="font-bold text-2xl">Guides related to Social Media Marketing</h1>
                <a className="cursor-pointer text-black">See more guides</a>
            </div>
            <div className="max-w-screen-xl mx-auto px-4 py-4 lg:px-6">
                <div className="relative">
                    <div className="overflow-hidden rounded-md">
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentIndex * (100)}%)` }}
                        >
                            {footerComponent.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={`w-full sm:w-1/${itemsPerPage} flex-shrink-0 p-2`}
                                >
                                    <div className="relative">
                                        <img
                                            src={slide.image}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto rounded-t-md"
                                        />
                                    </div>
                                    <div className="w-full flex justify-center items-center px-2 py-1 bg-white lg:text-base md:text-xs sm:text-base text-base font-bold border-b border-l border-r cursor-pointer">
                                        <span>{slide.content}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={goToPrevious}
                        className="flex justify-cetner items-center absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white p-1 transition-opacity duration-200 rounded-full shadow-md z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={goToNext}
                        className="flex justify-cetner items-center absolute top-1/2 -right-2 -translate-y-1/2 bg-white p-1 transition-opacity duration-200 rounded-full shadow-md z-10"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section >
    )
}

export default PriceComponent;