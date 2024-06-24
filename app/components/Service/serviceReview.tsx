"use client"
import { FC, useState, useEffect } from "react";
import ServicerReview from "./servicerReview";

interface StarRatingProps {
    totalStars?: number;
}

type Review = {
    id: number,
    category: string,
    reviewPercent: string,
    reviewCount: string
}

const ServiceReview: FC = () => {
    const [review, setReview] = useState<Review[]>(
        [
            {
                id: 0,
                category: "5 star",
                reviewPercent: "90%",
                reviewCount: "(7, 100)"
            },
            {
                id: 1,
                category: "4 star",
                reviewPercent: "80%",
                reviewCount: "(5,100)"
            },
            {
                id: 2,
                category: "3 star",
                reviewPercent: "50%",
                reviewCount: "(3, 200)"
            },
            {
                id: 3,
                category: "2 star",
                reviewPercent: "10%",
                reviewCount: "(306)"
            },
            {
                id: 4,
                category: "1 star",
                reviewPercent: "5%",
                reviewCount: "(1)"
            }
        ]
    )

    return (
        <main className="w-full bg-white lg:px-24 py-2">
            <div className="flex flex-col lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="w-full flex items-center py-2"><h1 className="font-bold text-xl">Review</h1></div>
                <div className="w-full lg:flex md:flex sm:flex items-center py-2">
                    <div className="lg:w-[50%] lg:h-[250px] lg:flex lg:flex-col 
                                    md:w-[60%] md:h-[250px] 
                                    sm:w-[60%] sm:h-[200px] 
                                    w-full h-[200px] justify-between lg:py-4 md:py-4 lg:px-2 md:px-2 sm:px-4">
                        {
                            review.map((item) => (
                                <div className="w-full flex justify-center items-center mt-4" key={item.id}>
                                    <div className="w-[15%] text-sm font-medium text-black-500 hover:underline">{item.category}</div>
                                    <div className="w-[50%] h-1 mx-4 bg-gray-200 rounded">
                                        <div className="h-full bg-yellow-300 rounded" style={{ "width": item.reviewPercent }}></div>
                                    </div>
                                    <div className="w-[15%] text-sm font-medium text-gray-500 dark:text-gray-400">{item.reviewCount}</div>
                                </div>
                            ))
                        }

                    </div>
                    <div className="lg:w-[50%] lg:h-[250px] lg:flex lg:flex-col 
                                    md:w-[40%] md:h-[250px] 
                                    sm:w-[40%] sm:h-[200px] 
                                    w-full h-[200px] justify-between lg:py-4 md:py-4 lg:px-2 md:px-2 sm:px-4">
                        <div className="w-full flex items-center mt-4 py-2">
                            <div className="lg:w-full text-sm font-bold text-black-500">Rating Breakdown</div>
                        </div>
                        <div className="lg:w-full text-sm font-bold text-black-500 flex justify-between py-2">
                            <div className="w-auto flex items-center">Seller Communication level</div>
                            <div className="w-auto flex items-center">
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="px-2">4.8</span>
                            </div>
                        </div>
                        <div className="lg:w-full text-sm font-bold text-black-500 flex justify-between py-2">
                            <div>Recommend to a friend</div>
                            <div className="w-auto flex items-center">
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="px-2">4.8</span>
                            </div>
                        </div>
                        <div className="lg:w-full text-sm font-bold text-black-500 flex justify-between py-2">
                            <div>Services as described</div>
                            <div className="w-auto flex items-center">
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="px-2">4.8</span>
                            </div>
                        </div>
                    </div>
                </div>
                <ServicerReview />
                <div className={`lg:w-full h-auto py-4 responsiveItem-one`} style={{ "gap": "4px" }}>
                    <div className="flex flex-col lg:w-1/2 md:w-1/2 sm-1/2 w-full p-6 px-2 text-center text-gray-900 bg-white border shadow-lg
                                border-[#581C87] rounded-lg shadow dark:border-[#581C87] xl:p-8 dark:bg-white dark:text-white">
                        <div className="flex items-center justify-center flex-col">
                            <span className="mr-2 text-5xl font-extrabold text-black">$79</span>
                        </div>
                        <div className="flex flex-col justify-center border-b-2 py-2">
                            <div className="w-full flex items-center lg:py-2 lg:px-2">
                                <div className="flex items-center">
                                    <input type="checkbox" name="animal[]" value="cat" className="mr-2 lg:w-4 lg:h-4" />
                                    <label htmlFor="animal-cat" className="block text-gray-700 font-medium text-base lg:text-sm py-1">10000 Words (+5 days)</label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col lg:px-2 lg:py-2 justify-center">
                                <span className="text-gray-700 text-base" style={{ "textAlign": "start" }}>I will professionally translate english to german</span>
                                <span className="text-gray-700 text-base font-bold lg:py-4 md:py-4 sm:py-4 py-2" style={{ "textAlign": "start" }}>$45</span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center py-2">
                            <div className="w-full flex items-center lg:py-2 lg:px-2">
                                <div className="flex items-center">
                                    <input type="checkbox" name="animal[]" value="cat" className="mr-2 lg:w-4 lg:h-4" />
                                    <label htmlFor="animal-cat" className="block text-gray-700 font-medium text-base">2000 Words (+5 days)</label>
                                </div>
                            </div>
                            <div className="w-full flex flex-col lg:px-2 lg:py-2 justify-center">
                                <span className="text-gray-700 text-base" style={{ "textAlign": "start" }}>I will professionally translate english to german</span>
                                <span className="text-gray-700 text-base font-bold lg:py-4 md:py-4 sm:py-4 py-2" style={{ "textAlign": "start" }}>$45</span>
                            </div>
                        </div>
                        <a href=""
                            className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 
                                    focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-6 
                                    text-center dark:text-white">Buy Now $79</a>
                    </div>
                    <div className="flex flex-col md:mt-0 sm:mt-0 lg:w-1/2 md:w-1/2 sm-1/2 w-full p-6 px-2 text-center text-gray-900 bg-white border shadow-lg
                                border-[#581C87] rounded-lg shadow dark:border-[#581C87] dark:bg-white dark:text-white">
                        <div className="flex items-center justify-center flex-col">
                            <span className="mr-2 text-xl font-extrabold text-black">About The Seller</span>
                        </div>
                        <div className="w-full flex itmes-center py-4 border-b-2">
                            <div className="flex items-center">
                                <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg" className="lg:w-19 lg:h-19 md:w-18 md:h-18 sm:w-14 sm:h-14 w-12 h-12 rounded-full" alt="" />
                            </div>
                            <div className="flex flex-col jutify-center px-4">
                                <span className="text-gray-700 py-1 lg:text-sm md:text-sm sm:text-sm text-sm" style={{ "textAlign": "start" }}>John Powell</span>
                                <span className="text-gray-700 lg:text-sm md:text-sm sm:text-sm text-sm" style={{ "textAlign": "start" }}>Product Manager</span>
                                <div className="w-full flex items-center py-1" style={{ "textAlign": "start" }}>
                                    <svg
                                        className="w-3 h-3 text-yellow-300"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 20"
                                    >
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <span className="px-2 text-sm text-gray-700 lg:text-xs md:text-sm sm:text-sm text-sm">3.0</span>
                                    <span className="px-2 text-sm text-gray-700 lg:text-xs md:text-sm sm:text-sm text-sm">(1 Review)</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-center lg:px-2 lg:py-4 md:px-2 md:py-3 sm:px-1 sm:py-1 px-2 py-4">
                            <div className="w-full flex justify-between">
                                <span className="text-gray-600 lg:text-sm md:text-sm text-sm">Location</span>
                                <span className="text-gray-600 lg:text-sm md:text-sm text-sm">Rate</span>
                            </div>
                            <div className="w-full flex justify-between">
                                <span className="text-gray-600 lg:text-sm md:text-sm text-sm">Los Angels</span>
                                <span className="text-gray-600 lg:text-sm md:text-sm text-sm">$45 - $65 / hr</span>
                            </div>
                        </div>
                        <a href=""
                            className="text-white bg-[#581C87] hover:bg-purple-800 focus:ring-4 
                                    focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-6 
                                    text-center dark:text-white lg:mt-0 md:mt-[9rem] sm:mt-[10rem] mt-[6.5rem]">Contact me</a>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default ServiceReview;