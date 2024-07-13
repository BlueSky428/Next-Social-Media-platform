"use client"
// import { mediaData } from "@/app/data/Checkout/checkoutData"
import { mediaData } from "@/app/data/Checkout/checkoutData"
import { FC, useEffect, useState } from "react"

type Media = {
    id: number,
    image: any,
    active: boolean,
    selectCount: boolean,
}

type ComponentProps = {
    setComponent?: any,
    setMediaCheck?: any
    userName?: string
    packageName?: string
}

const MediaCategory: FC<ComponentProps> = ({ setComponent, setMediaCheck, userName, packageName }) => {

    const [postCount, setPostCount] = useState<number>(0);
    const [media, setMedia] = useState<Media[]>(mediaData);
    const [selectCount, setSelectCount] = useState<number>(0);
    const [maxSelect, setMaxSelect] = useState<number>(0);
    const [length, setLength] = useState<number>(0);

    const InstagramItems = (id: number) => {
        if (media[id].active === true) {
            const item = media.map((temp) => (
                temp.id === id && temp.selectCount === true
                    ? { ...temp, active: false, selectCount: false }
                    : { ...temp, active: temp.active }
            ))
            setMedia(item);

            let count = 0
            for (let i = 0; i < media.length; i++) {
                if (media[i].active) count++
            }
            setPostCount(count + 1);
        } else if (media[id].active === false) {
            if (maxSelect > 0) {
                const item = media.map((temp) => (
                    temp.id === id && temp.selectCount === false
                        ? { ...temp, active: true, selectCount: true }
                        : { ...temp, active: temp.active }
                ))
                setMedia(item);
                if (maxSelect - 1 > 0) setSelectCount(selectCount * (maxSelect - 1));
                else setSelectCount(selectCount * maxSelect);
                setMaxSelect(maxSelect - 1);
            }
        }
    }

    const nextComponent = () => {
        setComponent("Pay");
        setMediaCheck(true);
    }

    useEffect(() => {
        if (packageName !== "" && packageName !== undefined) {
            const followersMatch: RegExpMatchArray | null = packageName.match(/^\d+/);
            const followers: string = followersMatch ? followersMatch[0] : "";
            const count: number = parseInt(followers, 10);
            setSelectCount(count);
            setMaxSelect(count / 50);
        }
    }, [packageName])

    return (
        <div className="lg:w-[35%] md:w-auto sm:w-auto w-[90%] lg:flex flex justify-center flex-col items-center border shadow-2xl
                                lg:mt-4 lg:py-8 md:mt-2 sm:mt-2 mt-4 rounded-xl">
            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1">
                <div className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100">
                    <div className="flex items-center w-12 h-12 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col justify-center w-auto px-2">
                        <span className="text-sm">{userName}</span>
                        <span className="text-sm">{packageName}</span>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 w-full mt-4">
                {
                    media.map((item) => (
                        <div key={item.id} className="relative lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-40 sm:h-36 sm:w-20 w-30 h-32 
                                            flex justify-center items-center lg:p-2 md:p-2 sm:p-2 p-1 rounded-lg cursor-pointer" onClick={() => InstagramItems(item.id)}>
                            <img src={item.image} alt="" className="w-full h-full rounded-lg hover:shadow-lg object-cover" />
                            <div className={`absolute w-full h-full rounded-lg flex justify-center items-center text-white ${item.active ? "bg-[rgba(0,0,0,0.4)]" : "hidden"}`}>
                                <img src="/image/svg/heart.svg" className="w-6" alt="" />
                                <span className="px-1">{selectCount}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1 mt-4">
                <div className="w-full flex items-center justify-center lg:py-4 lg:px-2 border rounded-lg bg-gray-100 cursor-pointer">
                    <div className="flex justify-center items-center w-auto lg:px-2 md:px-2 py-3">
                        <span className="text-sm">Load more</span>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1 mt-4">
                <div className="w-full flex items-center justify-between lg:py-4 lg:px-2 py-2 border rounded-lg bg-gray-100 cursor-pointer">
                    <div className="flex justify-center w-auto px-2">
                        <span className="text-sm">Selected {postCount} post</span>
                    </div>
                    <button type="button" className="lg:px-6 lg:py-2 md:px-4 md:py-2 sm:px-4 sm:py-2 px-3 py-1 text-white rounded-lg flex justify-center items-center bg-[#664481]" onClick={nextComponent}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MediaCategory;