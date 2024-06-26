"use client"
import serviceContext from "@/app/services/serviceContext";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faE, faEye, faHeader, faHeart, faL, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";

type Instagram = {
    id: number,
    content: string,
    icon: any
}

type FaceBook = {
    id: number,
    content: string,
    icon: any
}

type TikTok = {
    id: number,
    content: string,
    icon: any
}

type Youtube = {
    id: number,
    content: string,
    icon: any
}

type InstagramData = {
    setTitle?: any,
    setContent?: any
}

const Header: FC<InstagramData> = ({ setTitle, setContent }) => {
    const servicesContext = useContext(serviceContext);
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const [list, setList] = useState<boolean>(false);
    const [isInstagram, setIsInstagram] = useState<boolean>(false);
    const [isFacebook, setIsFacebook] = useState<boolean>(false);
    const [isTiktok, setIsTiktok] = useState<boolean>(false);
    const [isYoutube, setIsYoutube] = useState<boolean>(false);
    const [dropdown, setDropdown] = useState<boolean>(false);

    const instagram: Instagram[] = [
        {
            id: 0,
            content: "Followers",
            icon: faUsers
        },
        {
            id: 1,
            content: "Views",
            icon: faEye
        },
        {
            id: 2,
            content: "Likes",
            icon: faHeart
        },
        {
            id: 3,
            content: "Auto Likes",
            icon: faHeart
        },
    ]

    const facebook: FaceBook[] = [
        {
            id: 0,
            content: "Followers",
            icon: faUsers
        },
        {
            id: 1,
            content: "Views",
            icon: faEye
        },
        {
            id: 2,
            content: "Likes",
            icon: faHeart
        },
        {
            id: 3,
            content: "Auto Likes",
            icon: faHeart
        },
    ]

    const tiktok: TikTok[] = [
        {
            id: 0,
            content: "Followers",
            icon: faUsers
        },
        {
            id: 1,
            content: "Views",
            icon: faEye
        },
        {
            id: 2,
            content: "Likes",
            icon: faHeart
        }
    ]

    const youtube: Youtube[] = [
        {
            id: 0,
            content: "Followers",
            icon: faUsers
        },
        {
            id: 1,
            content: "Views",
            icon: faEye
        },
        {
            id: 2,
            content: "Likes",
            icon: faHeart
        }
    ]

    const Go_To_MarketPage = (item: string) => {
        setOpen(false)
        setList(false)
        if (item === "My Account") {
            router.push("/Login");
        } else if (item === "Market Place") {
            router.push("/Marketplace");
        } else if (item === "Home") {
            router.push("/Dashboard");
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
        setDropdown(false);
        localStorage.setItem('servicesStatus', instagram[id].content);
        servicesContext?.setServices(instagram[id].content);
        servicesContext?.setServicesTitle("Instagram");
        router.push("/Dashboard");
    }

    const handleFaceBook = (id: number) => {
        setOpen(false);
        setList(false);
        setDropdown(false);
        localStorage.setItem('servicesStatus', facebook[id].content);
        servicesContext?.setServices(facebook[id].content);
        servicesContext?.setServicesTitle("FaceBook");
        router.push("/Dashboard");
    }

    const handleTiktok = (id: number) => {
        setOpen(false);
        setList(false);
        setDropdown(false);
        localStorage.setItem('servicesStatus', tiktok[id].content);
        servicesContext?.setServices(tiktok[id].content);
        servicesContext?.setServicesTitle("TikTok");
        router.push("/Dashboard");
    }

    const handleYoutube = (id: number) => {
        setOpen(false);
        setList(false);
        setDropdown(false);
        localStorage.setItem('servicesStatus', youtube[id].content);
        servicesContext?.setServices(youtube[id].content);
        servicesContext?.setServicesTitle("Youtube");
        router.push("/Dashboard");
    }

    return (
        <div className="antialiased bg-gray-100 dark:bg-gray-900 w-full fixed z-[50] shadow-lg backdrop-filter backdrop-blur-lg">
            <div className="w-full text-gray-700 bg-white dark:text-black dark:bg-white-900">
                <div className="flex max-w-screen-xl px-4 mx-auto md:items-center justify-between lg:flex-row md:flex-col sm:flex-col flex-col md:px-6 lg:px-8">
                    <div className="flex flex-row items-center lg:w-auto md:w-full justify-between p-4">
                        <Link href="/Dashboard" className="text-lg font-semibold tracking-widest text-black uppercase rounded-lg dark:text-black focus:outline-none focus:shadow-outline">
                            <img className="w-36" src="/image/Logo.png" alt="" />
                        </Link>
                        <button className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline" onClick={() => setOpen(!open)}>
                            <div className="group flex h-16 w-16 cursor-pointer items-center justify-center rounded-3xl bg-white p-2 hover:bg-slate-200" onClick={handleSetList}>
                                <div className="space-y-1">
                                    <div className="space-y-2">
                                        <span className={`block h-1 w-8 origin-center rounded-full bg-[#581c87] transition-transform ease-in-out duration-300 ${list ? "translate-y-1.5 rotate-45" : "translate-y-0 rotate-0"}`}></span>
                                        <span className={`block h-1 w-8 origin-center rounded-full bg-[#581c87] transition-transform ease-in-out duration-300 ${list ? "-translate-y-1.5 -rotate-45" : "-translate-y-0 -rotate-0"}`}></span>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} md:w-full pb-4 md:pb-0 lg:flex lg:justify-end lg:flex-row`}>
                        <div className="relative inline-block text-left">
                            <div className="group flex justify-center">
                                <a className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                    dark:bg-transparent dark:hover:bg-[#581C87] dark:focus:bg-[#581C87] dark:focus:text-white dark:hover:text-white 
                                    dark:text-black md:mt-0 md:ml-4 hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 
                                    transition duration-300 focus:outline-none focus:shadow-outline inline-flex 
                                    items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700" onClick={() => setDropdown(!dropdown)}>
                                    Services
                                </a>
                                <div className={`absolute top-0 mt-8 flex justify-center h-4 w-full ${dropdown ? "" : "hidden"}`}>
                                    <div className="absolute absolute top-4 w-auto bg-white divide-y divide-gray-100 rounded-md sm:rounded border shadow-xl
                                                    shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition
                                                    duration-300 flex justify-center lg:flex-row md:flex-row sm:flex-col flex-col
                                                    lg:w-auto md:w-auto sm:w-full w-full">
                                        <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                            <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(1)}>
                                                <FontAwesomeIcon icon={faInstagram} color="#581c87" className="px-2 w-6 h-6" />
                                                Instagram
                                            </div>
                                            <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isInstagram ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                {
                                                    instagram.map((item) => (
                                                        <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleInstagram(item.id)}>
                                                            <FontAwesomeIcon icon={item.icon} color="#581c87" className="px-2 w-4 h-4" />
                                                            Instagram {item.content}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                            <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(2)}>
                                                <FontAwesomeIcon icon={faFacebook} color="#581c87" className="px-2 w-6 h-6" />
                                                FaceBook
                                            </div>
                                            <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isFacebook ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                {
                                                    facebook.map((item) => (
                                                        <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleFaceBook(item.id)}>
                                                            <FontAwesomeIcon icon={item.icon} color="#581c87" className="px-2 w-4 h-4" />
                                                            FaceBook {item.content}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                            <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(3)}>
                                                <FontAwesomeIcon icon={faTiktok} color="#581c87" className="px-2 w-6 h-6" />
                                                TikTok
                                            </div>
                                            <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isTiktok ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                {
                                                    tiktok.map((item) => (
                                                        <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleTiktok(item.id)}>
                                                            <FontAwesomeIcon icon={item.icon} color="#581c87" className="px-2 w-4 h-4" />
                                                            TikTok {item.content}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className="lg:w-auto md:w-auto sm:w-full flex flex-col justify-cetner items-center px-2 py-2">
                                            <div className="lg:w-auto md:w-auto sm:w-full w-full flex justify-cetner items-center lg:px-8 lg:py-2 md:px-8 md:py-2 sm:px-2 sm:py-4 
                                                            px-2 py-4 cursor-pointer border-b-2" onClick={() => handleContent(4)}>
                                                <FontAwesomeIcon icon={faYoutube} color="#581c87" className="px-2 w-6 h-6" />
                                                Youtube
                                            </div>
                                            <div className={`py-1 lg:w-auto md:w-auto sm:w-full w-full ${isYoutube ? "" : "lg:flex flex-col sm:hidden hidden"}`}>
                                                {
                                                    youtube.map((item) => (
                                                        <a className="cursor-pointer block px-1 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full flex jsutify-cetner items-center" key={item.id} onClick={() => handleYoutube(item.id)}>
                                                            <FontAwesomeIcon icon={item.icon} color="#581C87" className="px-2 w-4 h-4" />
                                                            Youtube {item.content}
                                                        </a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {['Home', 'FAQ', 'Blog', 'Contact', 'Market Place', 'My Account'].map((item) => (
                            <a key={item} onClick={() => Go_To_MarketPage(item)}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg 
                                        dark:hover:bg-[#581C87] transition duration-300 dark:focus:bg-[#581C87] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 
                                        hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                {item}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header