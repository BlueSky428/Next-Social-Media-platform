"use client"
import { faHeart } from "@fortawesome/free-solid-svg-icons/faHeart";
import { useRouter } from "next/navigation";
import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons/faForward";

type PopularServices = {
    id: number,
    image: string,
    icon: any,
    title: string,
    content: string,
    reviewMark: number,
    reviewCount: number,
    userAvatar: any,
    userName: string,
    money: string
}

type SkillCategory = {
    id: number,
    skill: string
}

const TrendingOffers: FC = () => {

    const router = useRouter();
    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(4);

    const [popularServices, setPopularServices] = useState<PopularServices[]>(
        [
            {
                id: 0,
                image: "/image/img/market.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Developer drop the framework folder into new parent",
                reviewMark: 5,
                reviewCount: 2,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                userName: "John Powell",
                money: "$158"
            },
            {
                id: 1,
                image: "/image/img/1.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Developer drop the framework folder into new parent",
                reviewMark: 4.0,
                reviewCount: 1,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/team5-150x150.jpg",
                userName: "Robert Fox",
                money: "$158"
            },
            {
                id: 2,
                image: "/image/img/2.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Power management, notification and geofencing for host serve",
                reviewMark: 5.0,
                reviewCount: 6,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
                userName: "Thomas Pow",
                money: "$125"
            },
            {
                id: 3,
                image: "/image/img/3.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "I will design website UI UX in adobe xd or figma",
                reviewMark: 4.3,
                reviewCount: 3,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg",
                userName: "Freelancer",
                money: "$158"
            },
            {
                id: 4,
                image: "/image/img/4.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Developer drop the framework folder into new parent",
                reviewMark: 5,
                reviewCount: 2,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                userName: "John Powell",
                money: "$158"
            },
            {
                id: 5,
                image: "/image/img/5.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Full Service host that will do most of the work for you",
                reviewMark: 3.0,
                reviewCount: 1,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                userName: "John Powell",
                money: "$158"
            },
            {
                id: 6,
                image: "/image/img/6.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "PHP framework taht you can use to create your own custom",
                reviewMark: 4.0,
                reviewCount: 1,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png",
                userName: "Ali Tufan",
                money: "$158"
            },
            {
                id: 7,
                image: "/image/img/7.jpg",
                icon: faHeart,
                title: "Design & Creative",
                content: "Power management, notification and geofencing for host serve",
                reviewMark: 5,
                reviewCount: 1,
                userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                userName: "John Powell",
                money: "$125"
            }
        ]
    )

    const [skills, setSkill] = useState<SkillCategory[]>(
        [
            {
                id: 0,
                skill: "Creative"
            },
            {
                id: 1,
                skill: "HTML5"
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
        <div className="bg-white w-full py-12">
            <div className="mx-auto max-w-screen-xl px-4 w-full justify-center">
                <div className="lg:flex items-center justify-between mb-5">
                    <h2 className="font-bold text-2xl text-black">Trending Offers</h2>
                </div>
                <Swiper spaceBetween={20} slidesPerView={sliderCount} pagination={{ clickable: true }}>
                    {
                        popularServices.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div key={item.id} className="cursor-pointer relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                    <span className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</span>
                                    <div className="h-auto overflow-hidden">
                                        <div className="h-auto overflow-hidden relative">
                                            <img src={item.image} className="w-full y-full" alt="" />
                                        </div>
                                    </div>
                                    <div className="bg-white py-4 px-3">
                                        <div className="flex justify-between items-center">
                                            <p className="text-sm text-gray-400">
                                                {item.content}
                                            </p>
                                        </div>
                                        <div className="flex flex-col justify-center py-4">
                                            <div className="lg:px-6 w-full flex items-center">
                                                {
                                                    skills.map((Skill) => (
                                                        <a href="" key={Skill.id} className="relative inline-flex items-center justify-center p-1 px-4 ml-2
                                                                                                overflow-hidden font-medium text-indigo-600 bg-gray-100">
                                                            <span className="relative text-black text-xs">{Skill.skill}</span>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="flex items-center px-2 relative py-8">
                                            <div className="flex items-center justify-center absolute left-0">
                                                <div className="flex items-center justify-center">
                                                    <img className="w-10 h-10 rounded-full" src={item.userAvatar} alt="" />
                                                </div>
                                                <div className="flex flex-col">
                                                    <div className="flex items-center justify-center text-sm px-2">
                                                        {item.userName}
                                                    </div>
                                                    <div className="flex items-center py-1">
                                                        <div className="flex items-center justify-center">
                                                            <svg
                                                                className="w-4 h-4 text-yellow-300 ms-1"
                                                                aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="currentColor"
                                                                viewBox="0 0 22 20"
                                                            >
                                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                            </svg>
                                                        </div>
                                                        <div className="flex items-center justify-center px-1 text-xs">
                                                            {item.reviewMark}
                                                        </div>
                                                        <div className="flex items-center justify-center text-gray-400 text-xs">
                                                            (1153)
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center justify-center absolute right-0">
                                                <strong className="flex items-center justify-center text-sm px-2 py-3">
                                                    {item.money}
                                                </strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="py-4 cursor-pointer font-bold text-[#581c87]">
                    <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
                        ALL OFFERS
                        <FontAwesomeIcon icon={faForward} className="px-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TrendingOffers;