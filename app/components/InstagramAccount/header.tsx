"use client"
import { categoryData, followerData } from "@/app/data/InstagramAccount/InstagramData";
import { FC, useState } from "react";

const InstagramHeader: FC = () => {

    const [navBar, setNavBar] = useState<boolean>(false);
    const [isCategory, setIsCategory] = useState<boolean>(false);
    const [isFollower, setIsFollower] = useState<boolean>(false);

    const handleSetList = () => {
        if (navBar) setNavBar(false);
        else setNavBar(true)
    }


    return (
        <div className="w-full h-[10%] flex lg:justify-center md:justify-center sm:justify-between justify-between items-center">
            <div className="lg:w-[10%] h-full flex justify-center items-center lg:px-0 md:px-0 sm:px-4 px-4">
                <span className="font-bold text-white text-2xl cursor-pointer">Influncity</span>
                {/* <img src="/image/InstagramAccoutnLogo.svg" alt="" /> */}
            </div>
            <div className="lg:w-[80%] h-full lg:flex md:flex sm:hidden hidden justify-center items-center">
                <div className="h-auto lg:px-2 flex justify-center items-center text-white cursor-pointer">
                    <div className="relative inline-block text-left">
                        <div className="group">
                            <button type="button"
                                className="inline-flex justify-center items-center w-full lg:px-4 md:px-1 py-2 text-sm font-medium text-white">
                                CATEGORY
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                </svg>
                            </button>
                            <div className="absolute left-0 w-40 h-96 overflow-y-auto mt-1 origin-top-left bg-white divide-y divide-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                <div className="py-1">
                                    {
                                        categoryData.map((item) => (
                                            <a key={item.id} href="#" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 trnasition duration-300">{item.category}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto lg:px-2 flex justify-center items-center text-white cursor-pointer">
                    <div className="relative inline-block text-left">
                        <div className="group">
                            <button type="button"
                                className="inline-flex justify-center items-center w-full lg:px-4 md:px-1 py-2 text-sm font-medium text-white">
                                FOLLOWERS
                                <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                                </svg>
                            </button>
                            <div className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                                <div className="py-1">
                                    <div className="py-1">
                                        {
                                            followerData.map((item) => (
                                                <a key={item.id} href="#" className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 trnasition duration-300">{item.content}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-auto lg:px-4 md:px-2 flex justify-center items-center text-white cursor-pointer text-sm font-medium">
                    FAST DELIVERY
                </div>
                <div className="h-auto lg:px-4 md:px-2 flex justify-center items-center text-white cursor-pointer text-sm font-medium">
                    100K +
                </div>
                <div className="h-auto lg:px-4 md:px-2 flex justify-center items-center text-white cursor-pointer text-sm font-medium">
                    HOW IT WORKS
                </div>
                <div className="h-auto lg:px-4 md:px-2 flex justify-center items-center text-white cursor-pointer text-sm font-medium">
                    CELL
                </div>
            </div>
            <div className="lg:w-[10%] h-full md:w-auto lg:justify-end md:justify-end sm:justify-center justify-center items-center">
                <div className="h-full lg:px-4 md:px-2 justify-center items-center text-white cursor-pointer text-sm font-medium  lg:flex md:flex sm:hidden hidden">
                    MY ACCOUNT
                </div>
                <button className="rounded-lg lg:hidden md:hidden sm:flex flex items-center justify-center h-full w-12">
                    <div className="flex w-full h-full cursor-pointer items-center justify-center rounded-lg group" onClick={handleSetList}>
                        <div className={`${navBar ? "-space-y-1" : "space-y-1"}`}>
                            <span className={`block h-1 w-6 origin-center rounded-lg bg-white trnasition ease-in-out duration-300 ${navBar ? "rotate-45" : ""}`}></span>
                            <span className={`block h-1 w-6 origin-center rounded-lg bg-white ${navBar ? "hidden" : ""}`}></span>
                            <span className={`block h-1 w-6 origin-center rounded-lg bg-white trnasition ease-in-out duration-300 ${navBar ? "-rotate-45" : ""}`}></span>
                        </div>
                    </div>
                </button>
            </div>

            <div className={`${navBar ? "max-w-2xl mx-auto bg-white h-screen fixed top-0 z-50 md:block sm:block block animate-slide-left-in shadow-2xl" : "hidden"}`}>
                <aside className="w-64 h-screen" aria-label="Sidebar">
                    <div className="w-full h-screen flex flex-col items-center px-2 py-4 overflow-y-auto">
                        <div className="w-full h-auto px-4 py-2 flex items-center">
                            <img className="w-36" src="/image/Logo.png" alt="" />
                        </div>
                        <div className="w-full h-auto flex flex-col justify-center mt-4 space-y-4">
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center" onClick={() => setIsCategory(!isCategory)}>
                                    <span className="font-bold">CATEGORY</span>
                                    <span className="px-2">
                                        <svg className={`${isCategory ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                                <li className={`${isCategory ? "space-y-2 h-auto px-4" : "hidden"}`}>
                                    {
                                        categoryData.map((item) => (
                                            <ul key={item.id} className="p-2 flex items-center cursor-pointer hover:bg-gray-100 trnasition duration-300">
                                                {item.category}
                                            </ul>
                                        ))
                                    }
                                </li>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center" onClick={() => setIsFollower(!isFollower)}>
                                    <span className="font-bold">FOLLOWERS</span>
                                    <span className="px-2">
                                        <svg className={`${isFollower ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="black" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </span>
                                </button>
                                <li className={`${isFollower ? "space-y-2 h-auto px-4" : "hidden"}`}>
                                    {
                                        followerData.map((item) => (
                                            <ul key={item.id} className="p-2 flex items-center cursor-pointer hover:bg-gray-100 trnasition duration-300">
                                                {item.content}
                                            </ul>
                                        ))
                                    }
                                </li>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center">
                                    <span className="font-bold">FAST DELIVERY</span>
                                </button>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center">
                                    <span className="font-bold">100K +</span>
                                </button>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center">
                                    <span className="font-bold">How IT WORKS</span>
                                </button>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center">
                                    <span className="font-bold">SELL</span>
                                </button>
                            </ul>
                            <ul className="space-y-2 w-full">
                                <button type="button" className="w-full px-4 flex items-center">
                                    <span className="font-bold">MY ACCOUNT</span>
                                </button>
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default InstagramHeader