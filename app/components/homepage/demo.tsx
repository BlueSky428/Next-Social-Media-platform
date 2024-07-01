import { FC } from "react";

const DemoComponent: FC = () => {
    return (
        <div className="w-full flex justify-center items-center bg-white">
            <div className="lg:flex-row md:flex-row sm:flex-row flex-col flex justify-center items-center py-8 gap-4">
                <div className="lg:w-[50%] md:[40%] sm:w-[40%] flex justify-center items-center">
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <span className="font-bold text-base">As seen on</span>
                    </div>
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <img src="/image/svg/Facebook.svg" alt="" />
                    </div>
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <img src="/image/svg/Google.svg" alt="" />
                    </div>
                </div>
                <div className="lg:w-[50%] md:w-[60%] md:w-[60%] flex justify-center items-center">
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <img src="/image/svg/Linkedin.svg" alt="" />
                    </div>
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <img src="/image/svg/Office.svg" alt="" />
                    </div>
                    <div className="lg:px-8 md:px-6 sm:px-4 px-4 h-full flex items-center justify-center cursor-pointer">
                        <img src="/image/svg/Microsoft.svg" alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DemoComponent;