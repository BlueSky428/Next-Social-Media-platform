import { FC } from "react";
import Marketplace from "./marketplace";
import FirstComponent from "@/app/components/MarketplaceComponent/firstComponent";

const MarketPlaceIndex: FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white sm:py-12">
            <FirstComponent />
            <Marketplace />
        </div>
    )
}

export default MarketPlaceIndex;