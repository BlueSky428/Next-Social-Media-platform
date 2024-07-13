"use client"
import { faClose, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";
import { skillData } from "@/app/data/Freelancer/freelancerData"
import SaveModal from "./saveModa";

type MoreAboutMeProps = {
    isOpen?: boolean
    onClose?: any
}

type Skill = {
    id: number
    skill: string
}

const MoreAboutMe: FC<MoreAboutMeProps> = ({ isOpen, onClose }) => {

    const [skill, setSkill] = useState<Skill[]>(skillData);
    const [saveModalIsOpen, setSaveModalIsOpen] = useState<boolean>(false);

    return (
        <>
            <div className={`${isOpen ? "fixed left-0 top-0 flex flex-col h-screen z-50 w-full justify-center bg-black bg-opacity-50" : "hidden"}`}>
                <div className="h-[10%]"></div>
                <div className="w-full h-[90%] bg-white rounded-t-lg overflow-y-auto flex flex-col items-center lg:px-4 md:px-4 sm:px-2 px-2 py-12 animate-slide-up relative">
                    <div className="absolute top-5 right-0 flex justify-end items-center px-8">
                        <div className="cursor-pointer" onClick={onClose}>
                            <FontAwesomeIcon icon={faClose} color="black" />
                        </div>
                    </div>
                    <div className="flex px-2 lg:w-[80%] md:w-[80%] sm:w-full w-full justify-between h-auto lg:flex-row md:flex-row sm:flex-col flex-col space-y-4">
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
                                    <img src="/image/icon/flag.png" className="w-6 h-6 rounded-full object-cover" alt="" />
                                    <span className="px-2 lg:text-sm md:text-sm sm:text-xs text-xs">United Kingdom</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col h-12 gap-4">
                            <div className="p-2 flex justify-center items-center bg-black rounded-lg h-full cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="#fff" xmlns="http://www.w3.org/2000/svg" role="img">
                                    <path clipRule="evenodd" d="M15.48.423a.75.75 0 0 1 .255.724l-2.8 14a.75.75 0 0 1-1.186.453l-3.982-2.987-2.465 2.875A.75.75 0 0 1 3.982 15l.005-5.598a.75.75 0 0 1 .333-.623l4.196-2.803a.75.75 0 1 1 .833 1.248L6.034 9.438l5.663 4.248 2.296-11.475L2.517 6.8l.801.6a.75.75 0 1 1-.9 1.2L.55 7.201A.75.75 0 0 1 .72 5.903l14-5.6a.75.75 0 0 1 .758.12Zm-9.994 10.48-.002 2.068 1.08-1.26-1.078-.809Z"></path>
                                </svg>
                                <span className="text-white font-bold lg:text-base md:text-base sm:text-sm text-sm px-2">Contact me</span>
                            </div>
                            <div className="px-2 flex justify-center items-center bg-white border border-gray-400 rounded-lg h-full cursor-pointer" onClick={() => setSaveModalIsOpen(true)}>
                                <FontAwesomeIcon icon={faHeart} color="black" />
                                <span className="text-black font-bold  lg:text-base md:text-base sm:text-sm text-sm px-2 lg:py-0 md:py-0 sm:py-2 py-1">Save</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[80%] md:w-[80%] sm:w-full w-full lg:px-4 md:px-4 sm:px-2 px-2 flex items-center h-auto mt-12 relative lg:flex-row md:flex-row sm:flex-col flex-col">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full flex flex-col justify-center space-y-2">
                            <div className="text-black font-bold text-xl">About me</div>
                            <div className="flex w-full items-center text-wrap">
                                Hello There I am Shimul, a professional Social Media Marketing Specialist and expert in Instagram Organic Growth with more than 3+ years of experience in this industry.
                                I will help you to grow your Instagram account with Real Organic Followers and Engagement. Work with me and get professional service to increase your business and build up your brand.
                                I assure you that if given the chance, I will provide you with top-notch results.
                                Client satisfaction is my priority. I freelance exclusively on Fiverr. If you have any questions, Feel free to contact me. Best Regards shimul1921
                            </div>
                        </div>
                        <div className="lg:absolute md:absolute lg:top-0 lg:right-0 md:top-0 md:right-0 border-dotted border 
                    border-[#664481] lg:w-[25%] md:w-[25%] sm:w-full flex flex-col justify-center shadow-lg cursor-pointer lg:mt-0 md:mt-0 sm:mt-4 mt-4">
                            <div className="w-full py-8 flex items-center px-4 border-b">
                                <FontAwesomeIcon icon={faUser} />
                                <span className="px-2 text-black font-bold text-xl">On Fiverr since Aug 2023</span>
                            </div>
                            <div className="flex flex-col justify-center px-2 py-8">
                                <span className="font-bold text-black text-base py-2 px-2">I speak</span>
                                <span className="font-bold text-black text-base py-2 px-2 space-x-2">
                                    <span>Bengail</span>
                                    <span className="text-gray-400">Native/Billngual</span>
                                </span>
                                <span className="font-bold text-black text-base py-2 px-2 space-x-2">
                                    <span>English</span>
                                    <span className="text-gray-400">Fluent</span>
                                </span>
                                <span className="font-bold text-black text-base py-2 px-2 space-x-2">
                                    <span>Spanish</span>
                                    <span className="text-gray-400">Conversational</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[80%] md:w-[80%] sm:w-full w-full px-4 flex items-center h-auto mt-8">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full flex flex-col justify-center gap-2">
                            <div className="text-black font-bold text-xl">Skills</div>
                            <div className="w-full flex items-center flex-wrap gap-2">
                                {
                                    skill.map((Skill, index) => (
                                        <div key={index} className="py-2 px-4 flex justify-center items-center border rounded-full border-gray-400 lg:text-sm md:text-sm sm:text-xs text-xs">{Skill.skill}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex px-4 lg:w-[80%] md:w-[80%] sm:w-full w-full justify-between h-auto flex-col mt-12">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full flex justify-between center space-y-2">
                            <div className="w-full flex flex-col justify-center">
                                <div className="text-black font-bold text-xl">Successfully completed online</div>
                                <div className="flex items-center gap-2">
                                    <img className="w-10 h-10" src="https://fiverr-res.cloudinary.com/image/upload/q_auto/v1/attachments/generic_asset/asset/c2116107ec34f87746f9564e50862219-1571145219855/Online%20Freelancing%20Essentials_%20be%20a%20successful%20Fiverr%20seller.svg" alt="" />
                                    <div className="flex flex-col">
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Online Freelancing Essentials: be a successful Fiverr seller</span>
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs">Aug 2023</span>
                                    </div>
                                </div>
                            </div>
                            <img className="w-28 h-6 lg:flex md:flex sm:hidden hidden" src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/freelancer_page_perseus/FiverrLearn.3c2d750.svg" alt="" />
                        </div>
                    </div>
                    <div className="flex px-4 lg:w-[80%] md:w-[80%] sm:w-full w-full justify-between h-auto flex-col mt-12">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full flex flex-col justify-between center space-y-2">
                            <div className="text-black font-bold text-xl">Education</div>
                            <div className="flex items-center gap-2">
                                <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/freelancer_page_perseus/Education.9b53994.svg" alt="" />
                                <div className="flex flex-col">
                                    <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">National University</span>
                                    <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">B.A. Degree. Bachelor Of English Literature</span>
                                    <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Graduated 2023</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex px-4 lg:w-[80%] md:w-[80%] sm:w-full w-full justify-between h-auto flex-col mt-12">
                        <div className="lg:w-[50%] md:w-[50%] sm:w-full w-full flex flex-col justify-between center space-y-2">
                            <div className="text-black font-bold text-xl">Certifications</div>
                            <div className="flex flex-col justify-center w-full space-y-2">
                                <div className="flex items-center gap-2">
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/freelancer_page_perseus/Certificate.5a4cacd.svg" alt="" />
                                    <div className="flex flex-col">
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Learning and Earning Development Project Social Media Management</span>
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Graduated 2020</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/freelancer_page_perseus/Certificate.5a4cacd.svg" alt="" />
                                    <div className="flex flex-col">
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Provati IT Instagram Marketing Manager</span>
                                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-bold">Graduated 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SaveModal isOpen={saveModalIsOpen} onClose={() => setSaveModalIsOpen(false)} />
        </>
    )
}

export default MoreAboutMe;