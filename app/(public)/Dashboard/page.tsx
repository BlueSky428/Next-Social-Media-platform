"use client"
import { FC, useContext, useEffect, useState } from "react";
import ServiceCard from "@/app/components/Section/section";
import LeadershipSection from "@/app/components/Section/page";
import Landing from "@/app/components/Section/landing";
import Reviews from "@/app/components/Reviews/page";
import FAQ from "@/app/components/Section/faq";
import MainDashboardComponent from "@/app/components/Dashboard/page";
import serviceContext from "@/app/services/serviceContext";
import Guide from "@/app/components/Dashboard/guied";
import Header from "@/app/components/Header/page";
import Footer from "@/app/components/Footer/page";

const Dashboard: FC = () => {

    const statusContext = useContext(serviceContext);
    const [serviceTitle, setServiceTitle] = useState<string>('Instagram');
    const [serviceContent, setServiceContent] = useState<string>("Followers");
    const [isInstagramShow, setIsInstagramShow] = useState<boolean>(false);

    useEffect(() => {
        if (statusContext?.serviceStatus) {
            let parts = (statusContext?.serviceStatus).split("-");
            setServiceTitle(parts[0]);
            setServiceContent(parts[1]);
        }
    }, [statusContext?.serviceStatus])

    return (
        <>
            <Header />
            <MainDashboardComponent Title={serviceTitle} Content={serviceContent} setIsShow={setIsInstagramShow} />
            <ServiceCard />
            <LeadershipSection />
            <Landing />
            <Reviews />
            <FAQ />
            <Guide isShow={isInstagramShow} />
            <Footer />
        </>
    )
}

export default Dashboard;