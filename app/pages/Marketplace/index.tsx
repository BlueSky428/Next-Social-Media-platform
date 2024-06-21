import { FC } from "react";
import FirstComponent from "@/app/components/MarketplaceComponent/firstComponent";
import SecondComponent from "@/app/components/MarketplaceComponent/secondComponent";
import ReviewsComponent from "@/app/components/MarketplaceComponent/reviews";
import Marketplace from "@/app/components/MarketplaceComponent/marketplace";

const MarketPlaceIndex: FC = () => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white sm:py-12">
            <FirstComponent />
            <Marketplace />
            <SecondComponent />
            <ReviewsComponent />
        </div>
    )
}

export default MarketPlaceIndex;