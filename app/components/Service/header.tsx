import { FC } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const ServiceHeader: FC = () => {
    return (
        <div className="lg:w-full items-center lg:py-12 md:py-12 sm-py-12 py-20 lg:px-24 px-1 mt-4">
            <div className="flex items-center">
                <h1 className="font-bold text-2xl">Full Service host that will do most of the work for you</h1>
            </div>
            <div className="lg:flex md:flex sm:flex flex items-center py-4">
                <div className="lg:flex md:flex sm:flex justify-center items-center lg:text-base md:text-base sm:text-base text-xs">
                    <img src="https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg" alt="" className="w-12 h-12 rounded-full ml-6" />
                    <span className="px-4">Jhon Powell</span>
                </div>
                <div className="flex justify-center items-center py-2 lg:text-base md:text-base sm:text-base text-xs">
                    <svg
                        className="w-5 h-5 text-yellow-300 ms-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="lg:px-2">3.0</span>
                    <span className="px-2">(1 Review)</span>
                </div>
                <div className="flex justify-center items-center py-2 lg:text-base md:text-base sm:text-base text-xs">
                    <FontAwesomeIcon icon={faEye} />
                    <span className="px-2">88 Views</span>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader;