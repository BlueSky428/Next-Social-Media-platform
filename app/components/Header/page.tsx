"use client"
import { useRouter } from "next/navigation";
import { FC, useState } from "react";

const Header: FC = () => {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const Go_To_MarketPage = (item: string) => {
        if (item === "My Account") {
            router.push("/Login");
        } else if (item === "Market Place") {
            router.push("/Marketplace");
        } else if (item === "Home") {
            router.push("/Dashboard");
        }
    }

    return (
        <div className="antialiased bg-gray-100 dark:bg-gray-900 w-full fixed z-[50] shadow-lg backdrop-filter backdrop-blur-lg">
            <div className="w-full text-gray-700 bg-white dark:text-black dark:bg-white-900">
                <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                    <div className="flex flex-row items-center justify-between p-4">
                        <a href="#" className="text-lg font-semibold tracking-widest text-black uppercase rounded-lg dark:text-black focus:outline-none focus:shadow-outline">
                            <img className="w-36" src="/image/Logo.png" alt="" />
                        </a>
                        <button
                            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                            onClick={() => setOpen(!open)}
                        >
                            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                <path
                                    style={{ display: open ? 'none' : 'block' }}
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                />
                                <path
                                    style={{ display: open ? 'block' : 'none' }}
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <nav className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                        {['Home', 'FAQ', 'Blog', 'Contact', 'Market Place', 'My Account'].map((item) => (
                            <a key={item} onClick={() => Go_To_MarketPage(item)}
                                className="cursor-pointer px-4 py-2 mt-2 text-sm font-semibold bg-transparent hover-text-white rounded-lg dark:bg-transparent dark:hover:bg-[#581C87] dark:focus:bg-[#581C87] dark:focus:text-white dark:hover:text-white dark:text-black md:mt-0 md:ml-4 hover:text-white-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            >
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