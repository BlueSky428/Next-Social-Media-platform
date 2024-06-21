import { FC } from "react";
import CheckOut from "../Checkout";
import ServiceCard from "@/app/components/Section/section";
import LeadershipSection from "@/app/components/Section";
import Landing from "@/app/components/Section/landing";
import Reviews from "@/app/components/Reviews";
import FAQ from "@/app/components/Section/faq";

const Dashboard: FC = () => {
    return (
        <>
            <CheckOut />
            <ServiceCard />
            <LeadershipSection />
            <Landing />
            <Reviews />
            <FAQ />
        </>
    )
}

export default Dashboard;