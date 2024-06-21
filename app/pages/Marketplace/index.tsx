import { FC } from "react";
import Marketplace from "./marketplace";
import FirstComponent from "@/app/components/MarketplaceComponent/firstComponent";
import SecondComponent from "@/app/components/MarketplaceComponent/secondComponent";

const MarketPlaceIndex: FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white sm:py-12">
            <FirstComponent />
            <Marketplace />
            <SecondComponent />
        </div>
    )
}

export default MarketPlaceIndex;