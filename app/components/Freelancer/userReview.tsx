"use client"
import { FC, useState, useEffect } from "react";

interface StarRatingProps {
    totalStars?: number;
}

type Review = {
    id: number,
    category: string,
    reviewPercent: string,
    reviewCount: string
}

type RadioButton = {
    id: number,
    title: string,
    price: string
}

const UserReview: FC = () => {
    const [price, setPrice] = useState<string>("$25");

    const [radioButton, setRadioButton] = useState<RadioButton[]>(
        [
            {
                id: 0,
                title: "Starter",
                price: "$25"
            }, {
                id: 1,
                title: "Standard",
                price: "$95"
            }, {
                id: 2,
                title: "Advanced",
                price: "$194"
            },
        ]
    )

    const choosePrice = (id: number) => {
        setPrice(radioButton[id].price);
    }

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
        <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex items-center lg:mt-0 md:mt-14 sm:mt-20 mt-28">
            <div className="flex flex-col lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="w-full flex items-center py-2">
                    <h1 className="font-bold text-xl">(15,707) Review</h1>
                    <div className="flex items-center justify-center py-3 ml-1">
                        <svg
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 text-yellow-300 ms-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                            className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 22 20"
                        >
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>
                    <span className="px-2 text-sm font-bold">4.8</span>
                </div>
                <div className="w-full lg:flex md:flex sm:flex items-center">
                    <div className="lg:w-[50%] lg:h-[250px] lg:flex lg:flex-col 
                                    md:w-[60%] md:h-[250px] 
                                    sm:w-[60%] sm:h-[200px] 
                                    w-full h-[200px] justify-between lg:py-4 md:py-4 lg:px-0 md:px-2 sm:px-4">
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
            </div>
        </div>

    )
}

export default UserReview;