"use client"
import { FC } from "react"

type ComponentProps = {
    setComponent?: any,
    currentComponent?: string,
    setSelect?: any
}

const MediaSection: FC<ComponentProps> = ({ setComponent, currentComponent, setSelect }) => {
    const PreviousClick = () => {
        if (currentComponent === "Media") {
            setComponent("Select");
            setSelect(false);
        } else if (currentComponent === "Pay") {
            setComponent("Media");
        }
    }

    return (
        <div className="lg:w-[35%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center
                                lg:mt-4 md:mt-4 sm:mt-4 mt-4 rounded-lg">
            <div className="w-full flex justify-center items-center mt-4">
                <div onClick={PreviousClick} className="cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#581C87] rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-[#581C87] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#581C87] transition-all duration-300 transform group-hover:translate-x-full ease">To previous step</span>
                    <span className="relative invisible">To previous step</span>
                </div>
            </div>
        </div>
    )
}

export default MediaSection;