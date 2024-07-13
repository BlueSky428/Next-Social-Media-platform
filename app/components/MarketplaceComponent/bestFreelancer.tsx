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

type Freelancer = {
    id: number,
    avatar: string,
    role: string,
    aboutme: string,
    country: string,
    countryimage: string,
    reviewMark: number,
    projectCount: number,
    reviewCount: number,
    skill: SkillCategory[],
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
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
            },
            {
                id: 1,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
            },
            {
                id: 2,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
            },
            {
                id: 3,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
            },
            {
                id: 4,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
            },
            {
                id: 5,
                avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
                role: "Hero SEO",
                aboutme: "SEO and digital marketing Expert. Google Certified PPC Consultant - Over 1400 projects completed",
                country: "United Kingdom",
                countryimage: "/image/icon/flag.png",
                reviewMark: 5,
                reviewCount: 1155,
                projectCount: 1793,
                skill: skills,
                salary: "$95"
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
        <div className="bg-white w-full flex">
            <div className="mx-auto max-w-screen-xl px-4 w-full justify-center bg-white">
                <h2 className="font-bold text-2xl text-black-900 py-4">Best Freelancers</h2>
                <Swiper
                    spaceBetween={5}
                    pagination={{ clickable: true }}
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
                            slidesPerView: 3,
                        },
                        796: {
                            slidesPerView: 3,
                        },
                        // when window width is >= 1024px
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {
                        freelancer.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 max-w-sm border cursor-pointer">
                                    <div className="h-auto overflow-hidden">
                                        <div className="h-auto overflow-hidden flex flex-col justify-center items-center py-6">
                                            <img src={item.avatar} className="w-24 h-24 rounded-full" alt="" />
                                            <h3 className="text-base font-medium text-center py-1">{item.role}</h3>
                                        </div>
                                        <div className="bg-white flex flex-col justify-center px-4">
                                            <h3 className="text-xs font-medium">
                                                {item.aboutme}
                                            </h3>
                                            <div className="flex items-center py-2">
                                                <img src={item.countryimage} className="w-6 h-6 rounded-full object-cover" alt="" />
                                                <span className="text-xs px-2">{item.country}</span>

                                            </div>
                                            <div className="flex items-center py-2 border-b-2">
                                                <svg
                                                    className="w-4 h-4 text-yellow-300"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <span className="px-1">{item.reviewMark}</span>
                                                <span>({item.reviewCount})</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-center py-4">
                                            <div className="lg:px-6 w-full flex items-center">
                                                {
                                                    item.skill.map((Skill) => (
                                                        <a href="" key={Skill.id} className="relative inline-flex items-center justify-center p-1 px-4 ml-2
                                                                                                overflow-hidden font-medium text-indigo-600 bg-gray-100">
                                                            <span className="relative text-black text-xs">{Skill.skill}</span>
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="lg:px-6 w-full flex justify-between items-center py-2 px-2">
                                            <span className="text-xs">{item.projectCount} projects</span>
                                            <span className="text-xs"><strong>{item.salary}</strong>/hr</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

        </div>
    )
}

export default BestFreelancer;