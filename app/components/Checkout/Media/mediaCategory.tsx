"use client"

import { FC, useState } from "react"

type Media = {
    id: number,
    image: any,
    active: boolean
}

type ComponentProps = {
    setComponent?: any,
    setMediaCheck?: any
}

const MediaCategory: FC<ComponentProps> = ({ setComponent, setMediaCheck }) => {

    const [postCount, setPostCount] = useState<number>(0);
    let count = 0;

    const [media, setMedia] = useState<Media[]>(
        [
            { id: 0, image: "/image/media/1.jpg", active: false },
            { id: 1, image: "/image/media/2.jpg", active: false },
            { id: 2, image: "/image/media/3.jpg", active: false },
            { id: 3, image: "/image/media/4.jpg", active: false },
            { id: 4, image: "/image/media/5.jpg", active: false },
            { id: 5, image: "/image/media/6.jpg", active: false },
            { id: 6, image: "/image/media/7.jpg", active: false },
            { id: 7, image: "/image/media/8.jpg", active: false },
            { id: 8, image: "/image/media/9.jpg", active: false },
            { id: 9, image: "/image/media/10.jpg", active: false },
            { id: 10, image: "/image/media/11.jpg", active: false },
            { id: 11, image: "/image/media/12.jpg", active: false },
        ]
    )

    const InstagramItems = (id: number) => {

        if (media[id].active === true) {
            const item = media.map((temp) => (
                temp.id === id
                    ? { ...temp, active: false }
                    : { ...temp, active: temp.active }
            ))
            setMedia(item);
        } else if (media[id].active === false) {
            const item = media.map((temp) => (
                temp.id === id
                    ? { ...temp, active: true }
                    : { ...temp, active: temp.active }
            ))
            setMedia(item);
        }

        let count = 1
        for (let i = 0; i < media.length; i++) {
            if (media[i].active) count++;
        }

        setPostCount(count);

    }

    const nextComponent = () => {
        setComponent("Pay");
        setMediaCheck(true);
    }

    return (
        <div className="lg:w-[35] md:w-auto sm:w-auto w-auto lg:flex flex justify-center flex-col items-center border shadow-2xl
                                lg:mt-4 lg:py-8 md:mt-2 sm:mt-2 mt-4 rounded-xl">
            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1">
                <div className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100">
                    <div className="flex items-center w-12 h-12 rounded-full">
                        <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col justify-center w-auto px-2">
                        <span className="text-sm">Anna</span>
                        <span className="text-sm">100 followers / €2.99</span>
                    </div>
                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-3 w-full mt-4">
                {
                    media.map((item) => (
                        <div key={item.id} className="relative lg:w-40 lg:h-40 md:w-36 md:h-36 sm:w-40 sm:h-36 sm:w-20 w-28 h-28 
                                            flex justify-center items-center lg:p-2 md:p-2 sm:p-2 p-1 rounded-lg cursor-pointer" onClick={() => InstagramItems(item.id)}>
                            <img src={item.image} alt="" className="w-full h-full rounded-lg hover:shadow-lg object-cover" />
                            <div className={`absolute w-full h-full rounded-lg flex justify-center items-center text-white ${item.active ? "bg-[rgba(0,0,0,0.4)]" : "hidden"}`}>
                                <img src="/image/svg/heart.svg" className="w-6" alt="" />
                                <span className="px-1">100</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1 mt-4">
                <div className="w-full flex items-center justify-center lg:py-4 lg:px-2 border rounded-lg bg-gray-100 cursor-pointer">
                    <div className="flex justify-center items-center w-auto px-2">
                        <span className="text-sm">Load more</span>
                    </div>
                </div>
            </div>

            <div className="w-full bg-white rounded-lg mx-auto max-w-2xl lg:px-2 md:px-2 sm:px-2 px-1 mt-4">
                <div className="w-full flex items-center justify-between lg:py-4 lg:px-2 border rounded-lg bg-gray-100 cursor-pointer">
                    <div className="flex justify-center w-auto px-2">
                        <span className="text-sm">Selected {postCount} post</span>
                    </div>
                    <button type="button" className="px-6 py-2 text-white rounded-lg flex justify-center items-center bg-[#581c87]" onClick={nextComponent}>
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MediaCategory;