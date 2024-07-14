"use client"
import { ChangeEvent, FC, useState } from "react";
import { parentCategory, childCategory, categoryContent } from "../../data/Marketplace/marketplaceData"

const Category: FC = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [categoryID, setCategoryID] = useState<number>(0);

    const toggleDropdown = (id: number) => {
        setIsOpen(!isOpen);
        setCategoryID(id)
    };

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    const handleCategorySelect = (category: string) => {
        setSelectedCategory(category);
        setIsCategoryOpen(!isCategoryOpen);
    };

    const categories = [
        'Recommend',
        'Best selling',
        'Newest arrivals',
    ];

    return (
        <div className="mx-auto max-w-screen-xl px-4 w-full flex flex-col justify-center mt-10">
            <div className="flex justify-between items-center w-full lg:flex-row md:flex-row sm:flex-col flex-col">
                <div className="flex items-center gap-4 lg:flex-row md:flex-row sm:flex-col flex-col w-full">
                    {parentCategory.map(parent => (
                        <div className="relative inline-block lg:w-auto md:w-auto sm:w-full w-full justify-between" key={parent.id}>
                            <button
                                onClick={() => toggleDropdown(parent.id)}
                                className="relative z-10 flex justify-between items-center p-2 lg:w-auto md:w-auto sm:w-full w-full text-sm text-gray-600 bg-white border border-gray rounded-md focus:border-[#664481] focus:ring-opacity-40 focus:ring-[#664481] focus:ring dark:text-white focus:outline-none"
                            >
                                <span className="mx-1 text-black">{parent.content}</span>
                                <svg className={`w-5 h-5 mx-1 transition-transform duration-300 ${isOpen && categoryID === parent.id ? "rotate-180" : "rotate-0"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="black"></path>
                                </svg>
                            </button>
                            {isOpen && categoryID === parent.id && (
                                <div className="absolute left-0 top-10 lg:w-96 md:w-96 sm:w-96 w-72 max-h-80 py-2 mt-2 bg-white overflow-y-scroll rounded-md shadow-xl z-40">
                                    <div className="w-full flex flex-col justify-center p-2">
                                        {childCategory.filter(child => child.parentID === parent.id).map((child, index) => (
                                            <div className="w-full flex flex-col px-4" key={child.id}>
                                                <div className="font-bold text-lg">{child.content}</div>
                                                <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 py-2">
                                                    {categoryContent.filter(content => child.id === content.parentID).map(content => (
                                                        <div key={content.id} className="flex items-center space-x-2 rounded p-2 hover:bg-gray-100 accent-teal-600">
                                                            <input type="checkbox" id={content.content} name="languageCheckbox" className="h-4 w-4 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                                            {
                                                                content.parentID === 8 || content.parentID === 9 ? (
                                                                    <>
                                                                        <label htmlFor={content.content} className="flex w-full space-x-2 text-sm">{content.content}</label>
                                                                    </>
                                                                ) : (
                                                                    <label htmlFor={content.content} className="flex w-full space-x-2 text-sm">{content.content} ({content.count.toLocaleString("en-US")})</label>
                                                                )
                                                            }
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center px-8">
                                        <button className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Clear All</button>
                                        <button className="bg-[#664481] flex justify-center items-center px-3 py-1 text-white rounded cursor-pointer">Apply</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="lg:w-[150px] md:w-[150px] sm:w-full w-full flex items-center lg:mt-0 md:mt-0 sm:mt-4 mt-6">
                    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                        <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                        <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                    </div>
                    <label htmlFor="toggle" className="text-xs text-gray-700">Pro Service</label>
                </div>
            </div>
            <div className="flex justify-between w-full lg:flex-row md:flex-row sm:flex-row flex-col">
                <span className="text-sm text-gray-500 px-1 mt-4">89,000+ Results</span>
                <div className="flex items-center text-sm text-gray-500 px-1 mt-4 gap-4">
                    <span className="flex items-center justify-center px-2 font-bold">Sort By:</span>
                    <div className="relative group">
                        <button
                            onClick={toggleCategoryDropdown}
                            className="py-2.5 px-2 w-[150px] md:text-sm text-site bg-transparent border-b border-black-700 focus:border-brand focus:outline-none focus:ring-0 peer flex items-center justify-between rounded font-semibold"
                        >
                            {selectedCategory}
                            <svg width="16" height="16" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path d="M5.464 6.389.839 1.769a.38.38 0 0 1 0-.535l.619-.623a.373.373 0 0 1 .531 0l3.74 3.73L9.47.61a.373.373 0 0 1 .531 0l.619.623a.38.38 0 0 1 0 .535l-4.624 4.62a.373.373 0 0 1-.531 0Z"></path>
                            </svg>
                        </button>
                        <div
                            className={`absolute z-[99] top-[100%] left-[50%] translate-x-[-50%] rounded-md overflow-hidden shadow-lg min-w-[200px] w-max ${isCategoryOpen ? 'visible opacity-100' : 'opacity-0 invisible'
                                } duration-200 p-1 bg-white border border-dimmed text-xs md:text-sm`}
                        >
                            {categories.map((category) => (
                                <div
                                    key={category}
                                    onClick={() => handleCategorySelect(category)}
                                    className="w-full block cursor-pointer hover:bg-gray hover:text-link px-3 py-2 rounded-md"
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;