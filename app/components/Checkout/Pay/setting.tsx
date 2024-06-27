import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

const Setting: FC = () => {

    const [dropdown, setDropdown] = useState<boolean>(false);

    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg">
            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl">
                <div className="w-full flex justify-between items-center bg-gray-200 p-4 rounded-lg cursor-pointer shadow-md" onClick={() => setDropdown(!dropdown)}>
                    <div className="w-full flex flex-col">
                        <span className="font-semibold">Main Dropdown</span>
                        <span className="text-xs">1 option available</span>
                    </div>
                    <div className="w-6 h-6 border border-black rounded-full flex justify-center items-center">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" className={`transition duration-300 ${dropdown ? "rotate-180" : "rotate-0"}`}
                            stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                            strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </div>
                </div>
                <div className={`w-full flex justify-between items-center bg-white p-4 rounded-lg cursor-pointer shadow-md ${dropdown ? "" : "hidden"}`}>
                    <div className="w-full items-center py-2">
                        <h1 className="text-base font-bold py-2">Delivery speed</h1>
                        <h1 className="text-sm">Works <strong>for followers, likes & views.</strong> We will match selected speed to best of our ability.</h1>
                        <div className="flex justify-center items-center py-4">
                            <select id="package-select" name="package-select" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 text-xs" required>
                                <option disabled value="">Select speed</option>
                                <option value="0m">as fast as possible</option>
                                <option value="30m">30 minutes</option>
                                <option value="60m">1 hour</option>
                                <option value="100m">1 hour 40 minutes</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Setting;