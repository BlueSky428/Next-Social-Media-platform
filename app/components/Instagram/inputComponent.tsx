import { FC, useEffect } from "react";

type InstagramVideoDownloader = {
    id: number,
    labelname: string,
    buttonContent: string,
    placeholder: string
}

type Type = {
    type?: string
}


const InputComponent: FC<Type> = ({ type }) => {

    const instagramvideodownloader: InstagramVideoDownloader[] = [
        {
            id: 0,
            labelname: "INSTAGRAM USERNAME",
            buttonContent: "Download",
            placeholder: "Enter Username"
        },
        {
            id: 1,
            labelname: "Photo URL",
            buttonContent: "Check",
            placeholder: "doggo_botox"
        },
        {
            id: 2,
            labelname: "INSTAGRAM USERNAME",
            buttonContent: "Check",
            placeholder: ""
        },
        {
            id: 3,
            labelname: "INSTAGRAM USERNAME",
            buttonContent: "Check",
            placeholder: ""
        }
    ]

    const renderContent = () => {
        switch (type) {
            case "Profile Picture Viewer":
                return (
                    <div className="lg:w-[55%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
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
                )
            case "Download Video":
                return (
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
                )
            case "Download Stories":
                return (
                    <div className="lg:w-[55%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <div className="py-4 lg:w-2/3 flex justify-center">
                            <div className="flex w-full items-center flex-col mt-2">
                                <div className="w-full flex justify-center itmes-center">
                                    <div className="w-[90%] flex items-center text-xs">{instagramvideodownloader[2].labelname}</div>
                                </div>
                                <div className="w-full flex justify-center items-center gap-2">
                                    <input
                                        type="text"
                                        name="guest"
                                        id="guest"
                                        placeholder={instagramvideodownloader[2].placeholder}
                                        min="0"
                                        className="w-[60%] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    <button className="w-[30%] hover:shadow-form rounded-md bg-[#581C87] py-3 px-8 text-center text-base font-semibold text-white outline-none flex justify-center items-center">
                                        {instagramvideodownloader[2].buttonContent}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            case "Follower Counter":
                return (
                    <div className="lg:w-[55%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                        <div className="py-4 lg:w-2/3 flex justify-center">
                            <div className="flex w-full items-center flex-col mt-2">
                                <div className="w-full flex justify-center itmes-center">
                                    <div className="w-[90%] flex items-center text-xs">{instagramvideodownloader[3].labelname}</div>
                                </div>
                                <div className="w-full flex justify-center items-center gap-2">
                                    <input
                                        type="text"
                                        name="guest"
                                        id="guest"
                                        placeholder={instagramvideodownloader[3].placeholder}
                                        min="0"
                                        className="w-[60%] appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    />
                                    <button className="w-[30%] hover:shadow-form rounded-md bg-[#581C87] py-3 px-8 text-center text-base font-semibold text-white outline-none flex justify-center items-center">
                                        {instagramvideodownloader[3].buttonContent}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        }
    }

    return (
        <div className="w-full flex flex-col justify-center items-center lg:mt-4 md:mt-0 sm:mt-0 mt-2 ">
            {renderContent()}
        </div>
    )
}

export default InputComponent;