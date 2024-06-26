"use client"
import { FC, useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CheckProps = {
    SelectCheck?: boolean
    PayCheck?: boolean
    Headertitle?: string
    HeaderContent?: string
}

const PaymentHeader: FC<CheckProps> = ({ SelectCheck, PayCheck, Headertitle, HeaderContent }) => {

    return (
        <>
            <div className="lg:w-full lg:flex md:flex sm:flex flex justify-center items-center">
                <div className="flex flex-col lg:px-2 lg:py-2 md:px-3 md:py-3 sm:px-3 sm:py-3 px-2 py-2 items-center justify-center">
                    <div className="flex justify-center itesm-center relative">
                        <div className="rounded-full px-2 py-2 border" style={SelectCheck ? { "border": "1px solid gray" } : { "border": "1px solid black" }}></div>
                        <FontAwesomeIcon icon={faCheck} className={`absolute bottom-0 w-4 ${SelectCheck ? "" : "hidden"}`} />
                    </div>
                    <span className="text-xs py-2" style={SelectCheck ? { "color": "gray" } : { "color": "black" }}>Select</span>
                </div>
                <span style={{ "color": "black", "marginBottom": "35px" }}>---</span>
                <div className="flex flex-col lg:px-2 lg:py-2 md:px-3 md:py-3 sm:px-3 sm:py-3 sm:py-3 px-2 py-2 items-center justify-center">
                    <div className="flex justify-center itesm-center relative">
                        <div className="rounded-full px-2 py-2 border" style={PayCheck ? { "border": "1px solid black" } : { "border": "1px solid gray" }}></div>
                        <FontAwesomeIcon icon={faCheck} className={`absolute bottom-0 w-4 ${PayCheck ? "" : "hidden"}`} />
                    </div>
                    <span className="text-xs lg:py-2 lg:px-1 md:py-2 md:px-1 sm:py-2 sm:px-1 py-2 px-1" style={PayCheck ? { "color": "black" } : { "color": "gray" }}>Pay</span>
                </div>
            </div>
            <div className="lg:w-full lg:flex md:flex sm:flex flex-col flex justify-center items-center">
                <h1 className="lg:text-2xl md:text-2xl sm:text-2xl text-xl font-bold">{Headertitle} & package</h1>
                <span className="text-sm">{HeaderContent}</span>
            </div>
        </>
    )
}

export default PaymentHeader;