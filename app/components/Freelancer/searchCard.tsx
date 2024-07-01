"use client"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

type Category = {
    id: number
    content: string
}

const SearchCard: FC = () => {

    const [categoryList, setCategoryList] = useState<Category[]>([
        { id: 0, content: "Marketing & Advertsing" },
        { id: 1, content: "Media & Entertainment" },
        { id: 2, content: "Financial & Business Services" },
        { id: 3, content: "MFinancial & Business Services" },
        { id: 4, content: "Art & Design" },
        { id: 5, content: "Fashion & Apparel" },
        { id: 6, content: "Education" },
        { id: 7, content: "Technology" },
        { id: 8, content: "Photograpy & VideoGraphy" },
        { id: 9, content: "Beauty & Consmetics" },
        { id: 10, content: "Food & Beverage" },
    ])

    const [isOpen, setIsOpen] = useState(false);
    const [categoryContent, setCategoryContent] = useState<string>("All Industries");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCategoryContent = (id: number) => {
        setCategoryContent(categoryList[id].content);
        toggleDropdown();
    }

    return (
        <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-0 md:mt-14 sm:mt-20 mt-0">
            <div className="flex flex-col justify-center w-full">
                <div className="lg:w-[25%] md:w-[25%] sm:w-full w-full border relative rounded-full">
                    <input type="text" name="" id="" className="w-[90%] rounded-full h-full py-3 px-4 focus:outline-none" placeholder="Search Reviews" />
                    <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-4 cursor-pointer" />
                </div>
                <div className="lg:w-[60%] md:w-[80%] md:w-[25%] sm:w-full w-full flex lg:flex-row md:flex-row sm:flex-col flex-col">
                    <div className="flex items-center space-x-2 rounded p-2">
                        <input type="checkbox" id="DeliveryImages" name="languageCheckbox" className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                        <label htmlFor="DeliveryImages" className="flex w-full space-x-2 text-sm"> Delivery images (82) </label>
                    </div>
                    <div className="flex items-center space-x-2 rounded p-2">
                        <input type="checkbox" id="ProClients" name="languageCheckbox" className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                        <label htmlFor="ProClients" className="flex w-full space-x-2 text-sm"> Pro clients (70) </label>
                    </div>
                    <div className="flex items-center space-x-2 rounded p-2">
                        <div className="flex justify-center">
                            <div className="relative inline-block">
                                <button onClick={toggleDropdown} className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-gray rounded-md focus:border-[#581c87] focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-[#581c87] dark:focus:ring-[#581c87] focus:ring dark:text-white focus:outline-none">
                                    <span className="mx-1 text-black">{categoryContent}</span>
                                    <svg className={`w-5 h-5 mx-1 transition duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="black"></path>
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="absolute left-0 z-20 w-64 max-h-80 py-2 mt-2 bg-white rounded-md shadow-xl overflow-y-scroll border justify-center flex-col items-center">
                                        {
                                            categoryList.map((category) => (
                                                <a key={
                                                    category.id
                                                } onClick={() => handleCategoryContent(category.id)}
                                                    className="block w-full h-8 cursor-pointer flex items-center px-4 text-sm text-gray-900 capitalize transition-colors duration-200 transform dark:text-gray-900 hover:bg-gray-100 dark:hover:bg-[#581c87] dark:hover:text-white"
                                                >
                                                    {category.content}
                                                </a>
                                            ))
                                        }
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchCard;