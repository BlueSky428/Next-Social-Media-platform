"use client"
import { previousWorkData, previousWorkdetailData } from "@/app/data/Freelancer/freelancerData";
import { FC, useState } from "react";

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

const DetailContent = () => {

    const [hoveredItem, setHoveredItem] = useState<number | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const [previousWork, setPreviousWork] = useState<PreviousWork[]>(previousWorkData)

    const [previousWorkdetail, setPreviousWorkDetail] = useState<PreviousWorkDetail[]>(previousWorkdetailData)

    const handleMouseEnter = (id: number) => {
        setHoveredItem(id);
    }

    const handleMouseLeave = () => {
        setHoveredItem(null);
    }

    const toggleContent = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="lg:w-full flex items-center lg:px-24 px-1 mt-4">
            <div className="lg:w-auto md:w-auto sm:w-full w-full flex lg:flex-row md:flex-row sm:flex-col flex-col lg:items-center md:items-center sm:justify-center gap-2">
                <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full flex items-center">
                    <div className="lg:w-1/2 flex items-center lg:px-4 px-2 py-2">
                        <img className="w-8" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto/v1/attachments/generic_asset/asset/56ff3db8ae625ba1d6493c3c250c5919-1625663632464/3-Trophy-70_alpha.gif" alt="" />
                        <span className="lg:px-4 px-1 lg:text-sm md:text-sm sm:text-xs text-xs flex justify-center items-center font-bold text-center">People keep coming back!</span>
                    </div>
                    <div className="lg:w-1/2 flex items-center px-4 py-2">
                        <span className="lg:text-sm md:text-sm sm:text-xs text-xs flex justify-center items-center text-center">This seller has many repeat buyers.</span>
                    </div>
                </div>
                <div className="border-l py-4 lg:flex md:flex sm:hidden hidden"></div>
                <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full flex flex-col">
                    <div className="flex items-center py-2">
                        <span className="text-xs flex items-center font-bold px-2">Among my clients</span>
                        <span className="flex justify-center items-center" title="shirley_esid listed these companies as important clients they’ve worked with." style={{ "width": "14px", "height": "14px", "fill": "#95979D" }} >
                            <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM6.667 6.222c0-.228.075-.59.277-.87C7.112 5.12 7.4 4.89 8 4.89c.734 0 1.116.388 1.245.777.136.41.02.867-.405 1.15-.701.468-1.218.92-1.49 1.556-.24.56-.24 1.175-.239 1.752v.098H8.89c0-.728.015-.964.095-1.15.06-.142.21-.356.842-.777a2.751 2.751 0 0 0 1.106-3.19C10.558 3.978 9.488 3.111 8 3.111c-1.179 0-2.001.511-2.5 1.203a3.37 3.37 0 0 0-.611 1.908h1.778Zm2.222 6.667V11.11H7.11v1.778H8.89Z"></path>
                            </svg>
                        </span>
                    </div>
                    <div className="w-full flex">
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
                                        <div className="flex flex-col justify-center border w-80 px-2 transition duration-150 absolute top-6 bg-white z-50 p-2">
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
                                                <div className="w-full border bg-gray-100">
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
                </div>
            </div>
        </div>
    )
}

export default DetailContent;