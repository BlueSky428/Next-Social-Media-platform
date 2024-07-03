"use client"
import InstagramReview from "@/app/components/Instagram/InstagramReview";
import CategoryButton from "@/app/components/Instagram/category";
import ExplainInstagramDownloader from "@/app/components/Instagram/exlpain";
import InputComponent from "@/app/components/Instagram/inputComponent";
import InstagramDownloader from "@/app/components/Instagram/instagramDownloader";
import FAQ from "@/app/components/Section/faq";
import ServiceCard from "@/app/components/Section/section";
import { FC, useState } from "react";

const InstagramIndex: FC = () => {

    const [categorybutton, setCategoryButton] = useState<string>("Profile Picture Viewer");

    return (
        <>
            <div className="relative flex md:justify-center md:items-center sm:justify-center sm:items-center min-h-screen flex-col overflow-hidden bg-white sm:py-12">
                <InstagramDownloader type={categorybutton} />
                <CategoryButton setContent={setCategoryButton} />
                <InputComponent type={categorybutton} />
                <ServiceCard />
                <ExplainInstagramDownloader type={categorybutton} />
            </div>
            <InstagramReview />
            <FAQ />
        </>
    )
}

export default InstagramIndex;