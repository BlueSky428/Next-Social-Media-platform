import { FC } from "react";
import StarRating from "./starRating";
import CommetReview from "./commetReview";
import RelativeService from "./relativeService";

const PostingReview: FC = () => {
    return (
        <main className="w-full bg-white lg:px-24">
            <div className="flex flex-col lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4">
                <div className="w-full flex items-center py-2"><h1 className="font-bold text-xl">Add a Review</h1></div>
                <div className="w-full flex flex-col justify-center">
                    <span>Your rating for this listing</span>
                    <StarRating />
                </div>
                <div className="w-full flex items-center">
                    <CommetReview />
                </div>
            </div>
            <RelativeService />
        </main>
    )
}

export default PostingReview