"use client"
import { FC, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { highQualityData, activeData, differenceData, buyItemsData, buyItemDetailData, buyItemCategoryData, followersBuyData, ReachData, ImpressionsData, SaveData, GuaranteeData } from "@/app/data/Dashboard/dashboardData";

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
    count: number
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

type Services = {
    Title?: string,
    Content?: string,
    setIsShow?: any
}

type Increase = {
    id: number
    count: number
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

const MainDashboardComponent: FC<Services> = ({ Title, Content, setIsShow }) => {
    const [buyMode, setBuyMode] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState<string>("High Quality");
    const [category, setCategory] = useState<string | undefined>(Title);
    const [contentTitle, setContentTitle] = useState<string | undefined>(Content);
    const [animate, setAnimate] = useState(false);
    const [newPrice, setNewPrice] = useState<number>(4.34);
    const [oldPrice, setOldPrice] = useState<number>(8.68);
    const [buyItemDetailState, setButItemDetailState] = useState<boolean>(false);
    const [reach, setReach] = useState<Reach[]>(ReachData);
    const [impressions, setImpressions] = useState<Impressions[]>(ImpressionsData);
    const [saves, setSaves] = useState<Saves[]>(SaveData);
    const [guarantee, setGuarantee] = useState<Guarantee[]>(GuaranteeData);

    const [increase, setIncreas] = useState<Increase[]>([
        { id: 0, count: 5000 },
        { id: 1, count: 10000 },
        { id: 2, count: 15000 },
        { id: 3, count: 25000 },
        { id: 4, count: 50000 },
    ])

    const router = useRouter();

    //High Quality followers
    const [highQuality, setHighQuality] = useState<HighQuality[]>(highQualityData)

    //Active Followers
    const [active, setActive] = useState<ActiveFollowers[]>(activeData)

    //Difference
    const [difference, setDifference] = useState<Difference[]>(differenceData)

    //Buy Items
    const [buyItems, setBuyItems] = useState<BuyItems[]>(buyItemsData)

    //Buy Detail
    const [buyItemDetail, setBuyItemDetail] = useState<BuyDetail[]>(buyItemDetailData)

    //Buy Category
    const [buyItemCategory, setBuyItemCategory] = useState<BuyCategory[]>(buyItemCategoryData)

    //Followers Buy
    const [followersBuy, setFollowersBuy] = useState<FollowersBuy[]>(followersBuyData)

    const [instagramAutoLikeBtn, setInstagramAutoLikeBtn] = useState<InstagramAutoLike[]>(
        [
            { id: 0, title: "Pay for likes", content: "Pay for likes separately", active: false },
            { id: 1, title: "30 Day subscription", content: "Manual Renewal", active: true },
        ]
    )

    //Change Buy Mode
    const ChangeBuyModePress = (state: boolean) => {
        setShowModal(true);
        if (state) {
            setBuyMode(true);
            setTitle("Active");
            //Instgram Followers Click
            if (category === "Instagram") {
                if (contentTitle === "Followers") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active followers" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "60 days refills" },
                        { id: 3, content: "No password required" },
                        { id: 4, content: "24/7 support" },
                    ]
                    setActive(activeFollowersTemp);
                } else if (contentTitle === "Views") {
                    const activeViewsTemp = [
                        { id: 0, content: "Real Active views" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeViewsTemp);
                } else if (contentTitle === "Likes") {
                    const activeLikesTemp = [
                        { id: 0, content: "REAL likes from ACTIVE people" },
                        { id: 1, content: "Increased chance to reach explore page" },
                        { id: 2, content: "Guaranteed Instant Delivery" },
                        { id: 3, content: "Option to split likes on multiple pictures" },
                        { id: 4, content: "No password required" },
                        { id: 5, content: "Fast Delivery (gradual or instant)" },
                        { id: 6, content: "24/7 support" },
                    ]
                    setActive(activeLikesTemp);
                } else if (contentTitle === "Auto Likes") {
                    const activeAutoLikesTemp = [
                        { id: 0, content: "Real Active auto likes" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeAutoLikesTemp);
                }
            } else if (category === "Facebook") { //Facebook Click
                if (contentTitle === "Followers") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active followers" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeFollowersTemp);
                } else if (contentTitle === "Views") {
                    const activeViewsTemp = [
                        { id: 0, content: "Real Active views" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeViewsTemp);
                } else if (contentTitle === "Likes" || contentTitle === "Auto Likes") {
                    const activeLikesTemp = [
                        { id: 0, content: "Real Active page likes" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeLikesTemp);
                }
            } else if (category === "TikTok") { //TikTok Click
                if (contentTitle === "Followers") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active followers" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeFollowersTemp);
                } else if (contentTitle === "Views") {
                    const activeViewsTemp = [
                        { id: 0, content: "Real Active views" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeViewsTemp);
                } else if (contentTitle === "Likes") {
                    const activeLikesTemp = [
                        { id: 0, content: "Real Active likes" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeLikesTemp);
                }
            } else if (category === "Youtube") { //Youtube Click
                if (contentTitle === "Followers") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active subscribers" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeFollowersTemp);
                } else if (contentTitle === "Views") {
                    const activeViewsTemp = [
                        { id: 0, content: "Real Active views" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeViewsTemp);
                } else if (contentTitle === "Likes") {
                    const activeLikesTemp = [
                        { id: 0, content: "Real Active likes" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeLikesTemp);
                }
            }
        }
        else {
            setBuyMode(false);
            setTitle("High Quality");
            if (category === "Instagram") { //Instagram Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "30 days refills" },
                        { id: 3, content: "No password required" },
                        { id: 4, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Views") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality views" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                } else if (contentTitle === "Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "REAL likes from REAL people" },
                        { id: 1, content: "Guaranteed Instant Delivery" },
                        { id: 2, content: "Option to split likes on multiple pictures" },
                        { id: 3, content: "No password required" },
                        { id: 4, content: "Fast Delivery (gradual or instant)" },
                        { id: 5, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                } else if (contentTitle === "Auto Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "High quality auto likes" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                }
            } else if (category === "Facebook") { //Facebook Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Views") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality views" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                } else if (contentTitle === "Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "High quality page likes" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                } else if (contentTitle === "Auto Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "High quality post likes" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                }
            } else if (category === "TikTok") { //TikTok Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Views") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality views" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                } else if (contentTitle === "Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "High quality likes" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                }
            } else if (category === "Youtube") { //Youtube Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Views") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality views" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                } else if (contentTitle === "Likes") {
                    const highQualityLikesTemp = [
                        { id: 0, content: "High quality likes" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityLikesTemp);
                }
            }
        }
    }

    //Buy Item Press
    const handleBuyItemPress = (id: number) => {
        setOldPrice(buyItems[id].Price);

        const temp = buyItems.map((item) =>
            item.id === id
                ? { ...item, Active: true }
                : { ...item, Active: false }
        );
        setBuyItems(temp);

        const Item = buyItemDetail.map((item) =>
            item.title === "Likes"
                ? { ...item, count: buyItems[id].Count }
                : { ...item, count: item.count }
        )

        setBuyItemDetail(Item);
    }

    const subscribeToNewsletter = () => {
        setShowModal(false);
    };

    const Increase = (id: number) => {
        for (let i = 0; i < increase.length; i++) {
            if (i < increase.length) {
                if (increase[i].count === buyItems[id].Count && i + 1 <= increase.length - 1) {
                    const temp = buyItems.map((item) => (
                        item.id === id
                            ? { ...item, Count: increase[i + 1].count }
                            : { ...item, Count: item.Count }
                    ))
                    setBuyItems(temp);
                }
            }
        }
    }

    const Decrease = (id: number) => {
        for (let i = 0; i < increase.length; i++) {
            if (i < increase.length) {
                if (increase[i].count === buyItems[id].Count && i - 1 >= 0) {
                    const temp = buyItems.map((item) => (
                        item.id === id
                            ? { ...item, Count: increase[i - 1].count }
                            : { ...item, Count: item.Count }
                    ))
                    setBuyItems(temp);
                }
            }
        }
    }

    const CategoryIncrease = (id: number, category: string, type: string) => {
        if (type === "plus") {
            if (category === "Reach") {
                for (let i = 0; i < reach.length; i++) {
                    if (reach[i].count === buyItemCategory[id].count && i + 1 <= reach.length - 1) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: reach[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Reach"
                                ? { ...item, count: reach[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Impressions") {
                for (let i = 0; i < impressions.length; i++) {
                    if (impressions[i].count === buyItemCategory[id].count && i + 1 <= impressions.length - 1) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: impressions[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Impressions"
                                ? { ...item, count: impressions[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Saves") {
                for (let i = 0; i < saves.length; i++) {
                    if (saves[i].count === buyItemCategory[id].count && i + 1 <= saves.length - 1) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: saves[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Saves"
                                ? { ...item, count: saves[i + 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Guarantee") {
                for (let i = 0; i < guarantee.length; i++) {
                    if (guarantee[i].day === followersBuy[id].title && i + 1 <= guarantee.length - 1) {
                        const temp = followersBuy.map((item) => (
                            item.id === id
                                ? { ...item, title: guarantee[i + 1].day }
                                : { ...item, title: item.title }
                        ))
                        setFollowersBuy(temp);
                    }
                }
            }
        } else {
            if (category === "Reach") {
                for (let i = 0; i < reach.length; i++) {
                    if (reach[i].count === buyItemCategory[id].count && i - 1 >= 0) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: reach[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Reach"
                                ? { ...item, count: reach[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Impressions") {
                for (let i = 0; i < impressions.length; i++) {
                    if (impressions[i].count === buyItemCategory[id].count && i - 1 >= 0) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: impressions[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Impressions"
                                ? { ...item, count: impressions[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Saves") {
                for (let i = 0; i < saves.length; i++) {
                    if (saves[i].count === buyItemCategory[id].count && i - 1 >= 0) {
                        const temp = buyItemCategory.map((item) => (
                            item.id === id
                                ? { ...item, count: saves[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemCategory(temp);
                        const temp1 = buyItemDetail.map((item) => (
                            item.title === "Saves"
                                ? { ...item, count: saves[i - 1].count }
                                : { ...item, count: item.count }
                        ))
                        setBuyItemDetail(temp1);
                    }
                }
            } else if (category === "Guarantee") {
                for (let i = 0; i < guarantee.length; i++) {
                    if (guarantee[i].day === followersBuy[id].title && i - 1 >= 0) {
                        const temp = followersBuy.map((item) => (
                            item.id === id
                                ? { ...item, title: guarantee[i - 1].day }
                                : { ...item, title: item.title }
                        ))
                        setFollowersBuy(temp);
                    }
                }
            }
        }
    }

    useEffect(() => {
        setCategory(Title);
        setContentTitle(Content);
        if (Content !== "Followers") setButItemDetailState(true);
        else setButItemDetailState(false);

        if (Title === "Instagram" && Content === "Followers") setIsShow(true);
        else setIsShow(false)
    }, [Title, Content, setIsShow])

    useEffect(() => {
        if (showModal) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => setAnimate(false), 500);
            return () => clearTimeout(timer);
        }
    }, [showModal]);

    return (
        <div className="bg-white text-gray-900 flex justify-center overflow-x-hidden">
            <div className="max-w-screen-xl bg-white sm:rounded-lg flex justify-center flex-1" style={{ "marginTop": "150px" }}>
                <div className="w-full px-6 sm:px-12 flex flex-col items-center">
                    <div className="card bg-white flex py-3 flex-col">
                        <div className="w-full text-center">
                            <div className="font-bold text-2xl xl:text-3xl lg:text-4xl md:text-4xl items-center text-black">Buy {category} {contentTitle}</div>
                            <span className={`py-2 text-sm ${buyItemDetailState ? "hidden" : ""}`}>
                                At Influencity, you can buy Instagram followers quickly, safely,<br />
                                and easily with just a few clicks. See our deals below!
                            </span>
                        </div>
                        <div className="lg:w-[380px] md:w-[380px] sm:w-full w-full bg-gray-200 mt-6 text-sm text-gray-500 border-[#F3E8FF] rounded-full flex shadow-lg">
                            <button onClick={() => ChangeBuyModePress(false)} className={`w-2/4 flex justify-center items-center transition-colors duration-300 ease-in focus:outline-none focus:text-white-400 rounded-l-full lg:px-4 md:px-4 lg:py-4 md:py-2 text-xs py-2 ${buyMode ? "bg-white text-[#664481]" : "bg-[#664481] text-white"}`}>
                                High Quality {contentTitle}
                            </button>
                            <button onClick={() => ChangeBuyModePress(true)} className={`w-2/4 flex justify-center items-center transition-colors duration-300 ease-in focus:outline-none focus:text-white-400 rounded-r-full lg:px-4 md:px-4 lg:py-4 md:py-2 text-xs py-2 ${buyMode ? "bg-[#664481] text-white" : "bg-white text-[#664481]"}`}>
                                Active {contentTitle}
                            </button>
                        </div>
                    </div>
                    <div className="card bg-white py-3 flex flex-col w-4/5">
                        <div className="w-full py-3 text-center">
                            {
                                buyItems.map((item) => (
                                    <div className="inline-block px-2 py-1 w-24 " key={item.id}>
                                        <div className="relative">
                                            <button onClick={() => handleBuyItemPress(item.id)} type="button" className={`focus:outline-none text-white w-full h-full flex-col text-sm py-5 rounded-md hover:opacity-80 hover:shadow-lg flex items-center border border-[#F3E8FF] duration-300 ${item.Active ? "bg-[#664481]" : "bg-[white]"}`}>
                                                <span className={`font-bold ${item.Active ? "text-white" : "text-black"}`}>{item.Count}</span>
                                                <span className={`text-xs ${item.Active ? "text-white text-xs" : "text-[#664481]"}`}>{item.Type === "Followers" ? contentTitle : item.Type}</span>
                                            </button>
                                            <button type="button" onClick={() => Increase(item.id)} className={item.PlusButton ? "border flex justify-center items-center absolute rounded-full" : "hidden"}
                                                style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "26px", "right": "-13px" }}>
                                                <img src="/image/icon/plus.png" alt="" />
                                            </button>
                                            <button type="button" onClick={() => Decrease(item.id)} className={item.PlusButton ? "border flex justify-center items-center absolute rounded-full" : "hidden"}
                                                style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "26px", "left": "-13px" }}>
                                                <img src="/image/icon/minuse.png" alt="" />
                                            </button>
                                            <div className={item.Type === "Followers" || item.BestSelling === true ? "hidden" : "absolute"} style={{ "top": "-10px", "right": "-10px" }}>
                                                <img src="/image/img/percent.png" className="w-6" alt="" />
                                            </div>
                                            <div className={`absolute w-full top-0 text-[10px] rounded-full text-white bg-[#9333EA] ${item.BestSelling ? "" : "hidden"}`}>BEST SELLING</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="card bg-white py-3 flex w-full" style={{ "marginLeft": "5px" }}>
                        <div className="w-full py-3 text-center lg:flex justify-center">
                            <div className="lg:w-1/2 flex flex-col items-center justify-center px-6">
                                <div className="lg:w-full md:w-full sm:w-full lg:flex justify-center items-center">
                                    {
                                        buyItemDetailState ? (
                                            buyItemCategory.map((item) => (
                                                <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative" key={item.id}>
                                                    <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center duration-300 border-[#664481] bg-[#664481]`}>
                                                        <span className={`ml-0.5 text-white`}>{item.count}</span>
                                                        <span className={`ml-0.5 text-white`}>{item.content}</span>
                                                    </div>
                                                    <div className="border flex justify-center items-center absolute rounded-full" onClick={() => CategoryIncrease(item.id, item.content, "plus")}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "24px", "right": "15px" }}>
                                                        <img src={item.plusImage} alt="" />
                                                    </div>
                                                    <div className="border flex justify-center items-center absolute rounded-full" onClick={() => CategoryIncrease(item.id, item.content, "minuse")}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "24px", "left": "15px" }}>
                                                        <img src={item.minuseImage} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            followersBuy.map((item) => (
                                                <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative" key={item.id}>
                                                    <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center duration-300 border-[#664481] bg-[#664481]`}>
                                                        <span className={`ml-0.5 text-white`}>{item.title} Days</span>
                                                        <span className={`ml-0.5 text-white`}>{item.content}</span>
                                                    </div>
                                                    <div onClick={() => CategoryIncrease(item.id, item.content, "plus")} className={`border flex justify-center items-center absolute rounded-full ${item.id === 2 ? "" : "hidden"}`}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "24px", "right": "15px" }}>
                                                        <img src={item.plusImage} alt="" />
                                                    </div>
                                                    <div onClick={() => CategoryIncrease(item.id, item.content, "minuse")} className={`border flex justify-center items-center absolute rounded-full ${item.id === 2 ? "" : "hidden"}`}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#664481", "top": "24px", "left": "15px" }}>
                                                        <img src={item.minuseImage} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                                <div className="lg:w-full md:w-full sm:w-full lg:flex justify-center items-center py-5">
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <button type="button" className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#664481] bg-white`}>
                                            <span className="ml-0.5 text-[#664481]">Free Trial 25 {contentTitle}</span>
                                        </button>
                                    </div>
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#664481] bg-white`}>
                                            <span className="ml-0.5 text-[#664481]">$359.56</span>
                                        </div>
                                    </div>
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <button onClick={() => router.push("/Checkout")} type="button" className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#664481] bg-[#664481]`}>
                                            <span className="ml-0.5 text-white">Buy Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-3/12 md:w-full flex flex-col items-center justify-center">
                                <div className="lg:w-full md:w-full sm:w-full lg:flex lg:justify-center items-center">
                                    <div className="lg:w-full md:w-full flex justify-center flex-col items-center">
                                        {
                                            buyItemDetailState ? (
                                                <>
                                                    <div className="lg:w-full md:w-5/12 flex justify-center items-center">
                                                        <div className="w-1/4 flex justify-center items-center font-bold text-[#664481] text-xl">100%</div>
                                                        <div className="lg:w-3/4 md:w-3/4 sm:w-3/4 w-full p-1 flex justify-center items-center flex-col">
                                                            <span className="lg:text-xs md:text-sm sm:text-xs text-sm font-bold">Chance to reach explore page</span>
                                                            <span className="lg:text-xs md:text-sm sm:text-xs text-xs">Increase to improve chances.</span>
                                                        </div>
                                                    </div>
                                                    <div className="lg:w-full md:w-5/12 sm:w-5/12 w-full flex justify-center items-center py-2">
                                                        {
                                                            buyItemDetail.map((item) => (
                                                                <div className="lg:w-1/4 md:w-1/4 sm:w-1/4 w-1/4 flex flex-col" key={item.id}>
                                                                    <div className="lg:w-full md:w-full flex justify-center items-center">
                                                                        <img src={item.image} className="w-10 h-10" alt="" />
                                                                    </div>
                                                                    <div className="w-full flex justify-center items-center text-[#664481] text-sm">{item.title}</div>
                                                                    <div className="w-full flex justify-center items-center text-[#664481] text-sm font-bold">{item.count}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="lg:w-full md:w-5/12 lg:h-full flex justify-center items-center">
                                                        <div className="lg:w-full md:w-3/4 sm:w-3/4 w-full p-1 flex justify-center items-center flex-col">
                                                            <span className="lg:text-sm md:text-sm sm:text-sm text-sm font-bold text-[#664481]">
                                                                Please choose the guarantee to be refilled with any number of followers in case of an Instagram update.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center">
                <div>
                    {showModal && (
                        <>
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true" onClick={() => setShowModal(false)}>
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <div className={`fixed z-10 inset-0 overflow-y-auto ${showModal ? "animate-slide-in" : "animate-slide-out"}`} aria-modal="true" role="dialog" aria-labelledby="modal-headline">
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 text-center sm:block sm:p-0">
                                    <div className="border w-64 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full w-full" style={{ "marginTop": "80px" }}>
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
                                            <div className="sm:flex sm:items-start flex flex-col">
                                                <div className="w-full mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                                        {title} {contentTitle}
                                                    </h3>
                                                </div>
                                                <div className="w-full text-left sm:mt-0 sm:ml-4 flex">
                                                    <div className="w-1/2 py-3 flex justify-center flex-col">
                                                        {
                                                            title === "High Quality followers" ? (
                                                                highQuality.map((item) => (
                                                                    <div className="w-full flex items-center mt-2" key={item.id}>
                                                                        <img src="/image/icon/tick.png" className="w-4 h-4" alt="" />
                                                                        <span className="text-xs cursor-pointer px-1">{item.content}</span>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                active.map((item) => (
                                                                    <div className="w-full flex items-center mt-2" key={item.id}>
                                                                        <img src="/image/icon/tick.png" className="w-4 h-4" alt="" />
                                                                        <span className="text-xs cursor-pointer px-1">{item.content}</span>
                                                                    </div>
                                                                ))
                                                            )
                                                        }
                                                    </div>
                                                    <div className="w-1/2 py-3 flex justify-center flex-col">
                                                        <span className="text-xs cursor-pointer font-bold">What is the difference?</span>
                                                        {
                                                            title === "High Quality followers" ? (
                                                                <span className="text-xs cursor-pointer mt-2">{difference[0].content}</span>
                                                            ) : (
                                                                <span className="text-xs cursor-pointer mt-2">{difference[1].content}</span>
                                                            )
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 py-2 sm:px-6 sm:flex sm:flex-row-reverse px-4">
                                            <button onClick={subscribeToNewsletter} type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#664481] text-base font-medium text-white hover:bg-opacity-80 
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#664481] sm:ml-3 sm:w-auto sm:text-sm">OK</button>
                                            <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 
                                                bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 
                                                focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MainDashboardComponent;