"use client"
import { FC, useEffect } from "react"

type InstagramVideoDownloader = {
    id: number,
    title: string,
    explain: string,
}

type Type = {
    type?: string
}

const InstagramDownloader: FC<Type> = ({ type }) => {

    const instagramvideodownloader: InstagramVideoDownloader[] = [
        {
            id: 0,
            title: "Instagram Video Downloader",
            explain: "With just a few quick and easy steps, you can now keep almost any IG video in personal collection to be watched over and over again, or to be shored with relatives and friends.",
        },
        {
            id: 1,
            title: "Instagram Profile Picture Viewer",
            explain: "This handy tool takes an Insta profile photo and displays it in full size, giving you a clear and realistic view of the picture.",
        },
        {
            id: 2,
            title: "Instagram Story Downloader",
            explain: "Stories has been one of the most popular and successful features that Instagram has added to the app in recent years.",
        },
        {
            id: 3,
            title: "Instagram Followers Counter",
            explain: "You enter an Instagram username and the tool instantly tells you how many followers the user has.",
        }
    ]

    const renderContent = () => {
        switch (type) {
            case "Profile Picture Viewer":
                return (
                    <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[0].title}</h1>
                        <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">{instagramvideodownloader[0].explain}</span>
                    </div>
                )
            case "Download Video":
                return (
                    <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[1].title}</h1>
                        <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">{instagramvideodownloader[1].explain}</span>
                    </div>
                )
            case "Download Stories":
                return (
                    <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[2].title}</h1>
                        <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">{instagramvideodownloader[2].explain}</span>
                    </div>
                )
            case "Follower Counter":
                return (
                    <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[3].title}</h1>
                        <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">{instagramvideodownloader[3].explain}</span>
                    </div>
                )
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-12 md:mt-0 sm:mt-0 mt-28 ">
            {renderContent()}
        </div>
    )
}

export default InstagramDownloader;