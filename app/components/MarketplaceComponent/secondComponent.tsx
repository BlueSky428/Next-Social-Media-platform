"use client"
import { FC } from "react";

const SecondComponent: FC = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <p className="mt-4 text-lg leading-8 text-gray-600 font-bold">
                            TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-5">
                        <div className="flex flex-col bg-gray-200/50 p-8">
                            <img src="/image/svg/Microsoft.svg" alt="logo" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 p-8">
                            <img src="/image/svg/Office.svg" alt="logo" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 p-8">
                            <img src="/image/svg/Linkedin.svg" alt="logo" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 p-8">
                            <img src="/image/svg/Google.svg" alt="logo" />
                        </div>
                        <div className="flex flex-col bg-gray-200/50 p-8">
                            <img src="/image/svg/Facebook.svg" alt="logo" />
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default SecondComponent;