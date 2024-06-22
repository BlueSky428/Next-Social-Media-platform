"use client"
import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from 'swiper/modules';

type SkillCategory = {
    id: number,
    skill: string
}

type Freelancer = {
    id: number,
    avatar: string,
    title: string,
    role: string,
    reviewMark: number,
    reviewCount: number,
    skill: SkillCategory[],
    location: string,
    salary: string
}

const BestFreelancer: FC = () => {

    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(4);

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

    const [freelancer, setFreelancer] = useState<Freelancer[]>(
        [
            {
                id: 0,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                title: "Freelancer",
                role: "Marketing Manager",
                reviewMark: 5.0,
                reviewCount: 1,
                skill: skills,
                location: "New York",
                salary: "$60 - $65 / hr"
            },
            {
                id: 1,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                title: "Freelancer",
                role: "Marketing Manager",
                reviewMark: 5.0,
                reviewCount: 1,
                skill: skills,
                location: "New York",
                salary: "$60 - $65 / hr"
            },
            {
                id: 2,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                title: "Freelancer",
                role: "Marketing Manager",
                reviewMark: 5.0,
                reviewCount: 1,
                skill: skills,
                location: "New York",
                salary: "$60 - $65 / hr"
            },
            {
                id: 3,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                title: "Freelancer",
                role: "Marketing Manager",
                reviewMark: 5.0,
                reviewCount: 1,
                skill: skills,
                location: "New York",
                salary: "$60 - $65 / hr"
            },
            {
                id: 4,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                title: "Freelancer",
                role: "Marketing Manager",
                reviewMark: 5.0,
                reviewCount: 1,
                skill: skills,
                location: "New York",
                salary: "$60 - $65 / hr"
            },
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
        <div className="mx-auto max-w-screen-xl px-4 w-full justify-center">
            <h2 className="font-bold text-2xl text-gray-600 text-center py-16">Highest Rated Freelancers</h2>
            <Swiper
                spaceBetween={20}
                slidesPerView={sliderCount}
                pagination={{ clickable: true }}
            >
                {
                    freelancer.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm border cursor-pointer">
                                <div className="h-auto overflow-hidden">
                                    <div className="h-auto overflow-hidden flex justify-center py-6">
                                        <img src={item.avatar} className="w-24 h-24 rounded-full" alt="" />
                                    </div>
                                    <div className="bg-white flex flex-col justify-center px-4">
                                        <h3 className="text-base font-medium text-center">{item.title}</h3>
                                        <h3 className="text-base font-medium text-center">{item.role}</h3>
                                        <div className="flex justify-center py-2">
                                            <svg
                                                className="w-5 h-5 text-yellow-300 ms-1"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <span className="px-2">{item.reviewMark}</span>
                                            <span className="px-1">({item.reviewCount} Reviews)</span>
                                        </div>
                                        <div className="flex justify-center items-center py-2 border-b-2">
                                            {
                                                item.skill.map((Skill) => (
                                                    <a href="" key={Skill.id} className="relative inline-flex items-center justify-center p-2 px-4 ml-2 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                                        <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                                        <span className="relative text-white">{Skill.skill}</span>
                                                    </a>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-center py-4 px-4">
                                        <div className="lg:px-6 w-full flex justify-between items-center">
                                            <span className="text-xc">Location</span>
                                            <span className="text-xc">Rate</span>
                                        </div>
                                        <div className="lg:px-6 w-full flex justify-between items-center">
                                            <span className="text-xc">{item.location}</span>
                                            <span className="text-xc">{item.salary}</span>
                                        </div>
                                        <div className="w-auto flex justify-center items-center py-4">
                                            <a href="" className="relative inline-flex items-center justify-center p-3 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#581C87] rounded-full shadow-md group">
                                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#581C87] group-hover:translate-x-0 ease">
                                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                </span>
                                                <span className="absolute flex items-center justify-center w-full h-full text-[#581C87] transition-all duration-300 transform group-hover:translate-x-full ease">View Profile</span>
                                                <span className="relative invisible">View Profile</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default BestFreelancer;