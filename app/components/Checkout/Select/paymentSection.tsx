import { FC } from "react";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { faCarRear, faClock, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PaymentSection: FC = () => {
    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border-dashed
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg" style={{ "border": "1px dashed #581c87" }}>
            <div className="lg:w-full md:w-full sm:w-full w-full lg:px-1 lg:py-2 sm:py-1 lg:px-2 md:px-2 sm:px-2 px-2 md:py-2 py-2 flex items-center">
                <FontAwesomeIcon icon={faShieldAlt} color="#581c87" />
                <span className="text-xs lg:px-2 md:px-2 sm:px-2 px-2">Payments are processed through a PCI DSS compliant payment gateway
                    and all communication is protected using 256-bit encryption.</span>
            </div>
            <div className="lg:w-full md:w-full sm:w-full w-full lg:px-1 lg:py-2 sm:py-1 lg:px-2 md:py-2 py-2 sm:px-2 px-2 md:px-2 flex items-center">
                <FontAwesomeIcon icon={faClock} color="#581c87" />
                <span className="text-xs lg:px-2 md:px-2 sm:px-2 px-2">Control delivery speed of selected services to achieve perfect timing.</span>
            </div>
            <div className="lg:w-full md:w-full sm:w-full w-full lg:px-1 lg:py-2 sm:py-1 lg:px-2 md:py-2 py-2 sm:px-2 md:px-2 px-2 flex items-center">
                <FontAwesomeIcon icon={faCarRear} color="#581c87" />
                <span className="text-xs lg:px-2 md:px-2 sm:px-2 px-2">Track delivery of your likes live. You will receive a link together with your receipt.</span>
            </div>
            <div className="lg:w-full md:w-full sm:w-full w-full lg:px-1 lg:py-2 sm:py-1 lg:px-2 md:py-2 py-2 sm:px-2 md:px-2 px-2 flex items-center">
                <FontAwesomeIcon icon={faFacebookMessenger} color="#581c87" />
                <span className="text-xs lg:px-2 md:px-2 sm:px-2 px-2">Professional support all the way.</span>
            </div>
        </div>
    )
}

export default PaymentSection