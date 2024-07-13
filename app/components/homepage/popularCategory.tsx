"use client"
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
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
                    breakpoints={{
                        425: {
                            slidesPerView: 1,
                        },
                        550: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 4,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {
                        freelancer.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative flex flex-col shadow-md overflow-hidden hover:shadow-lg 
                                                transition-all duration-300 max-w-sm cursor-pointer">
                                    <div className="overflow-hidden relative rounded-lg h-[250px] border-4 border-[#664481] bg-[#664481]">
                                        <div className="h-[30%] flex justify-center flex-col">
                                            <span className="text-xs p-1 text-white">{item.title}</span>
                                            <span className="text-sm px-1 text-white font-bold">{item.content}</span>
                                        </div>
                                        <div className="h-[70%] overflow-hidden flex justify-center rounded-lg">
                                            <img src={item.img} className="w-full h-full object-cover rounded-lg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className="py-4 cursor-pointer font-bold text-[#664481]">
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        ALL CATEGORIES
                        <FontAwesomeIcon icon={faForward} className="px-2" />
                    </button>
                </div>
            </div>
        </div >
    )
}

export default PopularCategory;