"use client"
import { FC } from "react"

type InstagramVideoDownloader = {
    id: number,
    title: string,
    explain: string,
    labelname: string,
    buttonContent: string,
    placeholder: string
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
            labelname: "INSTAGRAM POST URL",
            buttonContent: "Download",
            placeholder: "http://instagram.com..."
        },
        {
            id: 1,
            title: "Instagram Profile Picture Viewer",
            explain: "This handy tool takes an Insta profile photo and displays it in full size, giving you a clear and realistic view of the picture.",
            labelname: "NSTAGRAM USERNAME",
            buttonContent: "Check",
            placeholder: "doggo_botox"
        }
    ]

    return (
        <>
            {
                type === "Instagram Video Downloader" ? (
                    <div className="w-full flex flex-col justify-center items-center lg:mt-12 md:mt-0 sm:mt-0 mt-28 ">
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[0].title}</h1>
                            <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">{instagramvideodownloader[0].explain}</span>
                        </div>
                        <div className="lg:w-[55%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <div className="lg:px-8 md:px-4 sm:px-4 px-4 lg:py-1 md:py-1 lg:text-sm md:text-sm sm:text-sm py-1 text-xs bg-[#9333EA] text-white rounded-lg text-center">The account you will use our free service for must not be private.</div>
                            <div className="py-4 lg:w-2/3 flex justify-center">
                                <div className="flex w-full items-center flex-col mt-2">
                                    <div className="w-full flex justify-center itmes-center">
                                        <div className="w-[90%] flex items-center text-xs">{instagramvideodownloader[0].labelname}</div>
                                    </div>
                                    <div className="w-full flex justify-center items-center gap-2">
                                        <input
                                            type="text"
                                            name="guest"
                                            id="guest"
                                            placeholder={instagramvideodownloader[0].placeholder}
                                            min="0"
                                            className="w-[60%] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        <button className="w-[30%] hover:shadow-form rounded-md bg-[#581C87] py-3 px-8 text-center text-base font-semibold text-white outline-none flex justify-center items-center">
                                            {instagramvideodownloader[0].buttonContent}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-col justify-center items-center lg:mt-12 md:mt-0 sm:mt-0 mt-28">
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <h1 className="font-bold lg:text-3xl md:text-3xl sm:text-2xl text-xl text-black">{instagramvideodownloader[1].title}</h1>
                            <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs">
                                {instagramvideodownloader[1].explain}
                            </span>
                        </div>
                        <div className="lg:w-[55%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <div className="py-4 lg:w-2/3 flex justify-center">
                                <div className="flex w-full items-center flex-col mt-2">
                                    <div className="w-full flex justify-center itmes-center">
                                        <div className="w-[90%] flex items-center text-xs">{instagramvideodownloader[1].labelname}</div>
                                    </div>
                                    <div className="w-full flex justify-center items-center gap-2">
                                        <input
                                            type="text"
                                            name="guest"
                                            id="guest"
                                            placeholder={instagramvideodownloader[1].placeholder}
                                            min="0"
                                            className="w-[60%] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                        <button className="w-[30%] hover:shadow-form rounded-md bg-[#581C87] py-3 px-8 text-center text-base font-semibold text-white outline-none flex justify-center items-center">
                                            {instagramvideodownloader[1].buttonContent}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default InstagramDownloader;