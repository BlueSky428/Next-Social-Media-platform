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
            }
        ]
    )

    return (
        <div className="mx-auto max-w-screen-xl px-4 w-full justify-center">
            <h2 className="font-bold text-2xl text-gray-600 text-center">What people say about us</h2>
            <div className="grid w-full md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex justify-center">
                <div className="flex flex-col justify-between rounded-md border border-[#581C87] bg-white p-8 shadow-sm max-w-sm mx-auto mt-24">
                    <div className="text-black-500 flex gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="20" height="20" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="20" height="20" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="20" height="20" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="20" height="20" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                            </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-violet-500" width="20" height="20" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z">
                            </path>
                        </svg>
                    </div>
                    <p className="my-4 mb-0 text-base font-normal leading-relaxed tracking-wide text-gray-400">
                        I've been using XYZ
                        for over a year now and their customer service is excellent! Whenever I have a question, the team is always
                        available and willing to help. Highly recommend!
                    </p>
                    <div className="mt-6 flex items-center gap-6 ">
                        <div className="h-10 w-10 overflow-hidden rounded-full shadow-sm outline-[#581C87]">
                            <div className="relative inline-block overflow-hidden rounded-lg border-[#581C87]">
                                <img alt="" src="https://randomuser.me/api/portraits/women/2.jpg" width="50" height="50"
                                    decoding="async" data-nimg="1" className="inline-block " loading="lazy" />
                            </div>
                        </div>
                        <div>
                            <p className="leading-relaxed tracking-wide text-black-500">Melissa Smith</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReviewsComponent;