import ReviewCard from "@/app/components/Freelancer/reviewCard";
import SearchCard from "@/app/components/Freelancer/searchCard";
import UserInfomation from "@/app/components/Freelancer/userInfo";
import UserReview from "@/app/components/Freelancer/userReview";
import UserService from "@/app/components/Freelancer/userService";
import WorkExperience from "@/app/components/Freelancer/workExperience";
import { FC } from "react";

const FreelancerDetail: FC = () => {
    return (
        <div className="relative flex flex-col justify-center overflow-hidden bg-white sm:py-12">
            <UserInfomation />
            <UserService />
            <WorkExperience />
            <UserReview />
            <SearchCard />
            <ReviewCard />
        </div>
    )
}

export default FreelancerDetail;