import { FC, useState } from "react";

type Review = {
    id: number,
    star: number,
    content: string,
    userAvatar: string,
    userName: string
}

type MarketingService = {
    id: number
    content: string
}

type MediaMarketing = {
    id: number
    content: string
}

const ReviewsComponent: FC = () => {

    const [review, setReview] = useState<Review[]>(
        [
            {
                id: 0,
                star: 4,
                content: "I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 1,
                star: 4,
                content: "Building and maintaining websites and web applications.",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 2,
                star: 4,
                content: "Embrace a new era of digital success with Mizzle. Our team combines cutting-edge design with robust development to deliver websites that captivate and convert.",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }, {
                id: 3,
                star: 4,
                content: "I've been using XYZ for over a year now and their customer service is excellent! Whenever I have a question, the team is always available and willing to help. Highly recommend!",
                userAvatar: "https://randomuser.me/api/portraits/women/2.jpg",
                userName: "Melissa Smith"
            }
        ]
    )

    const [marketingService, setMarketingService] = useState<MarketingService[]>([
        { id: 0, content: "Public Relations" },
        { id: 1, content: "Podcast Marketing" },
        { id: 2, content: "Influencer marketing" },
        { id: 3, content: "Article writing" },
        { id: 4, content: "Video marketing" },
        { id: 5, content: "Press releases" },
        { id: 6, content: "Instagram marketing" },
        { id: 7, content: "YouTube marketing" },
        { id: 8, content: "Discord social media marketing" },
        { id: 9, content: "Facebook marketing" },
        { id: 10, content: "Pinterest marketing" },
        { id: 11, content: "Snapchat marketing" },
        { id: 12, content: "Twitter marketing" },
        { id: 13, content: "Product hunt marketing" },
        { id: 14, content: "Reddit marketing" },
        { id: 15, content: "Linkedin marketing" },
        { id: 16, content: "TikTok marketing" },
    ])

    const [mediaMarketing, setMediaMarketing] = useState<MediaMarketing[]>([
        { id: 0, content: "Social media managers" },
        { id: 1, content: "Instagram exoerts" },
        { id: 2, content: "Instagram caption writers" },
        { id: 3, content: "Instagram copywriters" },
        { id: 4, content: "Instagram griwth experts" },
        { id: 5, content: "Google ad managers" },
        { id: 6, content: "Hashtag researchers" },
        { id: 7, content: "Responsive designers" },
        { id: 8, content: "Facebook experts" },
        { id: 9, content: "Social media designers" },
        { id: 10, content: "Twitter experts" },
        { id: 11, content: "Lead generation experts" },
        { id: 12, content: "Excel experts" },
        { id: 13, content: "Excel spreadsheet experts" },
        { id: 14, content: "Video marketing experts" },
        { id: 15, content: "Facebook API developers" },
        { id: 16, content: "Google analytics experts" },
    ])

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-4 w-full justify-center">
                <h2 className="font-bold text-2xl text-gray-600 text-center">Explore More Social Media Marketing Services</h2>
                <div className="w-full gap-6 flex justify-center flex-wrap py-4">
                    {
                        marketingService.map((items) => (
                            <div key={items.id} className="flex justify-center items-center px-2 py-2 bg-gray-200 rounded-full w-auto text-sm">
                                {items.content}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mx-auto max-w-screen-xl px-4 w-full justify-center mt-12">
                <h2 className="font-bold text-2xl text-gray-600 text-center">Hire freelancers related to Social Media Marketing</h2>
                <div className="w-full gap-6 flex justify-center flex-wrap py-4">
                    {
                        mediaMarketing.map((items) => (
                            <div key={items.id} className="flex justify-center items-center px-2 py-2 bg-gray-200 rounded-full w-auto text-sm">
                                {items.content}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ReviewsComponent;