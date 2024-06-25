import { FC } from "react";
import ServiceCard from "@/app/components/Section/section";
import LeadershipSection from "@/app/components/Section/page";
import Landing from "@/app/components/Section/landing";
import Reviews from "@/app/components/Reviews/page";
import FAQ from "@/app/components/Section/faq";
import MainDashboardComponent from "@/app/components/Dashboard/page";

const Dashboard: FC = () => {
    return (
        <>
            <MainDashboardComponent />
            <ServiceCard />
            <LeadershipSection />
            <Landing />
            <Reviews />
            <FAQ />
        </>
    )
}

export default Dashboard;