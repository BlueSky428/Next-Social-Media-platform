import Link from "next/link";
import { FC } from "react";

const Navigate: FC = () => {
    return (
        <div className="lg:w-full items-center lg:py-4 md:py-12 sm-py-12 lg:px-24 px-1 lg:mt-8 md:mt-0 md:py-0 md:mt-8 sm:mt-6 mt-24">
            <div className="flex items-center">
                <Link href={"/Dashboard"} className="text-xs cursor-pointer text-gray-600 transition duration-300 hover:text-[#581C87]">Home</Link>
                <pre> / </pre>
                <Link href={"/Marketplace"} className="text-xs cursor-pointer text-gray-600 transition duration-300 hover:text-[#581C87]">Servie</Link>
                <pre> / </pre>
                <h1 className="text-xs cursor-pointer text-gray-600 transition duration-300 hover:text-[#581C87]">Full Service host that will do most of the work for you</h1>
            </div>
        </div>
    )
}

export default Navigate;