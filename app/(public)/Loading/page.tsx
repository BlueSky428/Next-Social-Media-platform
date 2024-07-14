"use client"
import { FC } from "react";

const Loading: FC = () => {

    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-[#664481] animate-spin absolute"></div>
        </div>
    )
}

export default Loading;