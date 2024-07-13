"use client"
import { FC, useEffect, useState } from "react";
import CouponCodeModal from "./couponCodeModal";

type addCartPorps = {
    isAddCart?: boolean
}

type AddCart = {
    id: number
    followerCount: number
    price: number
}

const UserInfo: FC = () => {
    const [addCart, setAddCart] = useState<string[]>([]);

    const [addCartData, setAddCartData] = useState<AddCart[]>([
        { id: 0, followerCount: 100, price: 2.99 }
    ])

    const [isOpenCouponModal, setIsOpenCouponModal] = useState<boolean>(false);

    return (
        <>
            <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 mt-4 rounded-lg">
                <div className="w-full bg-white rounded-lg py-6 mx-auto my-8">
                    <div className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100">
                        <div className="flex items-center w-12 h-12 rounded-full">
                            <img src="https://randomuser.me/api/portraits/women/2.jpg" className="rounded-full" alt="" />
                            <span className="text-sm px-2">Anna</span>
                        </div>
                    </div>
                    {
                        addCartData.map((item) => (
                            <div key={item.id} className="w-full flex items-center lg:py-2 lg:px-2 border rounded-lg bg-gray-100 mt-4 justify-between">
                                <span className="text-sm px-2 py-2">{item.followerCount} followers</span>
                                <span className="text-sm px-2 py-2">€{item.price}</span>
                            </div>
                        ))
                    }
                    <div className="w-full flex items-center lg:py-2 lg:px-2 rounded-lg mt-4 justify-between">
                        <span className="text-sm px-2 font-bold">Your total</span>
                        <span className="text-sm px-2">€2.99</span>
                    </div>
                    <div className="mt-4 px-2">
                        <button type="button" className="bg-[#664481] text-white px-4 py-2 rounded-lg hover:opacity-80 text-xs" onClick={() => setIsOpenCouponModal(true)} >Apply coupon</button>
                    </div>
                </div>
            </div>
            <CouponCodeModal isOpen={isOpenCouponModal} onClose={() => setIsOpenCouponModal(false)} />
        </>
    )
}

export default UserInfo;