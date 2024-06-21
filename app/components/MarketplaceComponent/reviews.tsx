import { FC, useState } from "react";

type Review = {
    id: number,
    star: number,
    content: string,
    userAvatar: string,
    userName: string
}

const ReviewsComponent: FC = () => {

    const [review, setReview] = useState<Review[]>(
        [
            {
                id: 0,
                star: 4,
                content: "I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 1,
                star: 4,
                content: "Building and maintaining websites and web applications.",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 2,
                star: 4,
                content: "Embrace a new era of digital success with Mizzle. Our team combines cutting-edge design with robust development to deliver websites that captivate and convert.",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 3,
                star: 4,
                content: "I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }
        ]
    )

    return (
        <div className="mx-auto max-w-screen-xl px-4 w-full justify-center">
            <h2 className="font-bold text-2xl text-gray-600 text-center">What people say about us</h2>
            <div className="grid w-full md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex justify-center">
                {
                    review.map((item) => (
                        <div key={item.id} className="flex flex-col justify-between rounded-md border border-[#581C87] bg-white p-8 shadow-sm max-w-sm mx-auto mt-24">
                            <div className="text-black-500 flex gap-2">
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-5 h-5 ms-1 text-gray-300 dark:text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
                                {item.content}
                            </p>
                            <div className="mt-6 flex items-center gap-6 ">
                                <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-[#581C87]">
                                    <div className="relative inline-block overflow-hidden rounded-lg border-[#581C87]">
                                        <img alt="" src={item.userAvatar} width="50" height="50"
                                            decoding="async" data-nimg="1" className="inline-block " loading="lazy" />
                                    </div>
                                </div>
                                <div>
                                    <p className="leading-relaxed tracking-wide text-black-500">{item.userName}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ReviewsComponent;