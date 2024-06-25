"use client"
import SelectPackage from "@/app/components/Checkout/selectPaymentWay"
import { FC } from "react"

const CheckOut: FC = () => {
    return (
        <div className="w-full flex justify-cetner items-center bg-white">
            <SelectPackage />
        </div>
    )
}

export default CheckOut;