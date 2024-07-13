"use client"
import { FC, useState } from "react";
import FirstComponent from "@/app/components/MarketplaceComponent/firstComponent";
import SecondComponent from "@/app/components/MarketplaceComponent/secondComponent";
import ReviewsComponent from "@/app/components/MarketplaceComponent/reviews";
import Marketplace from "@/app/components/MarketplaceComponent/marketplace";
import BestFreelancer from "@/app/components/MarketplaceComponent/bestFreelancer";
import MarketFAQ from "@/app/components/MarketplaceComponent/markepFAQ";
import PriceComponent from "@/app/components/MarketplaceComponent/priceComponent";
import Category from "@/app/components/MarketplaceComponent/Category";
import Pagination from "@/app/components/pagination";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const MarketPlaceIndex: FC = () => {

    const [category, setCategory] = useState<number>(-1);

    return (
        <>
            <Header />
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white sm:py-12">
                <FirstComponent setCategory={setCategory} category={category} />
                <Category />
                <Marketplace categoryID={category} />
                <Pagination />
                <SecondComponent />
                <ReviewsComponent />
                <BestFreelancer />
                <MarketFAQ />
                <PriceComponent />
                <Footer />
            </div>
        </>
    )
}

export default MarketPlaceIndex;