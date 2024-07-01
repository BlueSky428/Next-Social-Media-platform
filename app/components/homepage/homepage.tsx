import { FC } from "react";

const HomePageComponent: FC = () => {
    return (
        <div className="py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32 flex justify-center" style={{ "background": "linear-gradient(rgba(197, 234, 249, 1), rgba(255, 255, 255, 1))" }}>
            <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8 ">
                <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
                    <h1 className="text-4xl font-bold mb-5 text-center">Welcome to Influencity</h1>
                    <h1 className="text-4xl font-bold mb-5 text-center">Future of Social Interaction</h1>
                    <p className="text-base mb-8">We are thrilled to introduce Influencity, the ultimate social platform designed to elevate your connections and experiences. Discover a space where
                        creativity meets community, and sharing moments has never been more engaging. Welcome to the next level of social interaction.</p>
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative w-full max-w-xl mx-auto bg-white rounded-full">
                            <input placeholder="Graphic Designer..." className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-[#581c87] focus:border-[#581c87]" type="text" name="query" id="query" />
                            <button type="submit" className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-[#581c87] sm:px-6 sm:text-base sm:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                <svg className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                                Search
                            </button>
                        </div>
                    </form>
                    <div className="max-w-md mx-auto mt-16 flex justify-center items-center">
                        <button className="px-5 py-3 bg-[#581c87] text-white rounded-lg">Get Started</button>
                    </div>
                </div>
                <div className="xl:text-right">
                    <img src="/image/img/conclusion-smartphone.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePageComponent;