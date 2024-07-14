"use client"
import { FC } from "react"
import ServiceHeader from "@/app/components/Service/header"
import DetailContent from "@/app/components/Service/detailContent"
import ServiceImageContent from "@/app/components/Service/serviceContentImage"
import ServiceDescription from "@/app/components/Service/serviceDescription"
import ServiceFAQ from "@/app/components/Service/serviceFAQ"
import Navigate from "@/app/components/Service/navigate"
import SimpleReview from "@/app/components/Service/simpleReview"
import AboutMe from "@/app/components/Service/aboutMe"
import Review from "@/app/components/Service/Review"
import SearchCard from "@/app/components/Service/search"
import UserReviewCard from "@/app/components/Service/userReviewCard"
import List from "@/app/components/Service/list"
import Header from "@/app/components/Header/page"
import Footer from "@/app/components/Footer/page"

const Service: FC = () => {

    return (
        <>
            <Header />
            <div className="relative flex md:justify-center md:items-center sm:justify-center sm:items-center min-h-screen flex-col overflow-hidden bg-white sm:py-12">
                <Navigate />
                <ServiceHeader />
                <DetailContent />
                <ServiceImageContent />
                <SimpleReview />
                <ServiceDescription />
                <AboutMe />
                <ServiceFAQ />
                <Review />
                <SearchCard />
                <UserReviewCard />
                <div className="absolute top-24 right-52 flex-col w-96 h-auto lg:flex md:hidden sm:hidden hidden">
                    <List />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Service;