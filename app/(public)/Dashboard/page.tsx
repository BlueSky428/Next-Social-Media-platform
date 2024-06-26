"use client"
import { FC, useContext, useEffect, useState } from "react";
import ServiceCard from "@/app/components/Section/section";
import LeadershipSection from "@/app/components/Section/page";
import Landing from "@/app/components/Section/landing";
import Reviews from "@/app/components/Reviews/page";
import FAQ from "@/app/components/Section/faq";
import MainDashboardComponent from "@/app/components/Dashboard/page";
import serviceContext from "@/app/services/serviceContext";

const Dashboard: FC = () => {

    const statusContext = useContext(serviceContext);
    const [serviceTitle, setServiceTitle] = useState<string>('Instagram');
    const [serviceContent, setServiceContent] = useState<string>("Followers");

    useEffect(() => {
        if (statusContext?.serviceStatus) {
            let parts = (statusContext?.serviceStatus).split("-");
            setServiceTitle(parts[0]);
            setServiceContent(parts[1]);
        }
    }, [statusContext?.serviceStatus])

    return (
        <>
            <MainDashboardComponent Title={serviceTitle} Content={serviceContent} />
            <ServiceCard />
            <LeadershipSection />
            <Landing />
            <Reviews />
            <FAQ />
        </>
    )
}

export default Dashboard;