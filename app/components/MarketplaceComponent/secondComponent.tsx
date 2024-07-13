"use client"
import { FC } from "react";

const SecondComponent: FC = () => {
    return (
        <div className="bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <p className="text-lg leading-8 text-gray-600 font-bold">
                            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
                        </p>
                    </div>
                    <ul className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5 lg:space-y-0 md:space-y-0 sm:space-y-1 space-y-1">
                        <div className="flex flex-col bg-gray-200/50 lg:p-6 md:p-8 sm:p-4 p-2 justify-center items-center">
                            <img src="/image/svg/Microsoft.svg" alt="logo" className="lg:w-auto md:w-auto sm:w-52 w-40" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 lg:p-6 md:p-8 sm:p-4 p-2 justify-center items-center">
                            <img src="/image/svg/Office.svg" alt="logo" className="lg:w-auto md:w-auto sm:w-52 w-40" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 lg:p-6 md:p-8 sm:p-4 p-2 justify-center items-center">
                            <img src="/image/svg/Linkedin.svg" alt="logo" className="lg:w-auto md:w-auto sm:w-52 w-40" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 lg:p-6 md:p-8 sm:p-4 p-2 justify-center items-center">
                            <img src="/image/svg/Google.svg" alt="logo" className="lg:w-auto md:w-auto sm:w-52 w-40" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 lg:p-6 md:p-8 sm:p-4 p-2 justify-center items-center">
                            <img src="/image/svg/Facebook.svg" alt="logo" className="lg:w-auto md:w-auto sm:w-52 w-40" />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent;