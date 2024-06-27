"use client"
import AddCart from "@/app/components/Checkout/Pay/addCart"
import MediaSection from "@/app/components/Checkout/Media/mediaSection"
import Payment from "@/app/components/Checkout/Pay/payment"
import PaymentContent from "@/app/components/Checkout/Select/paymentContent"
import PaymentHeader from "@/app/components/Checkout/paymentHeaderBar"
import PaymentMethod from "@/app/components/Checkout/paymentMethod"
import PaymentSection from "@/app/components/Checkout/Select/paymentSection"
import Setting from "@/app/components/Checkout/Pay/setting"
import UserInfo from "@/app/components/Checkout/Pay/userInfo"
import { FC, useEffect, useState } from "react"
import MediaCategory from "@/app/components/Checkout/Media/mediaCategory"

const CheckOut: FC = () => {

    const [isSelectCheck, setIsSelectCheck] = useState<boolean>(false);
    const [isPayCheck, setIsPayCheck] = useState<boolean>(false);
    const [isMediaCheck, setIsMediaCheck] = useState<boolean>(false);
    const [nextStep, setNextStep] = useState<string>("Select");
    const [headerTitle, setHeaderTitle] = useState<string>("Select Instagram");
    const [headerContent, setHeaderContent] = useState<string>("Start by entering your instagram username.");

    useEffect(() => {
        if (nextStep === "Select") {
            setHeaderTitle("Select Instagram & package");
            setHeaderContent("Start by entering your instagram username");
        } else if (nextStep === "Media") {
            setHeaderTitle("Media selection");
            setHeaderContent("You can split your package between multiple posts and the package amount will be distributed evenly.");
        } else if (nextStep === "Pay") {
            setHeaderTitle("Summary & package");
            setHeaderContent("Your transaction details are always end-to-end encrypted.");
        }
    }, [nextStep])

    const renderComponent = () => {
        console.log(nextStep);
        switch (nextStep) {
            case "Select":
                return (
                    <>
                        <PaymentSection />
                        <PaymentContent setSelectCheck={setIsSelectCheck} setPayCheck={setIsPayCheck}
                            SelectCheck={isSelectCheck} setNextStep={setNextStep} NextStep={nextStep} setMediaCheck={setIsMediaCheck} MediaCheck={isMediaCheck} />
                    </>
                )
            case "Media":
                return (
                    <>
                        <MediaSection setComponent={setNextStep} currentComponent={nextStep} setSelect={setIsSelectCheck} />
                        <MediaCategory setComponent={setNextStep} setMediaCheck={setIsMediaCheck} />
                    </>
                )
            case "Pay":
                return (
                    <>
                        <AddCart setPrevious={setNextStep} currentComponent={nextStep} setMedia={setIsMediaCheck} />
                        <UserInfo />
                        <Setting />
                        <Payment />
                    </>
                )
        }
    }

    return (
        <div className="w-full flex justify-cetner items-center bg-white">
            <div className="lg:mt-20 md:mt-32 sm:mt-32 mt-32 w-full bg-white justify-center">
                <div className="lg:w-full md:w-full flex flex-col items-center lg:px-0 md:px-0 sm:px-0 px-1 py-2">
                    <PaymentHeader SelectCheck={isSelectCheck} PayCheck={isPayCheck} Media={isMediaCheck} Headertitle={headerTitle} HeaderContent={headerContent} />
                    {renderComponent()}
                    {/* {
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
                    } */}
                    <PaymentMethod />
                </div>
            </div>
        </div>
    )
}

export default CheckOut;