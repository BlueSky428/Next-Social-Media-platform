"use client"
import { faCheck, faClock, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState } from "react";

const SelectPackage: FC = () => {

    const [check, setChect] = useState<boolean>(false);

    return (
        <div className="lg:mt-20 md:mt-32 sm:mt-32 mt-32 h-screen w-full border bg-white justify-center">
            <div className="lg:w-full md:w-full flex flex-col items-center">
                <div className="lg:w-full lg:flex md:flex sm:flex flex justify-center items-center">
                    <div className="flex flex-col lg:px-2 lg:py-2 md:px-3 md:py-3 sm:px-3 sm:py-3 px-2 py-2 items-center justify-center">
                        <div className="flex justify-center itesm-center relative">
                            <div className="rounded-full px-2 py-2 border" style={check ? { "border": "1px solid gray" } : { "border": "1px solid black" }}></div>
                            <FontAwesomeIcon icon={faCheck} className={`absolute bottom-0 ${check ? "" : "hidden"}`} />
                        </div>
                        <span className="text-xs py-2" style={check ? { "color": "gray" } : { "color": "black" }}>Select</span>
                    </div>
                    <span style={{ "color": "black", "marginBottom": "35px" }}>---</span>
                    <div className="flex flex-col lg:px-2 lg:py-2 md:px-3 md:py-3 sm:px-3 sm:py-3 sm:py-3 px-2 py-2 items-center justify-center">
                        <div className="flex justify-center itesm-center relative">
                            <div className="rounded-full px-2 py-2 border" style={check ? { "border": "1px solid black" } : { "border": "1px solid gray" }}></div>
                            <FontAwesomeIcon icon={faCheck} className={`absolute bottom-0 ${check ? "" : "hidden"}`} />
                        </div>
                        <span className="text-xs lg:py-2 lg:px-1 md:py-2 md:px-1 sm:py-2 sm:px-1 py-2 px-1" style={check ? { "color": "black" } : { "color": "gray" }}>Pay</span>
                    </div>
                </div>
                <div className="lg:w-full lg:flex md:flex sm:flex flex-col flex justify-center items-center">
                    <h1 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl font-bold">Select Instagram & package</h1>
                    <span className="text-sm">Start by entering your instagram username.</span>
                </div>
                <div className="lg:w-[30%] lg:flex md:flex sm:flex flex justify-center items-center border-dashed border lg:mt-4 rounded-lg">
                    <div className="lg:w-full lg:px-1 lg:py-1 flex items-center">
                        <FontAwesomeIcon icon={faShieldAlt} color="#581c87" />
                        <span className="text-xs px-1">Payments are processed through a PCI DSS compliant payment gateway
                            and all communication is protected using 256-bit encryption.</span>
                    </div>
                    <div className="lg:w-full lg:px-1 lg:py-1 flex items-center">
                        <FontAwesomeIcon icon={faClock} color="#581c87" />
                        <span className="text-xs px-1">Payments are processed through a PCI DSS compliant payment gateway
                            and all communication is protected using 256-bit encryption.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectPackage;