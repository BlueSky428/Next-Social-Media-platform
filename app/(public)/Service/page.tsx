"use client"
import { FC } from "react"
import ServiceHeader from "@/app/components/Service/header"
import DetailContent from "@/app/components/Service/detailContent"
import ServiceImageContent from "@/app/components/Service/serviceContentImage"
import ServiceDescription from "@/app/components/Service/serviceDescription"
import ServiceFAQ from "@/app/components/Service/serviceFAQ"
import ServiceReview from "@/app/components/Service/serviceReview"
import PostingReview from "@/app/components/Service/postingReview"
import Navigate from "@/app/components/Service/navigate"

const Service: FC = () => {

    return (
        <div className="relative flex min-h-screen flex-col overflow-hidden bg-white sm:py-12">
            <Navigate />
            <ServiceHeader />
            <DetailContent />
            <ServiceImageContent />
            <ServiceDescription />
            <ServiceFAQ />
            <ServiceReview />
            <PostingReview />
        </div>
    )
}

export default Service;