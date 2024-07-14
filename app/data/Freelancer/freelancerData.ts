
type OrderDuration = {
    id: number,
    content: string,
    active: boolean
}

//Reviewe Card
type Date = {
    year: number,
    month: number,
    day: number
}

type UserReview = {
    id: number,
    useravatar: string,
    username: string,
    countryflag: string
    country: string
    date: Date
    title: string;
    content: string
}

type SellerResponse = {
    id: number
    username: string
    title: string
    content: string
    parentID: number
}

//Searcg Card Category
type Category = {
    id: number
    content: string
}

//User Information
type Skill = {
    id: number
    skill: string
}

type Features = {
    id: number,
    content: string
}

type PreviousWork = {
    id: number
    img: string
    content: string
}

type PreviousWorkDetail = {
    id: number
    userAvatar: string
    productImage: string
    term: string
    title: string
    workResult: string
    content: string
    category: string
    parentID: number
}

//User Review
type Review = {
    id: number,
    category: string,
    reviewPercent: string,
    reviewCount: string
}

type RadioButton = {
    id: number,
    title: string,
    price: string
}

export const orderDurationData: OrderDuration[] = [
    { id: 0, content: "24 Hours", active: false },
    { id: 1, content: "3 Days", active: false },
    { id: 2, content: "7 Days", active: false },
    { id: 3, content: "Order", active: false },
]

//Reviewe Card Functions
export const userReviewData: UserReview[] = [
    {
        id: 0,
        useravatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        username: "John Powell",
        countryflag: "/image/icon/flag.png",
        country: "United Kingdom",
        date: {
            year: 2024,
            month: 4,
            day: 28
        },
        title: "Sapien consequat eleifend!",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 1,
        useravatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        username: "John Powell",
        countryflag: "/image/icon/flag.png",
        country: "United Kingdom",
        date: {
            year: 2024,
            month: 3,
            day: 10
        },
        title: "Sapien consequat eleifend!",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 2,
        useravatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        username: "John Powell",
        countryflag: "/image/icon/flag.png",
        country: "United Kingdom",
        date: {
            year: 2024,
            month: 2,
            day: 28
        },
        title: "Sapien consequat eleifend!",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        id: 3,
        useravatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
        username: "John Powell",
        countryflag: "/image/icon/flag.png",
        country: "United Kingdom",
        date: {
            year: 2024,
            month: 5,
            day: 28
        },
        title: "Sapien consequat eleifend!",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
]

export const sellerResponseData: SellerResponse[] = [
    { id: 0, username: "Hiper Rand", title: "Seller's Response", content: "Thank you, Jamie, for your detailed and positive review! I'm glad I could meet your expectations and help you clean up your Instagram account. It's great to hear that you found the initial analysis useful and decided to proceed with the full project. I’m glad that we’ll continue our work together over the next few months. Your trust and kind words mean a lot to me.", parentID: 0 },
    { id: 1, username: "Hiper Rand", title: "Seller's Response", content: "Thank you, Mahri, for your kind words and positive review! It was a pleasure working with you over the past several months to help downsize your followers. I'm glad to hear you felt safe and secure throughout the process. Your cooperation and timely communication made it a smooth experience. Looking forward to potentially working together again in the future!", parentID: 1 },
    { id: 2, username: "Hiper Rand", title: "Seller's Response", content: "Thank you, Lance, for your trust and positive feedback! I'm glad that you were satisfied with the service and communication. It's great to know there were no issues with Instagram during or after the process. I appreciate your kind words and look forward to assisting you again in the future.", parentID: 3 },
    { id: 3, username: "Hiper Rand", title: "Seller's Response", content: "Thank you for your kind words! I'm glad to hear that you were satisfied with the communication and the quality of work. Your feedback is greatly appreciated and will help others feel confident in choosing my services. Looking forward to potentially working with you again!", parentID: 2 }
]

//Search Card Category Functions
export const categoryListData: Category[] = [
    { id: 0, content: "Marketing & Advertsing" },
    { id: 1, content: "Media & Entertainment" },
    { id: 2, content: "Financial & Business Services" },
    { id: 3, content: "MFinancial & Business Services" },
    { id: 4, content: "Art & Design" },
    { id: 5, content: "Fashion & Apparel" },
    { id: 6, content: "Education" },
    { id: 7, content: "Technology" },
    { id: 8, content: "Photograpy & VideoGraphy" },
    { id: 9, content: "Beauty & Consmetics" },
    { id: 10, content: "Food & Beverage" },
]

//User Information Functions
export const skillData: Skill[] = [
    {
        id: 0,
        skill: "Organic Social Promotions"
    },
    {
        id: 1,
        skill: "Instagram hashtags"
    },
    {
        id: 2,
        skill: "Insagram growth"
    },
    {
        id: 3,
        skill: "Instagram"
    },
    {
        id: 5,
        skill: "Instagram expert"
    },
    {
        id: 6,
        skill: "Instagram growth expert"
    },
    {
        id: 7,
        skill: "Instagram hashtags expert"
    },
    {
        id: 8,
        skill: "Maeketing expert"
    },
    {
        id: 9,
        skill: "Artificial Intelligence expert"
    },
    {
        id: 10,
        skill: "Instagram hashtags expert"
    },
    {
        id: 11,
        skill: "Marketing expert"
    },
    {
        id: 12,
        skill: "Web researcher"
    },
]

export const featuresListData: Features[] = [
    { id: 0, content: "Hand-plcked freelancer" },
    { id: 1, content: "High-quality work" },
    { id: 2, content: "Experienced with businesses" },
    { id: 3, content: "Guaranteed satisfaction" },
]

export const previousWorkData: PreviousWork[] = [
    { id: 0, img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/6278b97f97694d8303deaf07b705181b-1647870056/61b359a0eb3b1322fb79ee60.png", content: "Beetroot" },
    { id: 1, img: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/1ac6ce3ec9b7a48818dabb48167a33ce-1647867189/61b36b22eb3b1322fb79ee67.png", content: "Bodbygod" },
]

export const previousWorkdetailData: PreviousWorkDetail[] = [
    {
        id: 0,
        userAvatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
        term: "Sep 2021-Mar-2023",
        productImage: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/6278b97f97694d8303deaf07b705181b-1647870056/61b359a0eb3b1322fb79ee60.png",
        title: "71 Magazlne",
        workResult: "Helping their Instagram page grow for almost 2 years by engaging with relevant pages and niche.",
        content: "The Award-wining 71 Magazine - more an experience than a publication - brings you the Arts less traveled in the form of stellar world-class photography. film, fashion, music,art, design, and related tech, you won't find anywhere else.",
        category: "Books & Literature",
        parentID: 0
    },
    {
        id: 1,
        userAvatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png",
        term: "Sep 2021-Mar-2023",
        productImage: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_clients_thumb/v1/attachments/company/logo/1ac6ce3ec9b7a48818dabb48167a33ce-1647867189/61b36b22eb3b1322fb79ee67.png",
        title: "Sinal Gorumet",
        workResult: "Helping their Instagram page grow for almost 2 years by engaging with relevant pages and niche.",
        content: "Sinai Gourmet is an artisanal sauce company that specializes in making fresh, clean label, flavourful gourmet sauces to enhance your meals.",
        category: "Books & Literature",
        parentID: 1
    }
]

//User Review
export const reviewData: Review[] = [
    {
        id: 0,
        category: "5 star",
        reviewPercent: "90%",
        reviewCount: "(7, 100)"
    },
    {
        id: 1,
        category: "4 star",
        reviewPercent: "80%",
        reviewCount: "(5,100)"
    },
    {
        id: 2,
        category: "3 star",
        reviewPercent: "50%",
        reviewCount: "(3, 200)"
    },
    {
        id: 3,
        category: "2 star",
        reviewPercent: "10%",
        reviewCount: "(306)"
    },
    {
        id: 4,
        category: "1 star",
        reviewPercent: "5%",
        reviewCount: "(1)"
    }
]

