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
                        <div className="flex items-center mt-4 text-gray-600">
                            <div className="flex w-full items-center">
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