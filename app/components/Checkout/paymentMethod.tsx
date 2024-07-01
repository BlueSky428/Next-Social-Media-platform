import { FC } from "react";

const PaymentMethod: FC = () => {
    return (
        <div className="lg:w-[35%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border-dashed
                                lg:mt-12 md:mt-12 sm:mt-12 mt-12 rounded-lg" style={{ "border": "1px dashed #581c87" }}>
            <div className="w-full flex justify-center items-center">
                <span className="text-sm py-2">Accepted payment methods</span>
            </div>
            <div className="w-full flex justify-center items-center py-2">
                <div className="w-14 px-2">
                    <img src="/image/svg/apple.svg" alt="" className="w-full" />
                </div>
                <div className="w-14 px-2">
                    <img src="/image/svg/visa.svg" alt="" className="w-full" />
                </div>
                <div className="w-14 px-2">
                    <img src="/image/svg/payment.svg" alt="" className="w-full" />
                </div>
                <div className="w-14 px-2">
                    <img src="/image/svg/payment1.svg" alt="" className="w-full" />
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;