"use client"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"

type Skill = {
    id: number
    skill: string
}

type Features = {
    id: number,
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

const UserInfomation: FC = () => {

    const [showAll, setShowAll] = useState<boolean>(false);
    const [isFeaturesListClose, setIsFeaturesListClose] = useState<boolean>(false);
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const handleMouseEnter = (id: number) => {
        setHoveredItem(id);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    const [skill, setSkill] = useState<Skill[]>([
        {
            id: 0,
            skill: "Organic Social Promotions"
        },
        {
            id: 1,
            skill: "Instagram hashtags"
        },
        {
            id: 2,
            skill: "Insagram growth"
        },
        {
            id: 3,
            skill: "Instagram"
        },
        {
            id: 5,
            skill: "Instagram expert"
        },
        {
            id: 6,
            skill: "Instagram growth expert"
        },
        {
            id: 7,
            skill: "Instagram hashtags expert"
        },
        {
            id: 8,
            skill: "Maeketing expert"
        },
        {
            id: 9,
            skill: "Artificial Intelligence expert"
        },
        {
            id: 10,
            skill: "Instagram hashtags expert"
        },
        {
            id: 11,
            skill: "Marketing expert"
        },
        {
            id: 12,
            skill: "Web researcher"
        },
    ])

    const [featuresList, setFeaturesList] = useState<Features[]>([
        { id: 0, content: "Hand-plcked freelancer" },
        { id: 1, content: "High-quality work" },
        { id: 2, content: "Experienced with businesses" },
        { id: 3, content: "Guaranteed satisfaction" },
    ])

    const [previousWork, setPreviousWork] = useState<PreviousWork[]>(
        [
            { id: 0, img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/6278b97f97694d8303deaf07b705181b-1647870056/61b359a0eb3b1322fb79ee60.png", content: "Beetroot" },
            { id: 1, img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/1ac6ce3ec9b7a48818dabb48167a33ce-1647867189/61b36b22eb3b1322fb79ee67.png", content: "Bodbygod" },
        ]
    )

    const [previousWorkdetail, setPreviousWorkDetail] = useState<PreviousWorkDetail[]>(
        [
            {
                id: 0,
                userAvatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
                term: "Sep 2021-Mar-2023",
                productImage: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/6278b97f97694d8303deaf07b705181b-1647870056/61b359a0eb3b1322fb79ee60.png",
                title: "71 Magazlne",
                workResult: "Helping their Instagram page grow for almost 2 years by engaging with relevant pages and niche.",
                content: "The Award-wining 71 Magazine - more an experience than a publication - brings you the Arts less traveled in the form of stellar world-class photography. film, fashion, music,art, design, and related tech, you won't find anywhere else.",
                category: "Books & Literature",
                parentID: 0
            },
            {
                id: 1,
                userAvatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
                term: "Sep 2021-Mar-2023",
                productImage: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/1ac6ce3ec9b7a48818dabb48167a33ce-1647867189/61b36b22eb3b1322fb79ee67.png",
                title: "Sinal Gorumet",
                workResult: "Helping their Instagram page grow for almost 2 years by engaging with relevant pages and niche.",
                content: "Sinai Gourmet is an artisanal sauce company that specializes in making fresh, clean label, flavourful gourmet sauces to enhance your meals.",
                category: "Books & Literature",
                parentID: 1
            }
        ]
    )

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const displaySkills = showAll ? skill : skill.slice(0, 5);

    // const visibleContent = isExpanded ? content : content.substring(0, 100) + '...';


    return (
        <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-16 md:mt-14 sm:mt-20 mt-28">
            <div className="flex flex-col">
                <div className="flex items-center">
                    <div className="flex justify-center items-center lg:w-32 lg:h-32 md:w-28 md:h-28 sm:w-20 sm:h-20 w-14 h-14">
                        <img className="w-full h-full" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png" alt="" />
                    </div>
                    <div className="flex justify-center flex-col lg:px-4 md:px-4 sm:px-2 px-2 py-2">
                        <span className="text-base font-bold">Vitalii D.</span>
                        <div className="flex items-center">
                            <svg
                                className="w-4 h-4 text-yellow-300 ms-1"
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
                        <span className="py-1 lg:text-sm md:text-sm sm:text-xs text-xs">Instagram Followers Growth and Clean up Solutions</span>
                        <div className="flex items-center">
                            <img src="/image/icon/flag.png" className="w-6 h-6 rounded-full" alt="" />
                            <span className="px-2 lg:text-sm md:text-sm sm:text-xs text-xs">United Kingdom</span>
                        </div>
                    </div>
                </div>
                <div className={`${isFeaturesListClose ? "hidden" : "lg:w-[50%] md:w-[65%] sm:w-full w-full flex justify-center flex-col mt-4 border shadow-lg px-4 py-4 rounded-lg relative"}`}>
                    <div className="w-full flex items-center"><span className="font-bold text-base py-2">What you get when hiring Pro freelancers</span></div>
                    <div className="lg:w-[75%] md:w-[60%] sm:w-[70%] w-[70%] grid lg:grid-rows-2 md:grid-rows-4 sm:grid-rows-4 grid-rows-4 grid-flow-col gap-4">
                        {
                            featuresList.map((feature) => (
                                <div className="flex items-center" key={feature.id}>
                                    <svg width="12" height="12" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg" fill="#2E25AD">
                                        <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 
                                        0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                                    </svg>
                                    <span className="px-2 text-xs">{feature.content}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-6 h-6 flex justify-center items-center absolute right-0 top-0 cursor-pointer" onClick={() => setIsFeaturesListClose(true)}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                    <div className="w-16 h-16 absolute lg:right-10 lg:top-15 md:right-10 md:top-5 sm:right-5 right-5 top-20">
                        <svg role="img" aria-label="A hand holding a wand with Fiverr Pro symbol" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102.7 110.9">
                            <path fill="#b1abff" stroke="#b1abff" strokeMiterlimit="10" strokeWidth="1.5"
                                d="M75.5 76.8c.2-1.5-1.7-4.3-3-5.9-3.5 1.6-6.4 4.1-8.6 7.3-2.1 3.2-3.3 6.9-3.4 10.7-.1 3.8.8 7.6 2.7 10.9 1.9 3.3 4.7 6 8.1 7.8 1.5-10.7 4-29.2 4.2-30.8zM95.8 86.2c-.5 4.2-3.2 15.9-3.9 20.9 1.4-.8 2.6-1.8 3.8-3 7.6-7.6 7.9-19.7 1.5-27.5-.6 3-1.3 8.8-1.4 9.6z"></path>
                            <path fill="none" stroke="#222325" strokeLinejoin="bevel" strokeWidth="1.5"
                                d="M19.9 33.1 2.4 27.8M80.3 62.1 32.8 39.8M11.4 6.4l12.8 20.2M30 23l-2.5-10.1M37.1 24.8 47.6 1M63.5 19.2l3.5-1.9M43.7 30.1l16.9-9.3M54 31.9l7.9-2.9M46.8 37.5l25.3-.5M52.6 62l4.2 5M41.2 48.6l7.3 8.6M34.1 50.5 38 72.2M27.3 49.3l-8 22.8M20.2 42.2 12 45.6M9.1 47 1 50.4M13.8 23.6l4.4 1.5M16.3 22.1l-.6 4.6M53.8 44l4.9.5M56 41.8l.6 4.9M14.6 54.1l5.5-.5M17.2 51.1l.5 5.5"></path>
                            <path fill="#b1abff" stroke="#b1abff" strokeMiterlimit="10" strokeWidth="1.5" d="M8 39.1c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0-.7 1.8 0 2.5 1.8.7 2.5 0z"></path>
                            <path fill="#fff" stroke="#b1abff" strokeMiterlimit="10" strokeWidth="1.5" d="M36.9 40.4c2.5-2.5 2.5-6.5 0-9s-6.5-2.5-9 0-2.5 6.5 0 9 6.5 2.5 9 0z"></path>
                            <path fill="#b1abff" stroke="#b1abff" strokeMiterlimit="10" strokeWidth="1.5" d="M50.9 18c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0-.7 1.8 0 2.5 1.8.7 2.5 0zM45.7 64.4c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0-.7 1.8 0 2.5c.6.7 1.8.7 2.5 0z"></path>
                            <path fill="none" stroke="#222325" strokeLinejoin="bevel" strokeWidth="1.5" d="M83.1 51.7c-2.8-7.9-5.8-13-3.5-14.9.1-.1.2-.2.4-.3.2-.1.3-.1.5-.1s.3 0 .5.1.3.1.4.3c.1 0 .1.1.2.2 1.9 1.9 4 7.1 5.1 9.4 1.4 3.1 4.7 11.1 4.7 11.1"></path>
                            <path fill="none" stroke="#222325" strokeWidth="1.5" d="M87 47.1c-1.1-3.9-2.9-8.8-1.1-10.7 1.9-1.9 3.7 4 4.8 7 1.1 3 4.2 12.9 4.2 12.9s-.3-10-.3-12.7 1.2-3.6 1.9-3.3c1.2.3 2 2.2 2.6 8.7.6 6.4-.8 21.1-1.7 25.8-.9 4.8-1.7 9.8-2.1 13.3-.4 3.4-3.9 19.4-3.9 19.4-11.7 5.2-20.1.3-20.1.3l-.2-.1 4.2-30.8c.1-2.1-2.1-4.6-4.7-8.2-1.7-2.2-3.3-4.6-4.7-7.1-1.3-2.5-2.3-4.7-.9-5.8 1.4-1.1 4.9 2 7.4 5.2s6.2 5 8.2 1.4-2.8-7.3-5.1-7.4-7.4 1.4-9 0c-1.7-1.4-2-3.4 4.1-4.5 6-1.1 10.3-.5 11.9.6s4.5 8.3 4.5 8.3"></path>
                            <path fill="#222325" d="m73.4 91.9 20.8 2.8-2.5 12.7s-7.1 2.9-11.5 2.4c-3-.4-5.9-1.1-8.8-2l2-15.9z"></path>
                            <path fill="#2e25ad" fillRule="evenodd" d="M34 27.1c-1-.8-2.4-.8-3.4 0L29 28.5c-.3.3-.7.5-1.1.5l-2 .5c-1.3.3-2.1 1.4-2.1 2.7v2.1c0 .4-.1.8-.3 1.2l-.9 1.9c-.6 1.2-.2 2.6.8 3.4l1.6 1.3c.3.3.6.6.8 1l.9 1.9c.6 1.2 1.8 1.8 3.1 1.5l2-.5c.4-.1.8-.1 1.2 0l2 .5c1.3.3 2.5-.3 3.1-1.5l.9-1.9c.2-.4.4-.7.8-1l1.6-1.3c1-.8 1.3-2.2.8-3.4l-.9-1.9c-.2-.4-.3-.8-.3-1.2v-2.1c0-1.3-.9-2.5-2.1-2.7l-2-.5c-.4-.1-.8-.3-1.1-.5L34 27.1zm3.2 8.5c.4-.4.4-1.1 0-1.5s-1.1-.4-1.5 0l-4 4.1-2.1-2c-.4-.4-1.1-.4-1.5 0s-.4 1.1 0 1.5l2.8 2.7c.4.4 1 .4 1.4 0l4.9-4.8z" clipRule="evenodd">
                            </path>
                        </svg>
                    </div>
                </div>
                <div className="flex justify-center flex-col w-full mt-4">
                    <strong className="px-2">Expert In:</strong>
                    <div className="px-2 flex items-center">
                        <svg width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#2E25AD">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path>
                        </svg>
                        <span className="px-2 text-xs py-1">Social Media Marketing</span></div>
                </div>
                <div className="flex justify-center flex-col w-full mt-4">
                    <strong className="px-2">About me</strong>
                    <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full px-2">
                        <span className="lg:text-sm md:text-sm sm:text-sm text-xs">
                            Hello, my name is Vitalii, I specialize in social media Instagram promotions for businesses.
                            For the last ten years, I've been looking for new solutions and technologies related to SMM.
                            My goal is to increase brand reach and awareness of my client's projects. Feel free to connect with me on Fiverr.
                            I hope it'll be the start of a lasting partnership.
                        </span>
                    </div>
                </div>
                <div className="flex justify-center flex-col w-full mt-4">
                    <strong className="px-2">Skills</strong>
                    <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full px-2 flex items-center flex-wrap gap-2">
                        {
                            displaySkills.map((Skill) => (
                                <div key={Skill.id} className="w-auto px-3 py-1 flex justify-center items-center mt-2 border border-black text-sm rounded-full">
                                    {Skill.skill}
                                </div>
                            ))
                        }
                        {
                            !showAll && (
                                <button onClick={() => setShowAll(!showAll)} className="w-auto px-2 py-1 flex justify-center items-center mt-2 text-sm rounded-full border border-black">Show more...</button>
                            )
                        }
                    </div>
                </div>
                <div className="flex w-full mt-4 lg:flex-row md:flex-row sm:flex-row flex-col relative">
                    <strong className="px-2">Among my clients :</strong>
                    {previousWork.map(item => (
                        <div key={item.id} onMouseEnter={() => handleMouseEnter(item.id)} onMouseLeave={handleMouseLeave} className="flex px-2 object-cover relative flex-col">
                            <div className="flex">
                                <div className="w-6 h-6 flex">
                                    <img src={item.img} className="w-full h-full object-cover" alt="" />
                                </div>
                                <span className="px-2 text-sm">{item.content}</span>
                            </div>
                            {
                                hoveredItem === item.id && (
                                    <div className="flex flex-col justify-center border w-80 px-2 py-4 transition duration-150 absolute top-6 bg-white z-50">
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
                                            <div className="w-full border bg-gray-100 p-2">
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
    )
}

export default UserInfomation;