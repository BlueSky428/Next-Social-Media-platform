"use client"
import { FC, useEffect, useRef } from "react";

const Loading: FC = () => {

    const loadingRef = useRef(null)

    useEffect(() => {
        setTimeout(() => {
        }, 2500)
    }, [])

    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <div className="rounded-md h-12 w-12 border-4 border-t-4 border-[#581C87] animate-spin absolute"></div>
        </div>
    )
}

export default Loading;