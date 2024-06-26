import { FC } from "react";

const AboutSeller: FC = () => {

    return (

        <main className="w-full bg-white lg:px-24 py-2">
            <p className="flex px-1">
                <span className="text-gray-600 font-bold">John Powell</span>
            </p>
            <div className="flex flex-col lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <div className="inline-block relative">
                            <div className="relative w-16 h-16 rounded-full overflow-hidden">
                                <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg" alt="Profile picture" />
                                <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-6">
                        <p className="flex items-center">
                            <span className="text-gray-600 font-bold">Graphic Designer(Logo, Branding, Packaging, Print Design)</span>
                        </p>

                        {/* <p className="flex w-full items-center mt-2">
                            <div className="flex items-center w-auto border">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 28 28" role="img" width="24" height="24">
                                    <path fill="#1F57C3" d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"></path>
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0
                                 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 
                                 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 
                                 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z" clipRule="evenodd">
                                    </path>
                                </svg>
                                <span className="text-gray-600 text-sm px-1">Top Rated</span>
                            </div>

                            <div className="flex items-center w-auto border px-8">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" viewBox="0 0 28 28" role="img" width="24" height="24">
                                    <path fill="#1F57C3" d="M12 1.155a4 4 0 014 0l8.124 4.69a4 4 0 012 3.464v9.382a4 4 0 01-2 3.464L16 26.845a4 4 0 01-4 0l-8.124-4.69a4 4 0 01-2-3.464V9.309a4 4 0 012-3.464L12 1.155z"></path>
                                    <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.761 7.542l1.188 3.201 3.285.184a.78.78 0 01.448.173c.13.104.226.247.277.41a.9.9 0 01.01.504.858.858 0
                                 01-.261.422L17.15 14.6l.854 3.328a.907.907 0 01-.025.507.857.857 0 01-.291.404.785.785 0 01-.919.02L14 16.984l-2.764 1.862a.784.784 
                                 0 01-.916-.012.855.855 0 01-.294-.4.906.906 0 01-.031-.505l.847-3.314-2.55-2.18a.858.858 0 01-.26-.421.9.9 0 01.01-.504.853.853 0 01.276-.41.782.782 0 01.448-.173l3.285-.184 1.188-3.201a.86.86 
                                 0 01.302-.394.79.79 0 01.918 0 .86.86 0 01.302.394z" clipRule="evenodd">
                                    </path>
                                </svg>
                                <span className="text-gray-600 text-sm px-1">97% Job Success</span>
                            </div>
                        </p> */}

                        <div className="flex items-center mt-4 text-gray-600">
                            <div className="flex w-full items-center border">
                                <div className="">

                                </div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <span className="font-bold">Sapien consequat eleifend!</span>
                            <p className="mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutSeller;