type SimpleReview = {
    id: number
    useravatar: string
    username: string
    countryflag: string
    country: string
    review: number
    content: string
    postdata: number
}

type AboutMeExpertIn = {
    id: number
    content: string
}

type DetailInformation = {
    id: number
    title: string
    content: string
}

type tHead = {
    id: number
    price: number
    type: string
    postCount: number
    content: string
}

type Package = {
    id: number
    name: string;
    price: number;
    posts: string;
    details: string;
    deliveryTime: string
    socialPost: number
}

type Feature = {
    description: string;
    availability: string[];
}

type deliveryTime = {
    time: string
    additionalCost: number
}

type premiumDeliveryTimes = {
    time: string
    additionalCost: number
}

type description = {
    content: string
}

type category = {
    id: number
    category: string
    active: boolean
}

export const SimpleReviewData: SimpleReview[] = [
    {
        id: 0,
        useravatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6b200e940e78205629d8fe8965d4fd95-1698256163290/6f75d40c-b3d9-47b1-aff9-5b0efaef8015.png",
        username: "Jhon",
        countryflag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        country: "United State",
        review: 5,
        content: "Shirley was a gem to work with! Absolutely STUNNING. HIGH-QUALITY. COMPELLING. ONE-OF-A-KIND... shall I say more? There are truly no words...",
        postdata: 2023
    },
    {
        id: 1,
        useravatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
        username: "Tiago",
        countryflag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        country: "United State",
        review: 4,
        content: "Shirley was a gem to work with! Absolutely STUNNING. HIGH-QUALITY. COMPELLING. ONE-OF-A-KIND... shall I say more? There are truly no words...",
        postdata: 2022
    },
    {
        id: 2,
        useravatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6b200e940e78205629d8fe8965d4fd95-1698256163290/6f75d40c-b3d9-47b1-aff9-5b0efaef8015.png",
        username: "Jhon",
        countryflag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        country: "United State",
        review: 5,
        content: "Shirley was a gem to work with! Absolutely STUNNING. HIGH-QUALITY. COMPELLING. ONE-OF-A-KIND... shall I say more? There are truly no words...",
        postdata: 2021
    },
    {
        id: 3,
        useravatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
        username: "Tiago",
        countryflag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        country: "United State",
        review: 5,
        content: "Shirley was a gem to work with! Absolutely STUNNING. HIGH-QUALITY. COMPELLING. ONE-OF-A-KIND... shall I say more? There are truly no words...",
        postdata: 2023
    },
    {
        id: 4,
        useravatar: "https://fiverr-res.cloudinary.com/image/upload/t_profile_original,q_auto,f_auto/v1/attachments/profile/photo/6b200e940e78205629d8fe8965d4fd95-1698256163290/6f75d40c-b3d9-47b1-aff9-5b0efaef8015.png",
        username: "Jhon",
        countryflag: "https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png",
        country: "United State",
        review: 5,
        content: "Shirley was a gem to work with! Absolutely STUNNING. HIGH-QUALITY. COMPELLING. ONE-OF-A-KIND... shall I say more? There are truly no words...",
        postdata: 2020
    }
]

export const aboutMeExpertInData: AboutMeExpertIn[] = [
    { id: 0, content: "Ad Copy" },
    { id: 1, content: "Marketing Advice" },
    { id: 2, content: "Marketing Strategy" },
    { id: 3, content: "Social Media Copywriting" },
    { id: 4, content: "Social Media Marketing" },
    { id: 5, content: "Writing Advice" },
]

export const detailInformationData: DetailInformation[] = [
    { id: 0, title: "From", content: "Belium" },
    { id: 1, title: "Member since", content: "Mar 2020" },
    { id: 2, title: "Avg. response time", content: "4 hours" },
    { id: 3, title: "Last delivery", content: "about 9 hours" },
    { id: 4, title: "Languages", content: "Dutch, English" },
]

export const THeadData: tHead[] = [
    { id: 0, price: 227.78, type: "Basic", postCount: 10, content: "✅ 10 quality posts + original images & design 🚀 5 hashtag suggestions" },
    { id: 1, price: 174.47, type: "Standard", postCount: 15, content: "✅ 15 quality posts + original images & design 🚀 15 hashtag suggestions" },
    { id: 2, price: 227.78, type: "Premium", postCount: 30, content: "✅ 30 quality posts + original images & design 🚀 30 hashtag suggestions" },
]

export const packagesData: Package[] = [
    { id: 0, name: 'Basic', price: 135.84, posts: '10 POSTS', details: '✅10 quality posts + original images & design 🚀 5 hashtag suggestions', deliveryTime: "10 days", socialPost: 5 },
    { id: 1, name: 'Standard', price: 174.65, posts: '15 POSTS', details: '✅15 quality posts + original images & design 🚀 15 hashtag suggestions', deliveryTime: "10 days", socialPost: 15 },
    { id: 2, name: 'Premium', price: 281.38, posts: '30 POSTS', details: '✅30 quality posts + original images & design 🚀 30 hashtag suggestions', deliveryTime: "14 days", socialPost: 30 },
];

export const featuresData: Feature[] = [
    { description: 'Page/channel evaluation', availability: ["/image/icon/tick.png", "/image/icon/tick.png", "/image/icon/tick.png"] },
    { description: 'Custom graphics', availability: ["/image/icon/tick.png", "/image/icon/tick.png", "/image/icon/tick.png"] },
    { description: 'Social posts created', availability: ["5", "15", "30"] },
    { description: 'Revisions', availability: ["Unlimited", "Unlimited", "Unlimited"] },
];

export const deliveryTimesData: deliveryTime[] = [
    { time: '10 days', additionalCost: 0 },
    { time: '5 days', additionalCost: 92.08 },
];

export const premiumDeliveryTimesData: premiumDeliveryTimes[] = [
    { time: '14 days', additionalCost: 0 },
    { time: '10 days', additionalCost: 121.16 },
];

export const descriptionData: description[] = [
    { content: "Page/channle evaluation" },
    { content: "social posts created" },
    { content: "Page/channle evaluation" }
]

export const categoryData: category[] = [
    { id: 0, category: "Basic", active: true },
    { id: 1, category: "Standard", active: false },
    { id: 2, category: "Premium", active: false },
]