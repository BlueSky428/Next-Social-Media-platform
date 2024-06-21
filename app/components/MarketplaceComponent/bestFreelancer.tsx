import { FC } from "react";

const BestFreelancer: FC = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 w-full justify-center mt-16">
            <div className="grid w-full md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 gap-6 flex justify-center">
                <div className="relative flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-sm">
                    <a href="" className="hover:text-orange-600 text-red-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </a>
                    <a href="" className="z-20 absolute h-full w-full top-0 left-0 ">&nbsp;</a>
                    <div className="h-auto overflow-hidden w-full h-full flex justify-center items-center">
                        <div className="h-auto overflow-hidden relative">
                            <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg" className="w-25 y-25 rounded-full" alt="" />
                        </div>
                    </div>
                    <div className="bg-white py-4 px-3">
                        <h3 className="text-base mb-2 font-medium text-center">123</h3>
                        <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-400 text-center">
                                123
                            </p>
                        </div>
                        <div className="flex items-center px-2 border-b-2">
                            <div className="flex items-center justify-center py-3">
                                <svg
                                    className="w-5 h-5 text-yellow-300 ms-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <div className="flex items-center justify-center px-2 py-3">
                                123
                            </div>
                            <div className="flex items-center justify-center text-gray-400 py-3">
                                (3 Reviews)
                            </div>
                        </div>
                        <div className="flex items-center px-2 relative py-8">
                            <div className="flex items-center justify-center absolute left-0">
                                <div className="flex items-center justify-center">
                                    <img className="w-10 h-10 rounded-full" src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg" alt="" />
                                </div>
                                <div className="flex items-center justify-center text-sm px-2 py-3">
                                    Jhon
                                </div>
                            </div>
                            <div className="flex items-center justify-center absolute right-0">
                                <div className="flex items-center justify-center text-sm px-2 py-3">
                                    Starting at:
                                </div>
                                <div className="flex items-center justify-center text-sm px-2 py-3">
                                    123
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BestFreelancer;