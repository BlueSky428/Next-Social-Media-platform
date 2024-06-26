"use client"
import AddCart from "@/app/components/Checkout/addCart"
import Payment from "@/app/components/Checkout/payment"
import PaymentContent from "@/app/components/Checkout/paymentContent"
import PaymentHeader from "@/app/components/Checkout/paymentHeaderBar"
import PaymentMethod from "@/app/components/Checkout/paymentMethod"
import PaymentSection from "@/app/components/Checkout/paymentSection"
import Setting from "@/app/components/Checkout/setting"
import UserInfo from "@/app/components/Checkout/userInfo"
import { FC, useEffect, useState } from "react"

const CheckOut: FC = () => {

    const [isSelectCheck, setIsSelectCheck] = useState<boolean>(false);
    const [isPayCheck, setIsPayCheck] = useState<boolean>(false);
    const [nextStep, setNextStep] = useState<boolean>(false);
    const [headerTitle, setHeaderTitle] = useState<string>("Select Instagram");
    const [headerContent, setHeaderContent] = useState<string>("Start by entering your instagram username.");

    useEffect(() => {
        if (nextStep) {
            setHeaderTitle("Summary");
            setHeaderContent("Your transaction details are always end-to-end encrypted.")
        } else {
            setHeaderTitle("Select Instagram");
            setHeaderContent("Start by entering your instagram username.");
            setIsSelectCheck(false);
            setIsPayCheck(false);
        }
    }, [nextStep])

    return (
        <div className="w-full flex justify-cetner items-center bg-white">
            <div className="lg:mt-20 md:mt-32 sm:mt-32 mt-32 w-full bg-white justify-center">
                <div className="lg:w-full md:w-full flex flex-col items-center lg:px-0 md:px-0 sm:px-0 px-1 py-2">
                    <PaymentHeader SelectCheck={isSelectCheck} PayCheck={isPayCheck} Headertitle={headerTitle} HeaderContent={headerContent} />
                    {
                        nextStep ? (
                            <>
                                <AddCart setPrevious={setNextStep} />
                                <UserInfo />
                                <Setting />
                                <Payment />
                            </>
                        ) : (
                            <>
                                <PaymentSection />
                                <PaymentContent setSelectCheck={setIsSelectCheck} setPayCheck={setIsPayCheck} SelectCheck={isSelectCheck} setNextStep={setNextStep} NextStep={nextStep} />
                            </>
                        )
                    }
                    <PaymentMethod />
                </div>
            </div>
        </div>
    )
}

export default CheckOut;