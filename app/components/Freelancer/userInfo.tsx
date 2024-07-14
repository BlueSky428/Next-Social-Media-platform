"use client"
import { skillData, featuresListData, previousWorkData, previousWorkdetailData } from "@/app/data/Freelancer/freelancerData"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FC, useState } from "react"
import MoreAboutMe from "./moreAboutme"
import SaveModal from "./saveModa"
import ContactMe from "./contactMe"

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
    const [moreAboutmeIsOpen, setMoreAboutMeIsOpen] = useState<boolean>(false);
    const [saveModalIsOpen, setSaveModalIsOpen] = useState<boolean>(false);
    const [contactMeIsOpen, setContactMeIsOpen] = useState<boolean>(false);
    const handleMouseEnter = (id: number) => {
        setHoveredItem(id);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    const [skill, setSkill] = useState<Skill[]>(skillData)

    const [featuresList, setFeaturesList] = useState<Features[]>(featuresListData)

    const [previousWork, setPreviousWork] = useState<PreviousWork[]>(previousWorkData)

    const [previousWorkdetail, setPreviousWorkDetail] = useState<PreviousWorkDetail[]>(previousWorkdetailData)

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    const displaySkills = showAll ? skill : skill.slice(0, 5);

    return (
        <>
            <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-16 md:mt-14 sm:mt-20 mt-20 relative">
                <div className="flex flex-col">
                    <div className="flex flex-col px-2">
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
                                </div>
                                <span className="py-1 lg:text-sm md:text-sm sm:text-xs text-xs">Instagram Followers Growth and Clean up Solutions</span>
                                <div className="flex items-center">
                                    <img src="/image/icon/flag.png" className="w-6 h-6 rounded-full" alt="" />
                                    <span className="px-2 lg:text-sm md:text-sm sm:text-xs text-xs">United Kingdom</span>
                                </div>
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
                    <div className="flex w-full mt-4 lg:flex-row md:flex-row sm:flex-row flex-col gap-2">
                        <div className="px-2 bg-gray-100 flex justify-center items-cetner py-1 rounded">
                            <div className="px-1 flex justify-center items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.17031 1.46967L7.81012 4.10948C8.10302 4.40237 8.10302 4.87725 7.81012 5.17014L5.17031 7.80995C4.87742 8.10284 4.40255 8.10284 4.10965 7.80995C3.81676 7.51706 3.81676 7.04218 4.10965 6.74929L5.46913 5.38981H4.33333C2.94066 5.38981 1.75 6.58612 1.75 8.13981C1.75 9.6935 2.94066 10.8898 4.33333 10.8898C4.74755 10.8898 5.08333 11.2256 5.08333 11.6398C5.08333 12.054 4.74755 12.3898 4.33333 12.3898C2.04411 12.3898 0.25 10.4521 0.25 8.13981C0.25 5.8275 2.04411 3.88981 4.33333 3.88981L5.46913 3.88981L4.10965 2.53033C3.81676 2.23744 3.81676 1.76256 4.10965 1.46967C4.40255 1.17678 4.87742 1.17678 5.17031 1.46967ZM11.6667 3.88981C11.2525 3.88981 10.9167 4.2256 10.9167 4.63981C10.9167 5.05402 11.2525 5.38981 11.6667 5.38981C13.0593 5.38981 14.25 6.58612 14.25 8.13981C14.25 9.6935 13.0593 10.8898 11.6667 10.8898H10.7928L12.1523 9.53033C12.4452 9.23744 12.4452 8.76256 12.1523 8.46967C11.8594 8.17678 11.3845 8.17678 11.0916 8.46967L8.45184 11.1095C8.15895 11.4024 8.15895 11.8772 8.45184 12.1701L11.0916 14.8099C11.3845 15.1028 11.8594 15.1028 12.1523 14.8099C12.4452 14.5171 12.4452 14.0422 12.1523 13.7493L10.7928 12.3898H11.6667C13.9559 12.3898 15.75 10.4521 15.75 8.13981C15.75 5.8275 13.9559 3.88981 11.6667 3.88981Z">
                                    </path>
                                </svg>
                            </div>
                            <span className="px-1">Clients keep coming back</span>
                        </div>
                        <div className="px-2 bg-gray-100 flex justify-center items-cetner py-1 rounded">
                            <div className="px-1 flex justify-center items-center">
                                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.2724 0.818098C4.35587 0.484223 4.65586 0.25 5.00001 0.25H8.50001C8.7275 0.25 8.94269 0.353253 9.08504 0.530704C9.22738 0.708156 9.2815 0.940625 9.23215 1.1627L8.43497 4.75H12.5C12.7782 4.75 13.0336 4.90401 13.1634 5.1501C13.2932 5.39618 13.2761 5.6939 13.119 5.92351L6.61899 15.4235C6.42029 15.7139 6.04643 15.8271 5.72001 15.6958C5.39358 15.5644 5.20236 15.2238 5.26021 14.8767L6.11466 9.75H3.00001C2.76906 9.75 2.55098 9.6436 2.40885 9.46156C2.26672 9.27952 2.21639 9.04215 2.2724 8.8181L4.2724 0.818098ZM5.58559 1.75L3.96059 8.25H7.00001C7.22047 8.25 7.42977 8.347 7.57227 8.51522C7.71477 8.68344 7.77605 8.90583 7.7398 9.1233L7.29786 11.775L11.0781 6.25H7.50001C7.27252 6.25 7.05732 6.14675 6.91498 5.9693C6.77263 5.79184 6.71852 5.55937 6.76787 5.3373L7.56504 1.75H5.58559Z">
                                    </path>
                                </svg>
                            </div>
                            <span className="px-1">Highly responsive</span>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center lg:w-[30%] md:w-full lg:absolute lg:top-4 lg:right-0 lg:mt-0 md:mt-4 sm:mt-4 mt-4">
                        <div className="lg:w-full md:w-[45%] sm:w-[60%] gap-2 flex items-center justify-between lg:px-0 md:px-4 sm:px-4 px-4">
                            <div className="lg:w-[45%] md:w-[50%] sm:w-1/2 w-1/2 border flex justify-center items-center py-2 cursor-pointer rounded-lg" onClick={() => setMoreAboutMeIsOpen(true)}>More about me</div>
                            <div className="lg:w-[45%] md:w-1/2 sm:w-1/2 w-1/2 border flex justify-center items-center py-2 cursor-pointer rounded-lg" onClick={() => setSaveModalIsOpen(true)}>
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359    2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="gray">
                                    </path>
                                </svg>
                                <span className="px-2">Save</span>
                            </div>
                        </div>
                        <div className="lg:w-full md:w-[45%] sm:w-[60%] flex-col items-center justify-center mt-6 rounded-lg shadow-lg lg:flex">
                            <div className="w-full py-8 lg:flex md:hidden sm:hidden hidden">
                                <div className="flex P-2 w-full">
                                    <div className="px-4 w-auto">
                                        <img className="w-12 h-12" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png" alt="" />
                                    </div>
                                    <div className="flex flex-col justify-center w-auto">
                                        <span className="text-base font-bold">Vitalii D</span>
                                        <span className="text-sm py-1">Offline</span>
                                        <div className="flex items-center">
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentFill" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.28 3.243A5.346 5.346 0 0 1 8 1.75c1.4 0 2.738.54 3.72 1.493a4.994 4.994 0 0 1 1.511 3.148 2.523 2.523 0 0 0-.831-.141h-.8c-.598 0-1.185.211-1.63.609-.45.4-.72.963-.72 1.57v2.142c0 .607.27 1.17.72 1.57a2.452 2.452 0 0 0 1.63.609h.384c-.177.248-.45.497-.834.728-.77.462-1.882.772-3.15.772a.75.75 0 0 0 0 1.5c1.493 0 2.882-.362 3.921-.986.917-.55 1.656-1.37 1.803-2.391.108-.069.21-.146.307-.232.448-.4.719-.963.719-1.57V6.818a6.48 6.48 0 0 0-1.985-4.652A6.847 6.847 0 0 0 8 .25a6.846 6.846 0 0 0-4.765 1.916A6.48 6.48 0 0 0 1.25 6.818v3.753c0 .607.27 1.17.72 1.57a2.452 2.452 0 0 0 1.63.609h.8c.598 0 1.185-.211 1.63-.609.45-.4.72-.963.72-1.57V8.43c0-.607-.27-1.17-.72-1.57A2.452 2.452 0 0 0 4.4 6.25h-.8c-.284 0-.566.048-.831.14a4.994 4.994 0 0 1 1.51-3.147Zm8.97 5.186a.607.607 0 0 0-.218-.451.954.954 0 0 0-.632-.228h-.8a.954.954 0 0 0-.632.228.607.607 0 0 0-.218.45v2.143c0 .151.066.316.218.451.155.138.38.228.632.228h.8c.251 0 .477-.09.632-.228a.607.607 0 0 0 .218-.45V8.428Zm-10.5 0c0-.151.066-.316.218-.451A.953.953 0 0 1 3.6 7.75h.8c.251 0 .477.09.632.228.152.135.218.3.218.45v2.143c0 .151-.066.316-.218.451a.953.953 0 0 1-.632.228h-.8a.953.953 0 0 1-.632-.228.607.607 0 0 1-.218-.45V8.428Z" fill="#74767E">
                                                </path>
                                            </svg>
                                            <span className="text-xs px-2">Ask about free intro calls</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-full md:w-full sm:w-full w-full flex justify-center px-4">
                                <button type="button" className="w-full bg-[#664481] py-2 text-white rounded hover:opacity-80 transition duration-300" onClick={() => setContactMeIsOpen(true)}>Contact me</button>
                            </div>
                            <div className="mt-2 py-6 lg:flex md:hidden sm:hidden hidden">
                                <span className="text-base">Average response time: 5 hours</span>
                            </div>
                        </div>
                        <div className="w-full items-center justify-center mt-6 rounded-lg bg-gray-100 md:hidden lg:flex">
                            <div className="p-2 flex justify-center">
                                <svg width="24" height="24" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#222325">
                                    <path d="M7.837.268a.75.75 0 0 1 .326 0l6 1.333a.75.75 0 0 1 .587.732v6c0 2.69-1.732 4.552-3.31 5.692a13.39 13.39 0 0 1-3.119 1.657c-.025.01-.045.016-.059.02l-.017.007-.005.002h-.002L8 15l-.238.711H7.76l-.005-.002-.017-.006-.059-.02a12.697 12.697 0 0 1-.932-.387 13.39 13.39 0 0 1-2.186-1.271c-1.579-1.14-3.311-3.003-3.311-5.692v-6a.75.75 0 0 1 .587-.732l6-1.333ZM8 15l-.238.711a.752.752 0 0 0 .475 0L8 15Zm0-.8a11.892 11.892 0 0 0 2.56-1.392c1.422-1.026 2.69-2.497 2.69-4.475V2.935L8 1.768 2.75 2.935v5.398c0 1.978 1.268 3.45 2.69 4.476A11.89 11.89 0 0 0 8 14.2Z"></path><path d="M7.71 3.45v.77a2.9 2.9 0 0 0-1.59.568 1.486 1.486 0 0 0-.57 1.197c-.013.418.134.825.412 1.138.4.385.882.676 1.409.851l.336.13v1.557a5.613 5.613 0 0 1-1.097-.196 5.83 5.83 0 0 1-1.05-.381v1.325c.68.285 1.41.431 2.149.432v1.009h.687v-1.029a2.87 2.87 0 0 0 1.617-.58 1.592 1.592 0 0 0 .578-1.283 1.5 1.5 0 0 0-.196-.77 1.907 1.907 0 0 0-.607-.608 7.704 7.704 0 0 0-1.394-.652V5.444c.554.047 1.097.179 1.61.39l.472-1.174a5.689 5.689 0 0 0-2.08-.462V3.45H7.71Zm0 3.193c-.18-.07-.347-.17-.495-.294a.475.475 0 0 1-.154-.364c0-.284.216-.458.648-.522v1.18Zm.687 1.732c.183.077.356.179.512.302a.452.452 0 0 1 .171.356c0 .318-.228.515-.683.592v-1.25Z">
                                    </path>
                                </svg>
                            </div>
                            <div className="flex flex-col justify-center p-1">
                                <span className="text-sm font-bold">Fiverr Pro satisfaction guarantee</span>
                                <span className="text-sm py-2">
                                    Fiverr Pro freelancers deliver top-quality work. If you're not satisfied, we'll refund you.<br />
                                    <a href="" className="border-b font-bold border-black cursor-pointer">About satisfaction guarantee</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <MoreAboutMe isOpen={moreAboutmeIsOpen} onClose={() => setMoreAboutMeIsOpen(false)} />
                <SaveModal isOpen={saveModalIsOpen} onClose={() => setSaveModalIsOpen(false)} />
                <ContactMe isOpen={contactMeIsOpen} onClose={() => setContactMeIsOpen(false)} />
            </div>
        </>
    )
}

export default UserInfomation;