"use client"
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons/faForward";

type SkillCategory = {
    id: number,
    skill: string
}

type PopularCategory = {
    id: number,
    img: string,
    title: string,
    content: string
}

const PopularCategory: FC = () => {

    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(6);

    const [freelancer, setFreelancer] = useState<PopularCategory[]>(
        [
            {
                id: 0,
                img: "/image/img/1.jpg",
                title: "Engage your community",
                content: "Content Writing"
            },
            {
                id: 1,
                img: "/image/img/2.jpg",
                title: "Boost your traffic",
                content: "CEO"
            },
            {
                id: 2,
                img: "/image/img/3.jpg",
                title: "Build your site",
                content: "Website Development"
            },
            {
                id: 3,
                img: "/image/img/4.jpg",
                title: "Elevate your brand",
                content: "Logo Design"
            },
            {
                id: 4,
                img: "/image/img/6.jpg",
                title: "Tell your story",
                content: "Voice-over"
            },
            {
                id: 5,
                img: "/image/img/5.jpg",
                title: "Picture your idea",
                content: "Illustration & Drawing"
            },
            {
                id: 6,
                img: "/image/img/7.jpg",
                title: "Picture your idea",
                content: "Illustration & Drawing"
            }]
    )

    useEffect(() => {
        if (window.innerWidth <= 1150 && window.innerWidth >= 700) {
            setIsMobileMD(true);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(4);
        } else if (window.innerWidth <= 700 && window.innerWidth >= 640) {
            setIsMobileMD(false);
            setIsMobileSM(true);
            setIsMobileXS(true);
            setSliderCount(3);
        } else if (window.innerWidth <= 640) {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(true);
            setSliderCount(1);
        } else {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(6);
        }
    }, [isMobileMD, isMobileSM, isMobileXS, sliderCount])

    return (
        <div className="w-full py-2 bg-white">
            <div className="mx-auto lg:w-full max-w-screen-xl px-4 w-full justify-center bg-white">
                <h2 className="font-bold text-2xl text-gray-600 py-4">Most Popular Category</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={sliderCount}
                    pagination={{ clickable: true }}
                >
                    {
                        freelancer.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative flex flex-col shadow-md overflow-hidden hover:shadow-lg 
                                                transition-all duration-300 max-w-sm border cursor-pointer">
                                    <div className="h-auto overflow-hidden relative">
                                        <div className="h-auto overflow-hidden flex justify-center">
                                            <img src={item.img} className="w-full h-[250px] object-cover" alt="" />
                                        </div>
                                        <div className="w-full h-[250px] overflow-hidden flex flex-col absolute bg-[rgba(0,0,0,0.2)] top-0 px-4 py-6">
                                            <span className="text-xs py-2 text-white">{item.title}</span>
                                            <span className="text-base text-white font-bold">{item.content}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="py-4 cursor-pointer font-bold text-[#581c87]">
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        ALL CATEGORIES
                        <FontAwesomeIcon icon={faForward} className="px-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PopularCategory;