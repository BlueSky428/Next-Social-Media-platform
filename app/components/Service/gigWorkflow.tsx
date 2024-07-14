"use client"
import { FC, useState } from "react";

const GigWorkFlow: FC = () => {

    const [contentShow, setContentShow] = useState<boolean>(false);
    const [contentShow1, setContentShow1] = useState<boolean>(false);

    return (
        <main className="py-4 w-full bg-white lg:px-24">
            <div className="lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="flex flex-col justify-center">
                    <h1 className="text-xl font-bold">Gig workflow</h1>
                    <span className="py-2 text-sm">These are the steps we’ll follow to complete your project.</span>
                </div>
                <div className="w-full flex justify-center p-4 rounded-lg shadow-lg flex-col">
                    <div className="flex flex-col justify-center py-2">
                        <span className="text-sm font-bold">Premium Package.</span>
                        <span className="text-sm">These are the steps we’ll follow to complete your project.</span>
                    </div>
                    <div className="py-4 flex justify-center flex-col">
                        <div className="flex items-center" onClick={() => setContentShow(!contentShow)}>
                            <div className="w-8 h-8 rounded-full flex justify-center items-center border text-sm">1</div>
                            <div className="flex items-center">
                                <span className="px-4 text-base font-bold cursor-pointer">Content creation</span>
                                <svg width="14" height="9" viewBox="0 0 14 9" className={`${contentShow ? "rotate-0 transition duration-300" : "rotate-180 transition duration-300"}`} xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.190647 7.7279L0.809334 8.34662C0.955772 8.49306 1.19321 8.49306 1.33968 8.34662L6.99999 2.69978L12.6603 8.34662C12.8067 8.49306 13.0442 8.49306 13.1906 8.34662L13.8094 7.7279C13.9558 7.58146 13.9558 7.34403 13.8094 7.19756L7.26518 0.65337C7.11874 0.506932 6.8813 0.506932 6.73483 0.65337L0.190647 7.19756C0.044178 7.34403 0.0441781 7.58146 0.190647 7.7279Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-2 px-4 py-2">
                            <div className="border-l flex justify-center items-center py-2 px-8">
                                <div className="flex flex-col justify-center">
                                    <span>I'll create content based on your goals and plan.</span>
                                    {
                                        contentShow ? (
                                            <div className="px-1 bg-gray-100 flex justify-center items-center mt-1 p-2 text-sm">
                                                Requirements:We'll make sure I have everything needed<br /> to complete your project.<br />
                                                Social platform audit:I'll audit your social media<br /> channels and give insight and optimization suggestions.<br />
                                                Research:I’ll do research based on your needs.
                                            </div>
                                        ) : (
                                            <div className="px-1 bg-gray-100 flex justify-center items-center mt-1">
                                                Requirements - Social platform audit · Research
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 flex justify-center flex-col">
                        <div className="flex items-center" onClick={() => setContentShow1(!contentShow1)}>
                            <div className="w-8 h-8 rounded-full flex justify-center items-center border text-sm">2</div>
                            <div className="flex items-center">
                                <span className="px-4 text-base font-bold cursor-pointer">Content creation</span>
                                <svg width="14" height="9" className={`${contentShow1 ? "rotate-0 transition duration-300" : "rotate-180 transition duration-300"}`} viewBox="0 0 14 9" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.190647 7.7279L0.809334 8.34662C0.955772 8.49306 1.19321 8.49306 1.33968 8.34662L6.99999 2.69978L12.6603 8.34662C12.8067 8.49306 13.0442 8.49306 13.1906 8.34662L13.8094 7.7279C13.9558 7.58146 13.9558 7.34403 13.8094 7.19756L7.26518 0.65337C7.11874 0.506932 6.8813 0.506932 6.73483 0.65337L0.190647 7.19756C0.044178 7.34403 0.0441781 7.58146 0.190647 7.7279Z"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex items-center mt-2 px-4 py-2">
                            <div className="border-l flex justify-center items-center py-2 px-8">
                                <div className="flex flex-col justify-center">
                                    <span>I'll create content based on your goals and plan.</span>
                                    {
                                        contentShow1 ? (
                                            <div className="px-1 bg-gray-100 flex justify-center items-center mt-1 p-2 text-sm">
                                                Keyword & hashtag research:I'll research and create a list<br /> of keywords and/or hashtags relevant to your niche.<br />
                                                First draft:I'll prepare a first draft of the delivery.<br />
                                                Modifications:I'll modify assets based on your feedback.
                                            </div>
                                        ) : (
                                            <div className="px-1 bg-gray-100 flex justify-center items-center mt-1">
                                                Keyword & hashtag research · First draft · Modifications
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default GigWorkFlow;