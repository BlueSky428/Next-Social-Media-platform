import { faEye, faHeart, faL, faUsers } from "@fortawesome/free-solid-svg-icons"

type HighQuality = {
    id: number,
    content: string,
}

type ActiveFollowers = {
    id: number,
    content: string,
}

type Difference = {
    id: number,
    content: string
}

type BuyItems = {
    id: number,
    Count: number,
    Type: string,
    Price: number,
    Active: boolean,
    parentID: number,
    BestSelling: boolean,
    PlusButton: boolean
}

type InstagramBuyItem = {
    id: number
    Count: number
    Active: boolean
    parentID: number
    BestSelling: boolean
    PlusButton: boolean
}

type FaceBookBuyItem = {
    id: number
    Count: number
    Active: boolean
    parentID: number
    BestSelling: boolean
    PlusButton: boolean
}

type TikTokBuyItem = {
    id: number
    Count: number
    Active: boolean
    parentID: number
    BestSelling: boolean
    PlusButton: boolean
}

type YoutubeBuyItem = {
    id: number
    Count: number
    Active: boolean
    parentID: number
    BestSelling: boolean
    PlusButton: boolean
}

type BuyCategory = {
    id: number,
    plusImage: any,
    minuseImage: any,
    count: any,
    content: string
}

type BuyDetail = {
    id: number,
    image: any,
    title: string,
    count: any
}

type FollowersBuy = {
    id: number,
    title: number,
    content: string,
    plusImage: any,
    minuseImage: any,
}

type InstagramAutoLike = {
    id: number,
    title: string,
    content: string,
    active: boolean
}

type Reach = {
    id: number
    count: number
}

type Impressions = {
    id: number
    count: number
}

type Saves = {
    id: number
    count: number
}

type Guarantee = {
    id: number
    day: number
}

type InstagramTools = {
    id: number
    content: string
}

type FacebookTools = {
    id: number
    content: string
}

type TikTokTools = {
    id: number
    content: string
}

type YoutubeTools = {
    id: number
    content: string
}

type Guide = {
    id: number
    icon: any
    title: string
    content: string
}

type InstagramPrice = {
    id: number
    price: number
    parentID: number
}

type FaceBookPrice = {
    id: number
    price: number
    parentID: number
}

type TikTokPrice = {
    id: number
    price: number
    parentID: number
}

type YoutubePrice = {
    id: number
    price: number
    parentID: number
}

type ParentCategory = {
    id: number
    category: string
}

type Instagram = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type FaceBook = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type TikTok = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

type Youtube = {
    id: number,
    content: string,
    icon: any,
    parentID: number
}

//High Quality followers
export const highQualityData: HighQuality[] = [
    { id: 0, content: "High quality followers" },
    { id: 1, content: "Fast Delivery" },
    { id: 2, content: "30 days refills" },
    { id: 3, content: "No password required" },
    { id: 4, content: "24/7 support" },
]

//Active Followers
export const activeData: ActiveFollowers[] = [
    { id: 0, content: "Real Active followers" },
    { id: 1, content: "Guaranteed Delivery" },
    { id: 2, content: "60 days refills" },
    { id: 3, content: "No password required" },
    { id: 4, content: "24/7 support" },
]

//Difference
export const differenceData: Difference[] = [
    { id: 0, content: "These are followers with profile pictures but no additional posts, and the option for auto-filling is active within the warranty period." },
    { id: 1, content: " New Active followers are for individuals who are dedicated to increasing their instagram following. These followers are guaranteed to have minimal to no drop-off." },
]

export const parentCategoryData: ParentCategory[] = [
    { id: 0, category: "Instagram" },
    { id: 1, category: "FaceBook" },
    { id: 2, category: "TikTok" },
    { id: 3, category: "Youtube" },
]

export const instagramData: Instagram[] = [
    {
        id: 0,
        content: "Followers",
        icon: faUsers,
        parentID: 0
    },
    {
        id: 1,
        content: "Views",
        icon: faEye,
        parentID: 0
    },
    {
        id: 2,
        content: "Likes",
        icon: faHeart,
        parentID: 0
    },
    {
        id: 3,
        content: "Auto Likes",
        icon: faHeart,
        parentID: 0
    },
]

export const facebookData: FaceBook[] = [
    {
        id: 0,
        content: "Followers",
        icon: faUsers,
        parentID: 1
    },
    {
        id: 1,
        content: "Views",
        icon: faEye,
        parentID: 1
    },
    {
        id: 2,
        content: "Likes",
        icon: faHeart,
        parentID: 1
    }
]

export const tiktokData: TikTok[] = [
    {
        id: 0,
        content: "Followers",
        icon: faUsers,
        parentID: 2
    },
    {
        id: 1,
        content: "Views",
        icon: faEye,
        parentID: 2
    },
    {
        id: 2,
        content: "Likes",
        icon: faHeart,
        parentID: 2
    }
]

export const youtubeData: Youtube[] = [
    {
        id: 0,
        content: "Views",
        icon: faUsers,
        parentID: 3
    },
    {
        id: 1,
        content: "Sub",
        icon: faEye,
        parentID: 3
    },
    {
        id: 2,
        content: "Likes",
        icon: faHeart,
        parentID: 3
    }
]

//Buy Items
export const buyItemsData: BuyItems[] = [
    { id: 0, Count: 25, Type: "Followers", Price: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 1, Count: 200, Type: "Save55%", Price: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 2, Count: 500, Type: "Save55%", Price: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 3, Count: 1000, Type: "Save58%", Price: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 4, Count: 2500, Type: "Save60%", Price: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 5, Count: 25000, Type: "Save75%", Price: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
]

export const instagramBuyItem: InstagramBuyItem[] = [
    { id: 0, Count: 10, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 1, Count: 100, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 2, Count: 250, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 3, Count: 500, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 4, Count: 1000, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 5, Count: 2000, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 6, Count: 5000, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
    { id: 7, Count: 10000, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
]

//Buy Category
export const buyItemCategoryData: BuyCategory[] = [
    { id: 0, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 0, content: "Reach" },
    { id: 1, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 0, content: "Impressions" },
    { id: 2, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 100, content: "Saves" }
]

//Buy Detail
export const buyItemDetailData: BuyDetail[] = [
    { id: 0, image: "/image/icon/Likes.png", title: "Likes", count: 100 },
    { id: 1, image: "/image/icon/Reach.png", title: "Reach", count: 10 },
    { id: 2, image: "/image/icon/Impressions.png", title: "Impressions", count: 100 },
    { id: 3, image: "/image/icon/Saves.png", title: "Saves", count: 5 },
]

//Followers Buy
export const followersBuyData: FollowersBuy[] = [
    { id: 0, title: 30, content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
    { id: 1, title: 60, content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
    { id: 2, title: 90, content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
]

export const ReachData: Reach[] = [
    { id: 0, count: 0 },
    { id: 1, count: 200 },
    { id: 2, count: 500 },
    { id: 3, count: 1000 },
    { id: 4, count: 2000 },
    { id: 5, count: 5000 },
    { id: 6, count: 10000 },
    { id: 7, count: 20000 },
    { id: 8, count: 50000 }
]

export const ImpressionsData: Impressions[] = [
    { id: 0, count: 0 },
    { id: 1, count: 200 },
    { id: 2, count: 500 },
    { id: 3, count: 1000 },
    { id: 4, count: 2000 },
    { id: 5, count: 5000 },
    { id: 6, count: 10000 },
    { id: 7, count: 20000 },
    { id: 8, count: 50000 },
]

export const SaveData: Saves[] = [
    { id: 0, count: 100 },
    { id: 1, count: 200 },
    { id: 2, count: 500 },
    { id: 3, count: 1000 },
    { id: 4, count: 2000 },
    { id: 5, count: 5000 },
    { id: 6, count: 10000 },
]

export const GuaranteeData: Guarantee[] = [
    { id: 0, day: 90 },
    { id: 1, day: 120 },
    { id: 2, day: 150 },
]

export const intagramToolsData: InstagramTools[] = [
    { id: 0, content: "Video Downloader" },
    { id: 1, content: "Profile Picture Viwer" },
    { id: 2, content: "Story Downloader" },
    { id: 3, content: "Follwers Counter" },
]

export const youtubeToolsData: YoutubeTools[] = [
    { id: 0, content: "Money Calculator" },
    { id: 1, content: "Title Generator" },
    { id: 2, content: "Video Analytics" },
]

export const tictokToolsData: TikTokTools[] = [
    { id: 0, content: "Money Calculator" },
    { id: 1, content: "Hashtag Generator" },
    { id: 2, content: "Video Downloader" },
    { id: 3, content: "Picture Downloader" },
    { id: 4, content: "Realtime Count" },
]

export const yotubeToolsData: YoutubeTools[] = [

]

export const guidedata: Guide[] = [
    { id: 0, icon: "/image/svg/one.svg", title: "Pick A Package", content: "We have many different options for every type of client. If you are looking for only a fundred followers, or up to 20, 000 followers - we got you! Make sure you select the follower quality via our tabs as well." },
    { id: 1, icon: "/image/svg/two.svg", title: "Enter Your Username", content: "Fill out the first field with your Instagram profile name. This is all we need to deliver your followers. YOu should also use a valid 3-mail for us to send you the receipt, but this is optional." },
    { id: 2, icon: "/image/svg/three.svg", title: "Review Order Details", content: "Make sure your go through your order to verify that you have not missed anything. We also have a lot of extras you can add on the last step such as likes and AI generated tailored comments." },
    { id: 3, icon: "/image/svg/four.svg", title: "Complete Purchase", content: "Finally, click on 'Buy Now' to complete the process and watch your followers grow! It really is that easy." }
]