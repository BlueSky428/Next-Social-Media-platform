"use client"
import { intagramToolsData, youtubeToolsData, tictokToolsData, instagramData, facebookData, youtubeData, tiktokData } from "@/app/data/Dashboard/dashboardData";
import serviceContext from "@/app/services/serviceContext";
import { faAccusoft, faFacebook, faInstagram, faServicestack, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faClose, faHome, faMarker, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";

type Instagram = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type FaceBook = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type TikTok = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type Youtube = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

const Header: FC = () => {
    const servicesContext = useContext(serviceContext);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [list, setList] = useState<boolean>(false);
    const [isInstagram, setIsInstagram] = useState<boolean>(false);
    const [isFacebook, setIsFacebook] = useState<boolean>(false);
    const [isTiktok, setIsTiktok] = useState<boolean>(false);
    const [isYoutube, setIsYoutube] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<boolean>(false);

    const [isInstagramDropdownShow, setIsInstagramDropdownShow] = useState<boolean>(false);
    const [isInstagramToolsDropdownShow, setIsInstagramToolsDropdownShow] = useState<boolean>(false);
    const [isYoutubeDropdownShow, setIsYoutubeDropdownShow] = useState<boolean>(false);
    const [isYoutubeToolsDropdownShow, setIsYoutubeToolsDropdownShow] = useState<boolean>(false);
    const [isTikTokDropdownShow, setIsTikTokDropdownShow] = useState<boolean>(false);
    const [isTikTokToolsDropdownShow, setIsTikTokToolsDropdownShow] = useState<boolean>(false);
    const [isFacebookDropDown, setIsFacebookDropdownShow] = useState<boolean>(false);
    const [isFacebookToolsDropDown, setIsFacebookToolsDropdownShow] = useState<boolean>(false);

    const [isShowServiceList, setIsShowServiceList] = useState<boolean>(false);
    const [isSideBar, setIsSideBar] = useState<boolean>(false);

    const [instagram, setInstagram] = useState<Instagram[]>(instagramData);
    const [facebook, setFaceBook] = useState<FaceBook[]>(facebookData);
    const [tiktok, setTikTok] = useState<TikTok[]>(tiktokData);
    const [youtube, setYoutube] = useState<Youtube[]>(youtubeData);

    const Go_To_MarketPage = (item: string) => {
        setOpen(false)
        setList(false)
        setIsSideBar(false);
        if (item === "My Account") {
            router.push("/Login");
        } else if (item === "Marketplace") {
            router.push("/Marketplace");
        } else if (item === "Home") {
            router.push("/homepage");
        }
    }

    const handleSetList = () => {
        if (list) setList(false);
        else setList(true);
    }

    const handleContent = (index: number) => {
        if (index === 1) {
            if (isInstagram) setIsInstagram(false);
            else setIsInstagram(true);

            setIsFacebook(false);
            setIsTiktok(false);
            setIsYoutube(false);
        } else if (index === 2) {
            if (isFacebook) setIsFacebook(false);
            else setIsFacebook(true);

            setIsInstagram(false);
            setIsTiktok(false);
            setIsYoutube(false);
        } else if (index === 3) {
            if (isTiktok) setIsTiktok(false);
            else setIsTiktok(true);

            setIsInstagram(false);
            setIsFacebook(false);
            setIsYoutube(false);
        } else if (index === 4) {
            if (isYoutube) setIsYoutube(false);
            else setIsYoutube(true);

            setIsInstagram(false);
            setIsFacebook(false);
            setIsTiktok(false);
        }
    }

    const handleInstagram = (id: number) => {
        setOpen(false);
        setList(false);
        setIsSideBar(false);
        setDropdown(false);
        localStorage.setItem('servicesStatus', "Instagram" + "-" + instagram[id].content);
        servicesContext?.setServices("Instagram" + "-" + instagram[id].content);
        router.push("/Dashboard");
    }

    const handleFaceBook = (id: number) => {
        setOpen(false);
        setList(false);
        setIsSideBar(false);
        setDropdown(false);
        localStorage.setItem('servicesStatus', "FaceBook" + "-" + facebook[id].content);
        servicesContext?.setServices("FaceBook" + "-" + facebook[id].content);
        router.push("/Dashboard");
    }

    const handleTiktok = (id: number) => {
        setOpen(false);
        setList(false);
        setDropdown(false);
        setIsSideBar(false);

        localStorage.setItem('servicesStatus', "TikTok" + "-" + tiktok[id].content);
        servicesContext?.setServices("TikTok" + "-" + tiktok[id].content);
    }

    const handleYoutube = (id: number) => {
        setOpen(false);
        setList(false);
        setDropdown(false);
        setIsSideBar(false);
        localStorage.setItem('servicesStatus', "Youtube" + "-" + youtube[id].content);
        servicesContext?.setServices("Youtube" + "-" + youtube[id].content);
        router.push("/Dashboard");
    }

    return (
        <>
            <div className="antialiased bg-gray-100 dark:bg-gray-900 w-full fixed z-[50] shadow-lg backdrop-filter backdrop-blur-lg">
                <div className="w-full text-gray-700 bg-white dark:text-black">
                    <div className="flex max-w-screen-xl px-4 mx-auto md:items-center justify-between lg:flex-row md:flex-col sm:flex-col flex-col md:px-6 lg:px-8">
                        <div className="flex flex-row items-center lg:w-auto md:w-full justify-between lg:p-4 md:p-4 sm:p-0 p-0">
                            <a href="/Dashboard" className="text-lg font-semibold tracking-widest text-black uppercase rounded-lg dark:text-black focus:outline-none focus:shadow-outline">
                                <img className="lg:w-36 md:w-32 sm:w-28 w-28" src="/image/Logo.png" alt="" />
                            </a>
                            <button className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setIsSideBar(true)}>
                                <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200" onClick={handleSetList}>
                                    <div className="space-y-1">
                                        <div className="space-y-1">
                                            <span className={`block h-1 w-6 origin-center rounded-full bg-[#664481] transition-transform ease-in-out duration-300`}></span>
                                            <span className={`block h-1 w-6 origin-center rounded-full bg-[#664481] transition-transform ease-in-out duration-300`}></span>
                                            <span className={`block h-1 w-6 origin-center rounded-full bg-[#664481] transition-transform ease-in-out duration-300`}></span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <nav className="flex-col flex-grow md:w-full pb-4 md:pb-0 lg:flex lg:justify-end lg:flex-row md:hidden sm:hidden hidden">
                            <a onClick={() => Go_To_MarketPage("Home")}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#664481] transition duration-300 dark:focus:bg-[#664481] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                Home
                            </a>

                            <div className="relative">
                                <div className="flex">
                                    <a onClick={() => setDropdown(!dropdown)}
                                        className="w-full cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#664481] transition duration-300 dark:focus:bg-[#664481] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                        Social Media Service
                                    </a>
                                    <div className={`absolute top-0 mt-8 flex justify-center h-4 w-full ${dropdown ? "" : "hidden"}`}>
                                        <div className={`absolute top-4 w-auto bg-white divide-y divide-gray-100 rounded-md sm:rounded border
                                                    shadow-lg opacity-100 transition ${dropdown ? "opacity-100" : "opacity-0 "}
                                                    duration-300 flex justify-center lg:flex-row md:flex-row sm:flex-col flex-col
                                                    lg:w-auto md:w-auto sm:w-full w-full`}>
                                            <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                                <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(1)}>
                                                    <FontAwesomeIcon icon={faInstagram} color="#664481" className="px-2 w-6 h-6" />
                                                    Instagram
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isInstagram ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        instagram.map((item) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleInstagram(item.id)}>
                                                                <FontAwesomeIcon icon={item.icon} color="#664481" className="px-2 w-4 h-4" />
                                                                Instagram {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                                <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-4 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(1)}>
                                                    Instagram Tools
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isInstagram ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        intagramToolsData.map((item, index) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id}>
                                                                {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                                <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(2)}>
                                                    <FontAwesomeIcon icon={faFacebook} color="#664481" className="px-2 w-6 h-6" />
                                                    FaceBook
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isFacebook ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        facebook.map((item) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleFaceBook(item.id)}>
                                                                <FontAwesomeIcon icon={item.icon} color="#664481" className="px-2 w-4 h-4" />
                                                                FaceBook {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                                <div className="mt-9 lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-4 lg:py-2 md:px-4 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(2)}>
                                                    FaceBook Tools
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isFacebook ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        facebook.map((item, index) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleFaceBook(item.id)}>
                                                                FaceBook Items {index + 1}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-4 py-2">
                                                <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(3)}>
                                                    <FontAwesomeIcon icon={faTiktok} color="#664481" className="px-2 w-6 h-6" />
                                                    TikTok
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isTiktok ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        tiktok.map((item) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleTiktok(item.id)}>
                                                                <FontAwesomeIcon icon={item.icon} color="#664481" className="px-2 w-4 h-4" />
                                                                TikTok {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                                <div className="mt-9 lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-4 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(3)}>
                                                    TikTok Tools
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isTiktok ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        tictokToolsData.map((item, index) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleTiktok(item.id)}>
                                                                {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                            <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                                <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(4)}>
                                                    <FontAwesomeIcon icon={faYoutube} color="#664481" className="px-2 w-6 h-6" />
                                                    Youtube
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isYoutube ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        youtube.map((item, index) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleYoutube(item.id)}>
                                                                <FontAwesomeIcon icon={item.icon} color="#664481" className="px-2 w-4 h-4" />
                                                                Youtube {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                                <div className="mt-9 lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-4 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(4)}>
                                                    Youtube Tools
                                                </div>
                                                <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isYoutube ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                    {
                                                        youtubeToolsData.map((item, index) => (
                                                            <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleYoutube(item.id)}>
                                                                {item.content}
                                                            </a>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a onClick={() => Go_To_MarketPage("Blog")}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#664481] transition duration-300 dark:focus:bg-[#664481] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                Publish a project
                            </a>
                            <a onClick={() => Go_To_MarketPage("Marketplace")}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#664481] transition duration-300 dark:focus:bg-[#664481] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                MarketPlace
                            </a>
                            <a onClick={() => Go_To_MarketPage("My Account")}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#664481] transition duration-300 dark:focus:bg-[#664481] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                My Account
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

            <div className={`${isSideBar ? "max-w-2xl mx-auto h-screen fixed z-50 lg:hidden md:block sm:block block animate-slide-left-in" : "hidden"}`}>
                <aside className="w-64 h-screen" aria-label="Sidebar">
                    <div className="px-3 py-4 rounded shadow-2xl border h-screen overflow-y-auto  bg-white relative">
                        <ul className="space-y-2">
                            <div className="absolute top-4 right-4" onClick={() => setIsSideBar(false)}>
                                <FontAwesomeIcon icon={faClose} />
                            </div>
                            <li>
                                <a href="/homepage"
                                    className="flex items-center p-2 py-4 text-base font-normal justify-center">
                                    <img className="w-36" src="/image/Logo.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <button type="button" onClick={() => Go_To_MarketPage("Home")}
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <FontAwesomeIcon icon={faHome} color="#664481" className="w-5 h-5" />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Home</span>
                                </button>
                            </li>
                            <li>
                                <button type="button"
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <FontAwesomeIcon icon={faBlog} color="#664481" className="w-5 h-5" />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Publish a project</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => Go_To_MarketPage("Marketplace")}
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <FontAwesomeIcon icon={faMarker} color="#664481" className="w-5 h-5" />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Marketplace</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => Go_To_MarketPage("My Account")}
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <FontAwesomeIcon icon={faAccusoft} color="#664481" className="w-5 h-5" />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">My Account</span>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => setIsShowServiceList(!isShowServiceList)}
                                    className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                    aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <FontAwesomeIcon icon={faServicestack} color="#664481" className="w-5 h-5" />
                                    <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Social Media Service</span>
                                </button>
                            </li>
                            <div className={`${isShowServiceList ? "block" : "hidden"}`}>
                                <li>
                                    <button type="button" onClick={() => setIsInstagramDropdownShow(!isInstagramDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faInstagram} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Instagram</span>
                                        <svg className={`${isInstagramDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isInstagramDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            instagram.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#" onClick={() => handleInstagram(item.id)}
                                                        className="flex items-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 font-bold">
                                                        <div className="w-[20%] flex justify-center items-center"><FontAwesomeIcon icon={item.icon} color="#664481" className="px-4" /></div>
                                                        <div className="w-[70%] flex">Instagram {item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsFacebookDropdownShow(!isFacebookDropDown)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faFacebook} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">FaceBook</span>
                                        <svg className={`${isFacebookDropDown ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isFacebookDropDown ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            facebook.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#" onClick={() => handleFaceBook(item.id)}
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-[20%] flex justify-center items-center"><FontAwesomeIcon icon={item.icon} color="#664481" className="px-4" /></div>
                                                        <div className="w-[70%] flex">FaceBook {item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsTikTokDropdownShow(!isTikTokDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faTiktok} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">TikTok</span>
                                        <svg className={`${isTikTokDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isTikTokDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            tiktok.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#" onClick={() => handleTiktok(item.id)}
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-[20%] flex justify-center items-center"><FontAwesomeIcon icon={item.icon} color="#664481" className="px-4" /></div>
                                                        <div className="w-[70%] flex">TikTok {item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsYoutubeDropdownShow(!isYoutubeDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faYoutube} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Youtube</span>
                                        <svg className={`${isYoutubeDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isYoutubeDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            youtube.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#" onClick={() => handleYoutube(item.id)}
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-[20%] flex justify-center items-center"><FontAwesomeIcon icon={item.icon} color="#664481" className="px-4" /></div>
                                                        <div className="w-[70%] flex">Youtube {item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsInstagramToolsDropdownShow(!isInstagramToolsDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faTools} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Instagram Tools</span>
                                        <svg className={`${isInstagramToolsDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isInstagramToolsDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            intagramToolsData.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#"
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-full flex px-12">{item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsFacebookToolsDropdownShow(!isFacebookToolsDropDown)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faTools} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">FaceBook Tools</span>
                                        <svg className={`${isFacebookToolsDropDown ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isFacebookToolsDropDown ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            facebook.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#"
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-full flex px-12">FaceBook Items {item.id + 1}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsTikTokToolsDropdownShow(!isTikTokToolsDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faTools} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">TikTok Tools</span>
                                        <svg className={`${isTikTokToolsDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isTikTokToolsDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            tictokToolsData.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#"
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-full flex px-12">{item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <button type="button" onClick={() => setIsYoutubeToolsDropdownShow(!isYoutubeToolsDropdownShow)}
                                        className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-200"
                                        aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                        <FontAwesomeIcon icon={faTools} color="#664481" className="w-5 h-5" />
                                        <span className="flex-1 ml-3 text-left whitespace-nowrap text-gray-900 text-sm font-bold">Youtube Tools</span>
                                        <svg className={`${isYoutubeToolsDropdownShow ? "rotate-180 transition duration-300 w-6 h-6" : "transition duration-300 w-6 h-6"}`} fill="#664481" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                        </svg>
                                    </button>
                                    <ul id="dropdown-example" className={`${isYoutubeToolsDropdownShow ? "py-2 space-y-2" : "hidden"}`}>
                                        {
                                            youtubeToolsData.map((item) => (
                                                <li key={item.id}>
                                                    <a href="#"
                                                        className="flex items-center justify-center justify-center py-2 text-base border text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  text-sm font-bold">
                                                        <div className="w-full flex px-12">{item.content}</div>
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default Header