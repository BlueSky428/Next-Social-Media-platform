"use client"
import { socialType, categoryData } from "@/app/data/Marketplace/marketplaceData";
import { FC, useRef, useState } from "react";

type CategoryProps = {
    setCategory?: any,
    category?: number
}

const FirstComponent: FC<CategoryProps> = ({ setCategory, category }) => {

    const containerRef = useRef<HTMLDivElement>(null);
    const [parentID, setParentID] = useState<number>(0);

    const scrollToLeft = () => {
        const container = containerRef.current;
        if (container && container.lastElementChild) {
            const containerWidth = container.offsetWidth;
            const scrollWidth = container.scrollWidth;
            const maxScrollLeft = scrollWidth - 1000;
            container.scrollTo({
                left: 800,
                behavior: 'smooth',
            });
        }
    }

    const scrollToRight = () => {
        const container = containerRef.current;
        if (container) {
            container.scrollTo({
                left: 0,
                behavior: 'smooth',
            });
        }
    }

    const handleCategory = (id: number) => {
        setCategory(id);
        setParentID(id);
    }

    return (
        <section className="mx-auto max-w-screen-xl px-4 w-full justify-center lg:mt-14 md:mt-14 sm:mt-18 mt-20">
            <div className="lg:w-[80rem] md:w-full sm:w-full w-full flex items-center lg:mt-0 md:mt-0 sm:mt-4 mt-8">
                <a href="/homepage" className="max-w-full leading-normal text-xs text-muted-foreground sm:leading-7 cursor-pointer transition duration-300 hover:text-[#664481]">Home</a><pre> </pre>
                <p className="max-w-[85%] leading-normal text-sm text-muted-foreground sm:leading-7">/</p><pre> </pre>
                <a className="max-w-[85%] leading-normal text-xs text-muted-foreground sm:leading-7 cursor-pointer transition duration-300 hover:text-[#664481]">Digital Marketing</a>
            </div >
            <div className="mx-auto max-w-screen-xl w-full justify-center mt-4">
                {
                    category === -1 ? (
                        <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-2xl font-bold text-gray-600">Social Media Marketing</h2>
                    ) : (
                        <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-2xl font-bold text-gray-600">{socialType.filter((socialtype => socialtype.id === category)).map((socialtype) => (socialtype.content))}</h2>
                    )
                }
                <p className="max-w-[85%] leading-normal text-sm text-muted-foreground sm:leading-7 mt-2">Boost your online presence with compelling social media content.</p>
            </div>
            <div className="lg:mx-auto md:w-full sm:w-full w-full relative lg:flex md:flex sm:hidden hidden mt-8">
                <div className="flex justify-center w-auto gap-2 absolute -right-8 bottom-0 mb-4">
                    <div className="lg:w-8 lg:h-8 md:w-8 sm:w-8 sm:h-8 w-8 h-8 rounded-full flex justify-center items-center border cursor-pointer" onClick={scrollToRight}>
                        <svg width="14" height="14" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                            <path d="m7.228.69.619.62a.375.375 0 0 1 0 .53L2.2 7.5l5.647 5.66a.375.375 0 0 1 0 .53l-.62.62a.375.375 0 0 1-.53 0L.154 7.764a.375.375 0 0 1 0-.53L6.698.69a.375.375 0 0 1 .53 0Z"></path>
                        </svg>
                    </div>
                    <div className="lg:w-8 lg:h-8 md:w-8 sm:w-8 sm:h-8 w-8 h-8 rounded-full flex justify-center items-center border cursor-pointer" onClick={scrollToLeft}>
                        <svg className="rotate-180" width="14" height="14" viewBox="0 0 8 15" xmlns="http://www.w3.org/2000/svg" fill="currentFill">
                            <path d="m7.228.69.619.62a.375.375 0 0 1 0 .53L2.2 7.5l5.647 5.66a.375.375 0 0 1 0 .53l-.62.62a.375.375 0 0 1-.53 0L.154 7.764a.375.375 0 0 1 0-.53L6.698.69a.375.375 0 0 1 .53 0Z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            <div ref={containerRef} className="lg:w-full md:w-full sm:w-full w-full lg:overflow-x-hidden md:overflow-x-auto overflow-x-auto px-1 border-b">
                <div className="min-w-max flex items-center gap-2">
                    {socialType.map((socialtype) => (
                        <div key={socialtype.id} className="lg:w-[15rem] md:w-[12rem] sm:w-[10rem] w-[10rem] flex justify-center items-center" onClick={() => handleCategory(socialtype.id)}>
                            <a className="relative overflow-hidden border rounded-full transition duration-300 lg:h-auto md:h-auto sm:h-12 h-12 bg-background flex items-center cursor-pointer hover:border-black w-full lg:p-4 md:p-2 sm:p-2 p-1">
                                <img src={socialtype.icon} alt="" className="lg:w-8 lg:h-8 md:w-6 md:h-6 sm:w-6 sm:h-6 w-4 h-4" style={{ scrollSnapAlign: 'start' }} />
                                <div className="space-y-2 flex items-center px-6">
                                    <h3 className="lg:font-bold md:text-xs sm:text-xs text-xs">{socialtype.content}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="mt-8 min-w-max flex items-center gap-2 border-t">
                    {
                        categoryData.filter((category) => category.parentID === parentID).map((item) => (
                            <div key={item.id} className="w-auto px-2 flex justify-center items-center py-1 transition duration-300 hover:bg-gray-300">
                                <a className="cursor-pointer text-sm">{item.content}</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FirstComponent;