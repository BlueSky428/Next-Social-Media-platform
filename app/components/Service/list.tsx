"use client"
import { categoryData } from "@/app/data/Service/serviceData";
import { faHeart, faInfo, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import { packagesData, featuresData, deliveryTimesData, premiumDeliveryTimesData } from "@/app/data/Service/serviceData";
import ContactMe from "../Freelancer/contactMe";

type category = {
    id: number
    category: string
    active: boolean
}

type ListData = {
    price: number;
    posts: string;
    details: string;
    deliveryTime: string
    socialPost: number
}

const List: FC = () => {

    const [allCategory, setCategory] = useState<category[]>(categoryData);
    const [currentID, setCurrentID] = useState<number>(0);

    const [isContact, setIsContact] = useState<boolean>(false)

    const handleActiv = (id: number) => {
        const temp = categoryData.map((item) => (
            item.id === id
                ? { ...item, active: true }
                : { ...item, active: false }
        ))
        setCategory(temp);
        setCurrentID(id)
    }

    return (
        <div className="flex flex-col w-full h-auto bg-white">
            <div className="lg:flex md:flex items-center w-full h-auto justify-end sm:hidden hidden">
                <div className="flex justify-center items-center gap-4">
                    <FontAwesomeIcon icon={faHeart} />
                    <div className="relative bg-gray-300 text-black px-2 py-1 rounded-lg inline-block cursor-pointer">
                        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-b-8 border-r-8 border-transparent border-r-gray-300"></div>
                        7,863
                    </div>
                    <div className="px-4 py-2 rounded-lg bg-gray-300 cursor-pointer">
                        <svg width="16" height="16" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                            <path d="M11 10c-.707 0-1.356.244-1.868.653L5.929 8.651a3.017 3.017 0 0 0 0-1.302l3.203-2.002a3 3 0 1 0-1.06-1.696L4.867 5.653a3 3 0 1 0 0 4.694l3.203 2.002A3 3 0 1 0 11 10Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex flex-col justify-center mt-8 border">
                <div className="w-full flex justify-between items-center">
                    {
                        allCategory.map((item) => (
                            <div key={item.id} className={`w-[33%] flex justify-center items-center py-4 cursor-pointer font-bold transition duration-300 border-b ${item.active === true ? "bg-gray-100 border-b-4 border-b-black" : "bg-white"}  ${item.id == 2 ? "border-r-none" : "border-r"}`} onClick={() => handleActiv(item.id)}>{item.category}</div>
                        ))
                    }
                </div>
                <div className="w-full flex flex-col justify-center">
                    <div className="w-full flex items-center p-2 mt-4">
                        <span className="text-xl font-bold text-gray-700 px-2">€{packagesData[currentID].price}</span>
                        <div className="tooltip p-2 rounded-lg">
                            <span className="w-4 h-4 rounded-full border flex justify-center items-center border-black">
                                <FontAwesomeIcon icon={faInfo} width={4} />
                            </span>
                            <span className="tooltip-text bg-blue-500 text-xs">
                                <span>To keep things simple, Fiverr may round</span><br />
                                <span>up prices that contain decimals. The number</span><br />
                                <span>you see here is the price used at checkout</span>
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex items-center py-2 px-4">
                        <span>Save up to 15% with <strong className="text-[#664481] cursor-pointer">Subscribe to Save</strong></span>
                        <div className="flex justify-center">
                            <div className="tooltip p-2 rounded-lg">
                                <span className="w-4 h-4 rounded-full border flex justify-center items-center border-black">
                                    <FontAwesomeIcon icon={faQuestion} width={6} color="black" />
                                </span>
                                <span className="tooltip-text bg-blue-500 px-2 text-xs">
                                    <span className="py-2">Este es un tooltip hecho con Tailwind CSS</span>
                                    <li>Save time & effort with automatic monthly orders</li>
                                    <li>No commitment—cancel anytime</li>
                                    <li>Work long-term with your seller for best results</li>
                                    <li>We’ll send you a reminder before each order</li>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center p-2 px-4 text-sm">
                        {packagesData[currentID].posts} {packagesData[currentID].details}
                    </div>
                    <div className="w-full flex items-center p-2 px-4 text-sm gap-2">
                        <div className="flex gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                                <path d="M9 4H7v5h5V7H9V4z"></path>
                            </svg>
                            <span className="font-bold">{packagesData[currentID].deliveryTime} delivery</span>
                        </div>
                        <div className="flex gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                            </svg>
                            <span className="font-bold">Unlimited Revisions</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-center px-4">
                        <div className="flex items-center gap-2">
                            <img src="/image/icon/tick.png" alt="" />
                            <span className="text-sm text-gray-500">Page/channel evaluation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/image/icon/tick.png" alt="" />
                            <span className="text-sm text-gray-500">{packagesData[currentID].socialPost} social posts created</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/image/icon/tick.png" alt="" />
                            <span className="text-sm text-gray-500">Custom graphics</span>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center px-4 mt-2 py-2">
                        <button className="w-[90%] flex justify-center items-center text-white font-bold bg-black py-2 relative hover:bg-opacity-90 rounded">
                            <span>Continue</span>
                            <span className="absolute right-4">
                                <svg width="16" height="16" fill="white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.92332 2.96885C9.63854 2.66807 9.1768 2.66807 8.89202 2.96885C8.60723 3.26963 8.60723 3.75729 8.89202 4.05807L11.6958 7.01931H1.48616C1.08341 7.01931 0.756918 7.36413 0.756918 7.7895C0.756918 8.21487 1.08341 8.5597 1.48616 8.5597H11.8436L8.89202 11.677C8.60723 11.9778 8.60723 12.4654 8.89202 12.7662C9.1768 13.067 9.63854 13.067 9.92332 12.7662L14.0459 8.41213C14.3307 8.11135 14.3307 7.62369 14.0459 7.32291L13.977 7.25011C13.9737 7.24661 13.9704 7.24315 13.9671 7.23972L9.92332 2.96885Z"></path>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="w-full flex justify-center items-center py-2 text-sm cursor-pointer">Compare pakcages</div>
                </div>
            </div>

            <div className="w-full items-center justify-center mt-6 rounded-lg  md:hidden lg:flex px-4 cursor-pointer">
                <div className="w-full p-2 flex justify-center cursor-pointer bg-gray-100 hover:bg-gray-600 rounded hover:text-white transition duration-300" onClick={() => setIsContact(true)}>
                    Contact me
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
            <ContactMe isOpen={isContact} onClose={() => setIsContact(false)} />
        </div>
    )
}

export default List;