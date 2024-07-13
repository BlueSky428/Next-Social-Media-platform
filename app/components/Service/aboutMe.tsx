"use client"
import { previousWorkData, previousWorkdetailData } from "@/app/data/Freelancer/freelancerData";
import { aboutMeExpertInData, detailInformationData, packagesData, featuresData, deliveryTimesData, premiumDeliveryTimesData } from "@/app/data/Service/serviceData";
import { popularServiceData, imageData, socialType } from '@/app/data/Marketplace/marketplaceData';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FC, useState } from "react";
import Carousel from "../MarketplaceComponent/Carousel";
import ContactMe from "../Freelancer/contactMe";
import List from "./list";

type AboutMeExpertIn = {
    id: number
    content: string
}

type DetailInformation = {
    id: number
    title: string
    content: string
}

type PreviousWork = {
    id: number
    img: string
    content: string
}

type PreviousWorkDetail = {
    id: number
    userAvatar: string
    productImage: string
    term: string
    title: string
    workResult: string
    content: string
    category: string
    parentID: number
}

type PopularServices = {
    id: number;
    icon: any;
    title: string;
    content: string;
    reviewMark: number;
    reviewCount: number;
    userAvatar: string;
    userName: string;
    money: string;
    socialTypeID: number
}

type Image = {
    id: number;
    image: string;
    parentID: number;
}

type Package = {
    id: number
    name: string;
    price: number;
    posts: string;
    details: string;
    deliveryTime: string
}

type Feature = {
    description: string;
    availability: string[];
}

type deliveryTime = {
    time: string
    additionalCost: number
}

type premiumDeliveryTimes = {
    time: string
    additionalCost: number
}

const AboutMe: FC = () => {

    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const [popularServices, serPopularServices] = useState<PopularServices[]>(popularServiceData);
    const [previousWork, setPreviousWork] = useState<PreviousWork[]>(previousWorkData)
    const [images] = useState<Image[]>(imageData);
    const [packages, setPackages] = useState<Package[]>(packagesData);
    const [features, setFeatures] = useState<Feature[]>(featuresData);
    const [deliveryTime, setDeliveryTime] = useState<deliveryTime[]>(deliveryTimesData);
    const [premiumDeliveryTimes, setPremiumDeliveryTimes] = useState<premiumDeliveryTimes[]>(premiumDeliveryTimesData);
    const [previousWorkdetail, setPreviousWorkDetail] = useState<PreviousWorkDetail[]>(previousWorkdetailData);

    const [basicMaxMoney, setBasicMaxMoney] = useState<number>(parseFloat((packages[0].price + deliveryTime[1].additionalCost).toFixed(2)));
    const [basicMinMoney, setBasicMinMoney] = useState<number>(packages[0].price);
    const [standardMaxMoney, setStandardMaxMoney] = useState<number>(parseFloat((packages[1].price + deliveryTime[1].additionalCost).toFixed(2)));
    const [standardMinMoney, setStandardMinMoney] = useState<number>(packages[1].price);
    const [premiumMaxMoney, setPremiumMaxMoney] = useState<number>(parseFloat((packages[2].price + premiumDeliveryTimes[1].additionalCost).toFixed(2)));
    const [premiumMinMoney, setPremiumMinMoney] = useState<number>(packages[2].price);
    const [isContactme, setIsContactMe] = useState<boolean>(false);

    const handleMouseEnter = (id: number) => {
        setHoveredItem(id);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const projects = [
        {
            id: 1,
            title: 'Page/channel evaluation',
            tick: "/Image/icon/tick.png",
            progress: 6.5,
            progressClass: 'text-success bg-success-light',
            status: 'In Progress',
            statusClass: 'text-primary bg-primary-light',
        },
        {
            id: 2,
            title: 'Custom graphics',
            tick: "/Image/icon/tick.png",
            progress: 2.7,
            progressClass: 'text-danger bg-danger-light',
            status: 'Under Review',
            statusClass: 'text-light-inverse bg-light',
        },
        {
            id: 3,
            title: 'Social posts created',
            tick: "/Image/icon/tick.png",
            progress: 6.8,
            progressClass: 'text-success bg-success-light',
            status: 'In Progress',
            statusClass: 'text-primary bg-primary-light',
        },
        {
            id: 4,
            title: 'Revisions',
            tick: "/Image/icon/tick.png",
            progress: 4.5,
            progressClass: 'text-success bg-success-light',
            status: 'Done',
            statusClass: 'text-success bg-success-light',
        },
        {
            id: 5,
            title: 'Delivery Time',
            tick: "/Image/icon/tick.png",
            progress: 1,
            progressClass: 'text-danger bg-danger-light',
            status: 'Postponed',
            statusClass: 'text-warning bg-warning-light',
        }
    ];

    const handleOnChange = (id: number, time: string) => {
        if (id === 0) {
            if (time === "5 days") {
                if (packages[id].price < basicMaxMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price + deliveryTime[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 5 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            } else if (time === "10 days") {
                if (packages[id].price > basicMinMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price - deliveryTime[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 5 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            }
        } else if (id === 1) {
            if (time === "5 days") {
                if (packages[id].price < standardMaxMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price + deliveryTime[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 15 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            } else if (time === "10 days") {
                if (packages[id].price > standardMinMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price - deliveryTime[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 15 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            }
        } else if (id === 2) {
            if (time === "10 days") {
                if (packages[id].price < premiumMaxMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price + premiumDeliveryTimes[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 30 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            } else if (time === "14 days") {
                if (packages[id].price > premiumMinMoney) {
                    const temp = packages.map((item) => (
                        item.id === id
                            ? { ...item, price: parseFloat((item.price - premiumDeliveryTimes[1].additionalCost).toFixed(2)), deliveryTime: deliveryTimesData[id].time, socialPost: 30 }
                            : { ...item, price: item.price }
                    ))
                    setPackages(temp);
                }
            }
        }
    }

    const [aboutMeExpertIn, setAboutMeExpertIn] = useState<AboutMeExpertIn[]>(aboutMeExpertInData);

    return (
        <div className="lg:w-full items-center lg:py-4 md:py-12 sm:py-12 lg:px-24 lg:mt-0 sm:mt-6 mt-6 px-1">
            <div className="flex flex-col mt-4">
                <div className="flex lg:items-center md:items-center lg:flex-row md:flex-row sm:flex-col flex-col">
                    <div className="flex justify-center items-center lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-20 sm:h-20 w-14 h-14 relative">
                        <img className="w-full h-full" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png" alt="" />
                        <div className="absolute bottom-0 lg:right-0 md:right-0 sm:right-0 -right-1 lg:h-8 lg:w-8 md:h-8 md:w-8 sm:w-6 sm:h-6 w-6 h-6 flex justify-center items-center rounded-full bg-[#664481]">
                            <svg width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col lg:px-4 md:px-4 sm:px-2 px-2 py-2">
                        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col">
                            <div className="flex items-center">
                                <span className="text-base font-bold">Vitalii D.</span>
                                <div className="flex justify-center items-center px-1 ml-4 rounded" style={{ "color": "#fff", "backgroundColor": "#664481" }}>
                                    <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z">
                                        </path>
                                    </svg>
                                    <p className="text-sm px-1">Pro</p>
                                </div>
                            </div>
                            <pre className="lg:flex md:flex sm:hidden hidden"> | </pre>
                            <div className="flex items-center">
                                <span className="text-xs">Level 2</span>
                                <div className="flex px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="px-2 py-1 lg:text-sm md:text-sm sm:text-xs text-xs">5.0</span>
                                <span className="px-2 py-1 lg:text-sm md:text-sm sm:text-xs text-xs">(1200)</span>
                            </div>
                            <pre> | </pre>
                            <div className="flex items-center">
                                <span className="lg:text-sm md:text-sm sm:text-xs text-xs">22 orders in quenue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 px-2 flex items-center">
                <button className="px-2 py-1 rounded border border-[#664481] text-[#664481] hover:bg-[#664481] hover:text-white transition duration-300" onClick={() => setIsContactMe(true)}>Contact me</button>
            </div>
            <div className="mt-8 flex justify-center flex-col border lg:w-[64%] md:w-[64%] sm:w-full w-full p-4">
                <div className="flex items-center">
                    <span className="text-xm">Shirley Esid is part of the Fiverr Pro catalog and has been hand-picked by a dedicated Fiverr Pro team for their skills and expertise.</span>
                </div>
                <div className="flex flex-col justify-center mt-4 border-b">
                    <span className="font-bold">Expert In:</span>
                    <div className="grid grid-cols-2">
                        {
                            aboutMeExpertIn.map((item) => (
                                <div className="flex items-center py-2 w-32" key={item.id}>
                                    <div className="w-[20%] flex items-center">
                                        <svg className="w-full h-full" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#664481">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path>
                                        </svg>
                                    </div>
                                    <div className="w-[80%] flex items-center">
                                        <span className="px-2 lg:text-sm md:text-sm sm:text-xs text-xs">{item.content}</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-4 border-b">
                    <div className="grid grid-cols-2">
                        {
                            detailInformationData.map((item) => (
                                <div className="flex flex-col justify-center py-2" key={item.id}>
                                    <span className="text-gray-600 font-base">{item.title}</span>
                                    <span className="text-gray-600 font-base font-bold">{item.content}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-4 border-b">
                    <div className="flex justify-center items-center">
                        <div className="flex flex-col justify-center py-2">
                            <span className="text-gray-600 font-base">
                                I'm Shirley, a seasoned multidisciplinary designer and markteter based in Belguim.<br /><br />
                                My expertise spans 7+ years in digital marketing, design, and marketing strategy.<br /><br />
                                I've proudly built winning strategies for branding, social media, brand concept development, and paid advertising, catering to small to medium-sized businesses.<br /><br />
                                Notably, I've held influential CMO positions for international agencies and have assisted over 800 brands with their social and marketing needs as a freelancer..<br /><br />
                                Let's team up for a successful brand journey!
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center mt-4">
                    <div className="flex items-center">
                        <span className="font-bold">Among my clients</span>
                        <span className="px-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 6.222c0-.228.075-.59.277-.87C7.112 5.12 7.4 4.89 8 4.89c.734 0 1.116.388 1.245.777.136.41.02.867-.405 1.15-.701.468-1.218.92-1.49 1.556-.24.56-.24 1.175-.239 1.752v.098H8.89c0-.728.015-.964.095-1.15.06-.142.21-.356.842-.777a2.751 2.751 0 0 0 1.106-3.19C10.558 3.978 9.488 3.111 8 3.111c-1.179 0-2.001.511-2.5 1.203a3.37 3.37 0 0 0-.611 1.908h1.778Zm2.222 6.667V11.11H7.11v1.778H8.89Z"></path>
                            </svg>
                        </span>
                        <span className="flex justify-center items-center px-2 bg-[#664481] rounded-full text-white text-sm">New</span>
                    </div>
                    <div className="flex flex-col justify-center mt-4">
                        <div className="flex items-center">
                            {previousWork.map(item => (
                                <div key={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} className="flex px-2 object-cover relative">
                                    <div className="flex">
                                        <div className="w-6 h-6 flex">
                                            <img src={item.img} className="w-full h-full object-cover" alt="" />
                                        </div>
                                        <span className="px-2 text-sm">{item.content}</span>
                                    </div>
                                    {
                                        hoveredItem === item.id && (
                                            <div className="flex flex-col justify-center border w-80 px-2 transition duration-150 absolute top-6 bg-white z-50 p-2">
                                                <div className="flex items-center w-full">
                                                    <div className="flex items-center">
                                                        <img src={previousWorkdetail.find(detail => detail.parentID === item.id)?.userAvatar} className="w-8 h-8 rounded-full" alt="" />
                                                    </div>
                                                    <div className="flex items-center px-4">
                                                        <img src={previousWorkdetail.find(detail => detail.parentID === item.id)?.productImage} className="w-8 h-8" alt="" />
                                                    </div>
                                                </div>
                                                <div className="flex justify-center w-full flex-col">
                                                    <div className="flex justify-center flex-col">
                                                        <h1 className="text-sm py-2 font-bold">About my work with {previousWorkdetail.find(detail => detail.parentID === item.id)?.title}</h1>
                                                        <span className="text-xs">{previousWorkdetail.find(detail => detail.parentID === item.id)?.term}</span>
                                                        <span className="py-4 text-xs">
                                                            {previousWorkdetail.find(detail => detail.parentID === item.id)?.workResult}
                                                        </span>
                                                    </div>
                                                    <div className="w-full border bg-gray-100">
                                                        <span className="text-xs">
                                                            {isExpanded ? (previousWorkdetail.find(detail => detail.parentID === item.id)?.content) : (previousWorkdetail.find(detail => detail.parentID === item.id)?.content)?.substring(0, 100) + "..."}
                                                        </span>
                                                        <button onClick={toggleContent} className="mt-2 text-blue-500 hover:text-blue-700 font-semibold focus:outline-none text-xs">
                                                            {isExpanded ? 'Show Less' : 'Show More'}
                                                        </button>
                                                    </div>
                                                    <span className="text-xs">Industry: {previousWorkdetail.find(detail => detail.parentID === item.id)?.category}</span>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center flex-col lg:w-[64%] md:w-[64%] sm:w-full w-full p-4">
                <div className="flex items-center">
                    <span className="font-bold">My portfolio</span>
                    <span className="px-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 6.222c0-.228.075-.59.277-.87C7.112 5.12 7.4 4.89 8 4.89c.734 0 1.116.388 1.245.777.136.41.02.867-.405 1.15-.701.468-1.218.92-1.49 1.556-.24.56-.24 1.175-.239 1.752v.098H8.89c0-.728.015-.964.095-1.15.06-.142.21-.356.842-.777a2.751 2.751 0 0 0 1.106-3.19C10.558 3.978 9.488 3.111 8 3.111c-1.179 0-2.001.511-2.5 1.203a3.37 3.37 0 0 0-.611 1.908h1.778Zm2.222 6.667V11.11H7.11v1.778H8.89Z"></path>
                        </svg>
                    </span>
                    <span className="flex justify-center items-center px-2 bg-[#664481] rounded-full text-white text-sm">New</span>
                </div>
                <div className="flex items-center mt-4 w-full lg:w-full lg:h-96 md:h-96 sm:h-auto h-auto gap-4 lg:flex-row md:flex-row sm:flex-col flex-col">
                    <div className="relative lg:w-[40%] lg:h-full md:[40%] md:h-full sm:w-full sm:h-80 w-full h-80  group rounded-3xl overflow-hidden shadow-xl cursor-pointer">
                        <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/91fc8f757a9751d097e401b25510ac93-1642875357530/baeskinco.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur-sm"></div>
                        <div className="absolute text-white flex justify-center items-center w-full h-full">
                            <p className="hidden group-hover:block text-gray-700 text-xl font-bold trnasition duration-500">BaeSkinCo's Instagram Feed</p>
                        </div>
                    </div>
                    <div className="lg:w-[50%] lg:h-full md:[40%] md:h-full sm:w-full sm:h-80 w-full h-auto rounded-3xl overflow-hidden cursor-pointer">
                        <div className="lg:w-full lg:h-1/2 md:w-full md:h-1/2 sm:w-full sm:h-80 h-96 w-full space-y-2 py-2 flex items-center gap-1 lg:flex-row md:flex-row sm:flex-col flex-col">
                            <div className="group relative bg-gray-100 text-center lg:w-1/2 md:w-1/2 sm:w-full w-full h-full border rounded-3xl overflow-hidden cursor-pointer">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/91fc8f757a9751d097e401b25510ac93-1642875357530/baeskinco.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                                <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur-sm">
                                </div>
                                <div className="absolute text-white flex justify-center items-center w-full h-full">
                                    <p className="hidden group-hover:block text-gray-700 text-sm font-bold trnasition duration-500">Feed Design Tea Talk with Taaka</p>
                                </div>
                            </div>
                            <div className="group relative bg-gray-100 text-center lg:w-1/2 md:w-1/2 sm:w-full w-full h-full border rounded-3xl overflow-hidden cursor-pointer">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/e4af9a5b3c2f53a912ed94ba7af389ca-1642875692445/Teatalkwithtaaka.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                                <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur-sm">
                                </div>
                                <div className="absolute text-white flex justify-center items-center w-full h-full">
                                    <p className="hidden group-hover:block text-gray-700 text-sm font-bold trnasition duration-500">Feed Overhaul For Alice England</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-full lg:h-1/2 md:w-full md:h-1/2 sm:w-full sm:h-80 h-96 w-full space-y-2 py-2 flex items-center gap-1 lg:flex-row md:flex-row sm:flex-col flex-col">
                            <div className="group relative bg-gray-100 text-center lg:w-1/2 md:w-1/2 sm:w-full w-full h-full border rounded-3xl overflow-hidden cursor-pointer">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/91fc8f757a9751d097e401b25510ac93-1642875357530/baeskinco.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                                <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur-sm">
                                </div>
                                <div className="absolute text-white flex justify-center items-center w-full h-full">
                                    <p className="hidden group-hover:block text-gray-700 text-sm font-bold trnasition duration-500">Young Misflts Instagram Feed</p>
                                </div>
                            </div>
                            <div className="group relative bg-gray-100 text-center lg:w-1/2 md:w-1/2 sm:w-full w-full h-full border rounded-3xl overflow-hidden cursor-pointer">
                                <img src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_portfolio_project_grid/v1/attachments/project_item/attachment/e4af9a5b3c2f53a912ed94ba7af389ca-1642875692445/Teatalkwithtaaka.png" alt="" className="absolute w-full h-full inset-0 object-cover" />
                                <div className="absolute inset-0 w-full h-full rounded-3xl bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur-sm">
                                </div>
                                <div className="absolute text-white flex justify-center items-center w-full h-full">
                                    <p className="hidden group-hover:block text-gray-700 text-sm font-bold trnasition duration-500">Ads for TSPCC</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <a href="" className="hover:border-b text-blue-700 border-blue-700">See Projects (31)</a>
                </div>
            </div>
            <div className="lg:flex md:flex sm:hidden hidden flex-wrap mb-5 mt-8 lg:w-[64%] md:w-[64%] sm:w-full w-full">
                <div className="font-bold">Compare Packages</div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 border-gray-400">
                        <thead className="text-xs uppercase bg-gray-100 text-black border border-gray-400">
                            <tr>
                                <th scope="col" className="border border-gray-400 p-4">
                                    Package
                                </th>
                                {packages.map((pkg, index) => (
                                    <th scope="col" key={index} className="p-4 border border-gray-400">
                                        <strong className="text-xl">€{pkg.price}</strong> <br />
                                        <span className="text-base">{pkg.name}</span> <br />
                                        <span className="text-base">{pkg.posts}</span> <br /><br />
                                        {pkg.details}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100 cursor-pointer">
                            {features.map((feature, featureIndex) => (
                                <tr key={featureIndex} className="bg-white hover:bg-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-gray-400">
                                        {feature.description}
                                    </th>
                                    {feature.availability.map((available, index) => (
                                        <td scope="row" key={index} className="border border-gray-400 text-center">
                                            {
                                                featureIndex === 0 || featureIndex === 1 ? (
                                                    <div className="w-full h-full flex justify-center items-center">
                                                        <img src={available} alt="" />
                                                    </div>
                                                ) : (
                                                    <span className="text-black">{available}</span>
                                                )
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr className="bg-white hover:bg-gray-200">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap border border-gray-400">
                                    Delivery Time
                                </th>
                                {packages.map((pkg, index) => (
                                    <td scope="row" key={index} className="border border-gray-400">
                                        {pkg.name === 'Premium' ? (
                                            premiumDeliveryTimes.map((time, timeIndex) => (
                                                <div key={timeIndex} className="ml-16">
                                                    <input type="radio" name={pkg.name} onClick={() => handleOnChange(index, time.time)} /><label htmlFor={time.time + time.additionalCost}> {time.time} {time.additionalCost === 0 ? "" : "€" + time.additionalCost}</label> <br />
                                                </div>
                                            ))
                                        ) : (
                                            deliveryTime.map((time, timeIndex) => (
                                                <div key={timeIndex} className="ml-16">
                                                    <input type="radio" name={pkg.name} onClick={() => handleOnChange(index, time.time)} /> {time.time} {time.additionalCost === 0 ? "" : "€" + time.additionalCost} <br />
                                                </div>
                                            ))
                                        )}
                                    </td>
                                ))}
                            </tr>
                            <tr className="bg-white hover:bg-gray-200 border-gray-400 border">
                                <td className="border border-gray-400">
                                    &nbsp;
                                </td>
                                {packages.map((pkg, index) => (
                                    <td key={index} className="p-2 border-gray-400 border text-center">
                                        €{pkg.price} <br />
                                        <button className="bg-black text-white py-2 px-8 hover:opacity-80">Select</button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex-col w-full h-auto lg:hidden md:hidden sm:flex flex">
                <List />
            </div>
            <div className="mt-8 flex justify-center lg:w-[45%] md:w-[64%] sm:w-full w-full p-4">
                <div className="w-full justify-center sm:grid-cols-2 xl:grid-cols-4 gap-6">
                    <h2 className="font-bold text-2xl text-black py-4">Recommended for you</h2>
                    <div className="w-full h-auto flex justify-center items-center py-1 px-2">
                        <Swiper
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                // when window width is >= 1024px
                                1024: {
                                    slidesPerView: 2,
                                },
                            }}
                            spaceBetween={30}
                        >
                            {popularServices.map((service) => (
                                <SwiperSlide key={service.id}>
                                    <div className="cursor-pointer relative flex flex-col shadow-lg rounded-xl max-w-sm lg:w-auto md:w-auto sm:w-full w-full border">
                                        <span className="hover:text-orange-600 text-red-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 
                                                11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 
                                                19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 
                                                11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 
                                                19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 
                                                3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 
                                                6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 
                                                11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 
                                                9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 
                                                13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 
                                                16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 
                                                2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 
                                                5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 
                                                19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#664481" />
                                            </svg>
                                        </span>

                                        <Carousel images={images} parentID={service.id} />

                                        <div className="bg-white py-4 px-2">
                                            <div className="flex items-center px-2 relative py-8">
                                                <div className="flex items-center justify-center absolute left-0">
                                                    <div className="flex items-center justify-center">
                                                        <img className="w-10 h-10 rounded-full" src={service.userAvatar} alt="" />
                                                    </div>
                                                    <div className="flex items-center justify-center text-sm px-2 py-3">
                                                        <a href="" className="hover:border-b-2 border-gray-600">{service.userName}</a>
                                                    </div>
                                                </div>
                                                <div className="flex items-center justify-center absolute right-0">
                                                    <span className="text-xs">Level 2</span>
                                                    <div className="flex px-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                                            <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                                            <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7">
                                                            <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <a className="text-sm text-gray-400">
                                                    <p className="border-gray-600 hover:text-black text-start">
                                                        {service.content}
                                                    </p>
                                                </a>
                                            </div>
                                            <div className="flex items-center">
                                                <div className="flex items-center justify-center py-3">
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <div className="flex items-center justify-center px-2 py-3">
                                                    {service.reviewMark}
                                                </div>
                                                <div className="flex items-center justify-center text-gray-400 py-3">
                                                    ({service.reviewCount})
                                                </div>
                                            </div>
                                            <div className="flex items-center px-1 text-gray-400 text-sm">
                                                From ({service.money})
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            <ContactMe isOpen={isContactme} onClose={() => setIsContactMe(false)} />
        </div>
    )
}

export default AboutMe;