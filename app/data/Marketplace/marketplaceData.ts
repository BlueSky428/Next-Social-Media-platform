import { faHeart } from "@fortawesome/free-solid-svg-icons"

//Type Definition
type ParentCategory = {
    id: number
    content: string
}

type ChildCategory = {
    id: number
    content: string
    parentID: number
}

type CategoryContent = {
    id: number
    content: string
    parentID: number
    count: number
}

type SocialType = {
    id: number
    content: string
    icon: string
}

type PopularServices = {
    id: number;
    icon: any;
    title: string;
    content: string;
    reviewMark: number;
    reviewCount: number;
    userAvatar: string;
    userName: string;
    money: string;
    socialTypeID: number
}

interface Image {
    id: number;
    image: string;
    parentID: number;
}

type Category = {
    id: number
    content: string,
    parentID: number
}

//Function Definition
export const parentCategory: ParentCategory[] = [
    { id: 0, content: "Service options" },
    { id: 1, content: "Seller details" },
    { id: 2, content: "Budget" },
    { id: 3, content: "Dellvery time" },
]

export const childCategory: ChildCategory[] = [
    { id: 0, content: "Platform type", parentID: 0 },
    { id: 1, content: "Service offerings", parentID: 0 },
    { id: 2, content: "Servuce includes", parentID: 0 },
    { id: 3, content: "Seller level", parentID: 1 },
    { id: 4, content: "Seller availabillity", parentID: 1 },
    { id: 5, content: "Seller Type", parentID: 1 },
    { id: 6, content: "Seller speaks", parentID: 1 },
    { id: 7, content: "Seller lives in", parentID: 1 },
    { id: 8, content: "", parentID: 2 },
    { id: 9, content: "", parentID: 3 }
]

export const categoryContent: CategoryContent[] = [
    { id: 0, content: "Facebook", parentID: 0, count: 19150 },   //Platform Type
    { id: 1, content: "Instagram", parentID: 0, count: 17927 },
    { id: 2, content: "TikTok", parentID: 0, count: 5298 },
    { id: 3, content: "LinkedIn", parentID: 0, count: 4791 },
    { id: 4, content: "Youtube", parentID: 0, count: 4189 },
    { id: 5, content: "Twitter", parentID: 0, count: 1707 },
    { id: 6, content: "Pinterest", parentID: 0, count: 1632 },
    { id: 7, content: "Other", parentID: 0, count: 733 },
    { id: 8, content: "Snapchat", parentID: 0, count: 365 },
    { id: 9, content: "Twitch", parentID: 0, count: 107 },

    { id: 10, content: "Offers subscriptions", parentID: 1, count: 775 },  //Service offerings
    { id: 11, content: "Paid video consultations", parentID: 1, count: 388 },

    { id: 12, content: "Action plan", parentID: 2, count: 12121 },          //Service includes
    { id: 13, content: "Target audience research", parentID: 2, count: 6383 },
    { id: 14, content: "Ads analytical report", parentID: 2, count: 5484 },
    { id: 15, content: "Ad content creation", parentID: 2, count: 5184 },
    { id: 16, content: "Reporting", parentID: 2, count: 4402 },
    { id: 17, content: "Campaign setup", parentID: 2, count: 1922 },

    { id: 18, content: "Top Rated Seller", parentID: 3, count: 19111 },        //Seller Level
    { id: 19, content: "Level 2", parentID: 3, count: 1576 },
    { id: 20, content: "Level 1", parentID: 3, count: 1746 },
    { id: 21, content: "New Seller", parentID: 3, count: 22008 },

    { id: 22, content: "Agency", parentID: 4, count: 7 },           //Seller Type

    { id: 23, content: "Online Now", parentID: 5, count: 2076 },    //Seller availabillity

    { id: 24, content: "English", parentID: 6, count: 24238 },   //Seller Speaks
    { id: 25, content: "Bengail", parentID: 6, count: 8021 },
    { id: 26, content: "Hindi", parentID: 6, count: 11521 },
    { id: 27, content: "Urdu", parentID: 6, count: 9000 },
    { id: 28, content: "Arabic", parentID: 6, count: 4210 },
    { id: 29, content: "Punjabl", parentID: 6, count: 6682 },
    { id: 30, content: "Spanish", parentID: 6, count: 11212 },
    { id: 31, content: "Hebrew", parentID: 6, count: 8802 },

    { id: 32, content: "United State", parentID: 7, count: 885 },    //Seller lives in
    { id: 33, content: "United Kindom", parentID: 7, count: 12 },
    { id: 34, content: "Canada", parentID: 7, count: 335 },
    { id: 35, content: "Afghanistan", parentID: 7, count: 12 },
    { id: 36, content: "Angola", parentID: 7, count: 500 },
    { id: 37, content: "Aruba", parentID: 7, count: 1 },
    { id: 38, content: "Australia", parentID: 7, count: 9 },
    { id: 39, content: "Austria", parentID: 7, count: 50 },
    { id: 40, content: "Bahrain", parentID: 7, count: 338 },

    { id: 41, content: "Value", parentID: 8, count: 0 },        //Budget
    { id: 42, content: "Mid-range", parentID: 8, count: 0 },
    { id: 43, content: "High-end", parentID: 8, count: 0 },
    { id: 44, content: "Custom", parentID: 8, count: 0 },

    { id: 45, content: "Express 24H", parentID: 9, count: 0 },       //Deilvery time
    { id: 46, content: "Up to 3 days", parentID: 9, count: 0 },
    { id: 47, content: "Up to 7 days", parentID: 9, count: 0 },
    { id: 48, content: "Anytime", parentID: 9, count: 0 },
]

export const socialType: SocialType[] = [
    { id: 0, content: "Social Media Management", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2063.svg" },
    { id: 1, content: "Paid Social Media", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2688.svg" },
    { id: 2, content: "Organic Social Promotions", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2529.svg" },
    { id: 3, content: "Profile Setup & Integration", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2061.svg" },
    { id: 4, content: "Social Content", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2062.svg" },
    { id: 5, content: "Social Media Strategy", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2310.svg" },
    { id: 6, content: "Analytics & Tracking", icon: "https://fiverr-res.cloudinary.com/image/upload/v1584948052/general_assets/categories/nsc_01/2065.svg" },
]

export const popularServiceData: PopularServices[] = [
    {
        id: 0,
        icon: faHeart,
        title: "Design & Creative",
        content: "Developer drop the framework folder into new parent",
        reviewMark: 5,
        reviewCount: 2,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$158",
        socialTypeID: 0
    },
    {
        id: 1,
        icon: faHeart,
        title: "Design & Creative",
        content: "Developer drop the framework folder into new parent",
        reviewMark: 4.0,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/team5-150x150.jpg",
        userName: "Robert Fox",
        money: "$158",
        socialTypeID: 0
    },
    {
        id: 2,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5.0,
        reviewCount: 6,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
        userName: "Thomas Pow",
        money: "$125",
        socialTypeID: 1
    },
    {
        id: 3,
        icon: faHeart,
        title: "Design & Creative",
        content: "I will design website UI UX in adobe xd or figma",
        reviewMark: 4.3,
        reviewCount: 3,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg",
        userName: "Freelancer",
        money: "$158",
        socialTypeID: 2
    },
    {
        id: 4,
        icon: faHeart,
        title: "Design & Creative",
        content: "Developer drop the framework folder into new parent",
        reviewMark: 5,
        reviewCount: 2,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$158",
        socialTypeID: 1
    },
    {
        id: 5,
        icon: faHeart,
        title: "Design & Creative",
        content: "Full Service host that will do most of the work for you",
        reviewMark: 3.0,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$158",
        socialTypeID: 2
    },
    {
        id: 6,
        icon: faHeart,
        title: "Design & Creative",
        content: "PHP framework taht you can use to create your own custom",
        reviewMark: 4.0,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/09/bg-video-150x150.png",
        userName: "Ali Tufan",
        money: "$158",
        socialTypeID: 3
    },
    {
        id: 7,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 3
    },
    {
        id: 8,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 4
    },
    {
        id: 9,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/9-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 4
    },
    {
        id: 10,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 5
    },
    {
        id: 11,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 5
    },
    {
        id: 12,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 6
    },
    {
        id: 13,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 6
    },
    {
        id: 14,
        icon: faHeart,
        title: "Design & Creative",
        content: "Power management, notification and geofencing for host serve",
        reviewMark: 5,
        reviewCount: 1,
        userAvatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/8-150x150.jpg",
        userName: "John Powell",
        money: "$125",
        socialTypeID: 6
    }
]

export const imageData: Image[] = [
    { id: 0, image: "/image/img/market.jpg", parentID: 0 },
    { id: 1, image: "/image/img/7.jpg", parentID: 0 },
    { id: 2, image: "/image/img/6.jpg", parentID: 6 },
    { id: 3, image: "/image/img/5.jpg", parentID: 1 },
    { id: 4, image: "/image/img/4.jpg", parentID: 1 },
    { id: 5, image: "/image/img/3.jpg", parentID: 7 },
    { id: 6, image: "/image/img/2.jpg", parentID: 2 },
    { id: 7, image: "/image/img/1.jpg", parentID: 2 },
    { id: 8, image: "/image/img/1.jpg", parentID: 2 },
    { id: 9, image: "/image/img/market.jpg", parentID: 3 },
    { id: 10, image: "/image/img/3.jpg", parentID: 3 },
    { id: 11, image: "/image/img/3.jpg", parentID: 4 },
    { id: 12, image: "/image/img/7.jpg", parentID: 5 },
    { id: 13, image: "/image/img/3.jpg", parentID: 5 },
    { id: 14, image: "/image/img/2.jpg", parentID: 6 },
    { id: 15, image: "/image/img/6.jpg", parentID: 7 },
    { id: 16, image: "/image/img/5.jpg", parentID: 8 },
    { id: 17, image: "/image/img/4.jpg", parentID: 9 },
    { id: 18, image: "/image/img/3.jpg", parentID: 9 },
    { id: 19, image: "/image/img/2.jpg", parentID: 10 },
    { id: 20, image: "/image/img/1.jpg", parentID: 11 },
    { id: 21, image: "/image/img/7.jpg", parentID: 11 },
    { id: 22, image: "/image/img/market.jpg", parentID: 12 },
    { id: 23, image: "/image/img/3.jpg", parentID: 12 },
    { id: 24, image: "/image/img/1.jpg", parentID: 12 },
    { id: 25, image: "/image/img/7.jpg", parentID: 13 },
    { id: 26, image: "/image/img/2.jpg", parentID: 14 },
    { id: 27, image: "/image/img/4.jpg", parentID: 14 },
]

export const categoryData: Category[] = [

    //Social Media Management
    { id: 0, content: "Account Management", parentID: 0 },
    { id: 1, content: "Content Creation", parentID: 0 },
    { id: 2, content: "Scheduling and Posting", parentID: 0 },
    { id: 3, content: "Engagement and Community Management", parentID: 0 },
    { id: 4, content: "Analytics and Reporting", parentID: 0 },
    { id: 5, content: "Strategy Development", parentID: 0 },
    { id: 6, content: "Reputation Management", parentID: 0 },
    { id: 7, content: "Crisis Management", parentID: 0 },
    { id: 8, content: "Influencer Collaboration", parentID: 0 },
    { id: 9, content: "Competitor Analysis", parentID: 0 },

    //Paid Social Media
    { id: 10, content: "Social Media Advertising Campaigns", parentID: 1 },
    { id: 11, content: "Ad Copywriting", parentID: 1 },
    { id: 12, content: "Ad Design and Creative", parentID: 1 },
    { id: 13, content: "Audience Targeting and Segmentation", parentID: 1 },
    { id: 14, content: "A/B Testing", parentID: 1 },
    { id: 15, content: "Budget Management", parentID: 1 },
    { id: 16, content: "Campaign Optimization", parentID: 1 },
    { id: 17, content: "Retargeting Campaigns", parentID: 1 },
    { id: 18, content: "Performance Tracking", parentID: 1 },
    { id: 19, content: "Reporting and Analysis", parentID: 1 },

    //Organic Social Promotions
    { id: 20, content: "Organic Content Strategy", parentID: 2 },
    { id: 21, content: "Hashtag Strategy", parentID: 2 },
    { id: 22, content: "Content Curation", parentID: 2 },
    { id: 23, content: "User-Generated Content", parentID: 2 },
    { id: 24, content: "Influencer Partnerships", parentID: 2 },
    { id: 25, content: "Social Media Challenges and Contests", parentID: 2 },
    { id: 26, content: "Viral Marketing Techniques", parentID: 2 },
    { id: 27, content: "Community Building", parentID: 2 },
    { id: 28, content: "Cross-Promotion", parentID: 2 },
    { id: 29, content: "Engagement Tactics", parentID: 2 },

    //Profile Setup & Integration
    { id: 30, content: "Social Media Account Creation", parentID: 3 },
    { id: 31, content: "Profile Optimization", parentID: 3 },
    { id: 32, content: "Branding and Design", parentID: 3 },
    { id: 33, content: "Social Media Integration with Website", parentID: 3 },
    { id: 34, content: "Bio and Description Writing", parentID: 3 },
    { id: 35, content: "Profile Analytics Setup", parentID: 3 },
    { id: 36, content: "Profile Security and Verification", parentID: 3 },
    { id: 37, content: "Social Media Tools Integration", parentID: 3 },
    { id: 38, content: "Multi-Platform Setup", parentID: 3 },
    { id: 39, content: "Training and Support", parentID: 3 },

    //Social Content
    { id: 40, content: "Content Creation", parentID: 4 },
    { id: 41, content: "Visual Design", parentID: 4 },
    { id: 42, content: "Video Production", parentID: 4 },
    { id: 43, content: "Blog Post Writing", parentID: 4 },
    { id: 44, content: "Social Media Graphics", parentID: 4 },
    { id: 45, content: "Infographics", parentID: 4 },
    { id: 46, content: "Content Calendars", parentID: 4 },
    { id: 47, content: "Interactive Content", parentID: 4 },
    { id: 48, content: "Storytelling", parentID: 4 },
    { id: 49, content: "Content Repurposing", parentID: 4 },

    //Social Media Strategy
    { id: 50, content: "Audience Research", parentID: 5 },
    { id: 51, content: "Competitive Analysis", parentID: 5 },
    { id: 52, content: "Content Strategy", parentID: 5 },
    { id: 53, content: "Platform Selection", parentID: 5 },
    { id: 54, content: "Campaign Planning", parentID: 5 },
    { id: 55, content: "Engagement Strategy", parentID: 5 },
    { id: 56, content: "Influencer Collaboration", parentID: 5 },
    { id: 57, content: "Crisis Management Strategy", parentID: 5 },
    { id: 58, content: "Social Media Policy Development", parentID: 5 },
    { id: 59, content: "Trend Analysis", parentID: 5 },

    //Analytics & Tracking
    { id: 60, content: "Performance Metrics", parentID: 6 },
    { id: 61, content: "Audience Insights", parentID: 6 },
    { id: 62, content: "Campaign Tracking", parentID: 6 },
    { id: 63, content: "Conversion Tracking", parentID: 6 },
    { id: 64, content: "ROI Analysis", parentID: 6 },
    { id: 65, content: "Competitor Benchmarking", parentID: 6 },
    { id: 66, content: "Sentiment Analysis", parentID: 6 },
    { id: 67, content: "Social Listening", parentID: 6 },
    { id: 68, content: "Custom Reporting", parentID: 6 },
    { id: 69, content: "Data Visualization", parentID: 6 },
]