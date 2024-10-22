"use client"
import Footer from "@/app/components/Footer/page";
import Header from "@/app/components/Header/page";
import DemoComponent from "@/app/components/homepage/demo";
import ExpertFreelancer from "@/app/components/homepage/expertFreelancer";
import HomePageComponent from "@/app/components/homepage/homepage";
import LastSection from "@/app/components/homepage/lastSection";
import PopularCategory from "@/app/components/homepage/popularCategory";
import Section from "@/app/components/homepage/section";
import TrendingOffers from "@/app/components/homepage/trendingOffers";
import UserSection from "@/app/components/homepage/userSection";
import { FC } from "react";

const HomePage: FC = () => {
    return (
        <>
            <Header />
            <HomePageComponent />
            <DemoComponent />
            <PopularCategory />
            <Section />
            <UserSection />
            <ExpertFreelancer />
            <TrendingOffers />
            <LastSection />
            <Footer />
        </>
    )
}

export default HomePage;