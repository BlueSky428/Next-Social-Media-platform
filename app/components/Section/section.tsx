import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { faEye, faHeart, faUsers } from "@fortawesome/free-solid-svg-icons";

const ServiceCard: FC = () => {
    return (
        <div className="h-auto min-h-auto w-full bg-white flex justify-center items-center flex-col">
            <div className="text-center py-10 flex justify-center items-center flex-col">
                <h2 className="text-2xl font-bold leading-tight text-black sm:text-2xl xl:text-3xl py-5">
                    We've been voted for a reason. Here's why
                </h2>
                <span className="w-3/4 flex text-gray-600 py-10">You seserve better than dormant followers. Our Instagram followers are 100% real,
                    active users with instant delivery and incredible pricing.
                </span>
            </div>
            <div className="grid gap-14 md:grid-cols-3 md:gap-5 lg:w-1/2 md:w-full">
                <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#581C87] shadow-lg shadow-[#581C87]">
                        <FontAwesomeIcon icon={faUsers} color="white" style={{ "fontSize": "20px" }} />
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium w-full">Instant delivery</h1>
                    <p className="px-4 text-gray-500">
                        Speed matters. Place your order and watch your likes, views or followers grow!
                    </p>
                </div>
                <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#581C87] shadow-lg shadow-[#581C87]">
                        <FontAwesomeIcon icon={faEye} color="white" style={{ "fontSize": "20px" }} />
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium">100% real. Always.</h1>
                    <p className="px-4 text-gray-500">
                        No bots. Our likes are from actual human beings who are active on Instagram.
                    </p>
                </div>
                <div className="rounded-xl bg-white p-6 text-center shadow-xl">
                    <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-[#581C87] shadow-lg shadow-[#581C87]">
                        <FontAwesomeIcon icon={faHeart} color="white" style={{ "fontSize": "20px" }} />
                    </div>
                    <h1 className="text-darken mb-3 text-xl font-medium">Cheapest prices</h1>
                    <p className="px-4 text-gray-500">
                        Grow your account without breaking the bank. No one else can match our pricing.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;