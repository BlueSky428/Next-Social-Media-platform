import { FC } from "react";

const UserInfo: FC = () => {
    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg">
            <div className="w-full bg-white rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <div className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100">
                    <div className="flex items-center w-12 h-12 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full" alt="" />
                        <span className="text-sm px-2">Anna</span>
                    </div>
                </div>
                <div className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100 mt-4 justify-between">
                    <span className="text-sm px-2">100 followers</span>
                    <span className="text-sm px-2">€2.99</span>
                </div>
                <div className="w-full flex items-center lg:py-2 lg:px-2 rounded-lg mt-4 justify-between">
                    <span className="text-sm px-2 font-bold">Your total</span>
                    <span className="text-sm px-2">€2.99</span>
                </div>
                <div className="mt-4 px-2">
                    <button type="button" className="bg-[#581c87] text-white px-4 py-2 rounded-lg hover:opacity-80 text-xs" >Apply coupon</button>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;