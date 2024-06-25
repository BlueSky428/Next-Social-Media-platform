"use client"
import { FC, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram, faSoundcloud, faSpotify, faTiktok, faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEye, faHeart, faPlay, faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

type CateogoryButton = {
    id: number,
    title: string,
    icon: any,
    state: boolean
}

type ContentButton = {
    id: number,
    title: string,
    icon: any,
    parentID: number
}

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
    OldPrice: number,
    NewPrice: number,
    Active: boolean,
    parentID: number,
    BestSelling: boolean,
    PlusButton: boolean
}

type BuyDetail = {
    id: number,
    image: any,
    title: string,
    count: number
}

type BuyCategory = {
    id: number,
    plusImage: any,
    minuseImage: any,
    count: any,
    content: string
}

type FollowersBuy = {
    id: number,
    title: string,
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

const MainDashboardComponent: FC = () => {
    const [buyMode, setBuyMode] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState<string>("High Quality");
    const [category, setCategory] = useState<string>("Instagram");
    const [contentTitle, setContentTitle] = useState<string>("Followers");
    const [animate, setAnimate] = useState(false);
    const [newPrice, setNewPrice] = useState<number>(4.34);
    const [oldPrice, setOldPrice] = useState<number>(8.68);
    const [buyItemDetailState, setButItemDetailState] = useState<boolean>(false);
    const [instgramState, setInstagramState] = useState<boolean>(false);

    const router = useRouter();

    //useState Category Button Button Data
    const [categorybutton, setButton] = useState<CateogoryButton[]>(
        [
            { id: 0, title: "Instagram", icon: faInstagram, state: true },
            { id: 1, title: "Facebook", icon: faFacebook, state: false },
            { id: 2, title: "TikTok", icon: faTiktok, state: false },
            { id: 3, title: "Youtube", icon: faYoutube, state: false },
            { id: 4, title: "Spotify", icon: faSpotify, state: false },
            { id: 5, title: "Soundcloud", icon: faSoundcloud, state: false },
            { id: 6, title: "Twitch", icon: faTwitch, state: false },
            { id: 7, title: "Google", icon: faGoogle, state: false }
        ]
    )

    //global Content Button Data
    const _contentButton: ContentButton[] = [
        { id: 0, title: "Followers", icon: faUsers, parentID: -1 },
        { id: 1, title: "Views", icon: faEye, parentID: -1 },
        { id: 2, title: "Likes", icon: faHeart, parentID: -1 },
        { id: 3, title: "Auto Likes", icon: faHeart, parentID: -1 },
    ]

    //High Quality followers
    const [highQuality, setHighQuality] = useState<HighQuality[]>(
        [
            { id: 0, content: "High quality followers" },
            { id: 1, content: "Fast Delivery" },
            { id: 2, content: "30 days refills" },
            { id: 3, content: "No password required" },
            { id: 4, content: "24/7 support" },
        ]
    )

    //Active Followers
    const [active, setActive] = useState<ActiveFollowers[]>(
        [
            { id: 0, content: "Real Active followers" },
            { id: 1, content: "Guaranteed Delivery" },
            { id: 2, content: "60 days refills" },
            { id: 3, content: "No password required" },
            { id: 4, content: "24/7 support" },
        ]
    )

    //Difference
    const [difference, setDifference] = useState<Difference[]>(
        [
            { id: 0, content: "These are followers with profile pictures but no additional posts, and the option for auto-filling is active within the warranty period." },
            { id: 1, content: " New Active followers are for individuals who are dedicated to increasing their instagram following. These followers are guaranteed to have minimal to no drop-off." },
        ]
    )

    //Buy Items
    const [buyItems, setBuyItems] = useState<BuyItems[]>(
        [
            { id: 0, Count: 100, Type: "Followers", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
            { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
        ]
    )

    //useState Content Button Data
    const [contentbutton, setContentButton] = useState<ContentButton[]>(
        [
            { id: 0, title: "Followers", icon: faUsers, parentID: 0 },
            { id: 1, title: "Views", icon: faEye, parentID: 0 },
            { id: 2, title: "Likes", icon: faHeart, parentID: 0 },
            { id: 3, title: "Auto Likes", icon: faHeart, parentID: 0 },
        ]
    )

    //Buy Detail
    const [buyItemDetail, setBuyItemDetail] = useState<BuyDetail[]>(
        [
            { id: 0, image: "/image/icon/Likes.png", title: "Likes", count: 25 },
            { id: 1, image: "/image/icon/Reach.png", title: "Reach", count: 25 },
            { id: 2, image: "/image/icon/Impressions.png", title: "Impressions", count: 25 },
            { id: 3, image: "/image/icon/Saves.png", title: "Saves", count: 25 },
        ]
    )

    //Buy Category
    const [buyItemCategory, setBuyItemCategory] = useState<BuyCategory[]>(
        [
            { id: 0, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 0, content: "React" },
            { id: 1, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 0, content: "Impressions" },
            { id: 2, plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", count: 0, content: "Saves" }
        ]
    )

    //Followers Buy
    const [followersBuy, setFollowersBuy] = useState<FollowersBuy[]>(
        [
            { id: 0, title: "30 Days", content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
            { id: 1, title: "60 Days", content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
            { id: 2, title: "90 Days", content: "Guarantee", plusImage: "/image/icon/plus.png", minuseImage: "/image/icon/minuse.png", },
        ]
    )

    const [instagramAutoLikeBtn, setInstagramAutoLikeBtn] = useState<InstagramAutoLike[]>(
        [
            { id: 0, title: "Pay for likes", content: "Pay for likes separately", active: false },
            { id: 1, title: "30 Day subscription", content: "Manual Renewal", active: true },
        ]
    )

    //Category Button
    const handleButtonPress = (id: number) => {
        const ButtonTemp = [];
        const ContentButtonTemp = [];

        if (id === 0 || id === 1) { //Instagram Click and Facebook Click
            if (id === 0) {
                setCategory("Instagram");
                const FollowersHighQuality = [
                    { id: 0, Count: 100, Type: "Followers", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
                ]
                setBuyItems(FollowersHighQuality);
            }
            else {
                setCategory("Facebook");
                const FollowersHighQuality = [
                    { id: 0, Count: 100, Type: "Followers", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                    { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
                ]
                setBuyItems(FollowersHighQuality);
            }
            setContentTitle("Followers");
            for (let i = 0; i < 4; i++) {
                ContentButtonTemp.push(
                    {
                        id: i,
                        title: _contentButton[i].title,
                        icon: _contentButton[i].icon,
                        parentID: _contentButton[i].id
                    }
                )
            }
        } else if (id === 2 || id === 3) { //TikTok Click and Youtube Ckick
            if (id === 2) setCategory("TikTok");
            else setCategory("Youtube");
            setContentTitle("Followers");

            for (let i = 0; i < 3; i++) {
                ContentButtonTemp.push(
                    {
                        id: i,
                        title: _contentButton[i].title,
                        icon: _contentButton[i].icon,
                        parentID: _contentButton[i].id
                    }
                )
            }
        } else if (id === 4 || id === 5) { //Spotify Click and Soundcloud Click
            if (id === 4) setCategory("Spotify");
            else setCategory("Soundcloud");
            setContentTitle("Followers");
            for (let i = 0; i < 2; i++) {
                ContentButtonTemp.push(
                    {
                        id: i,
                        title: i === 0 ? _contentButton[i].title : "Plays",
                        icon: i === 0 ? _contentButton[i].icon : faPlay,
                        parentID: _contentButton[i].id
                    }
                )
            }
        } else if (id === 6) { //Twitch Click
            setCategory("Twitch");
            setContentTitle("Followers");
            for (let i = 0; i < 2; i++) {
                ContentButtonTemp.push(
                    {
                        id: i,
                        title: _contentButton[i].title,
                        icon: _contentButton[i].icon,
                        parentID: _contentButton[i].id
                    }
                )
            }
        } else if (id === 7) { //Google Click
            setCategory("Google");
            setContentTitle("Reviews");
            ContentButtonTemp.push(
                {
                    id: 0,
                    title: "Reviews",
                    icon: faStar,
                    parentID: id
                }
            )
        }

        for (let i = 0; i < categorybutton.length; i++) {
            if (i === id) {
                if (categorybutton[i].state === false) {
                    ButtonTemp.push(
                        {
                            id: i,
                            title: categorybutton[i].title,
                            icon: categorybutton[i].icon,
                            state: true
                        }
                    )
                } else {
                    ButtonTemp.push(
                        {
                            id: i,
                            title: categorybutton[i].title,
                            icon: categorybutton[i].icon,
                            state: categorybutton[i].state
                        }
                    )
                }
            } else {
                ButtonTemp.push(
                    {
                        id: i,
                        title: categorybutton[i].title,
                        icon: categorybutton[i].icon,
                        state: false
                    }
                )
            }
        }
        setButton(ButtonTemp);
        setContentButton(ContentButtonTemp);
    }

    //Content Title
    const handleContentTitlePress = (id: number) => {
        if (id === 0) {
            setButItemDetailState(false);
            if (category === "Google") setContentTitle("Reviews");
            else setContentTitle("Followers")
            setInstagramState(false)

            const FollowersHighQuality = [
                { id: 0, Count: 100, Type: "Followers", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
            ]
            setBuyItems(FollowersHighQuality);
        }
        else if (id === 1) {
            setButItemDetailState(true);
            if (category === "Soundcloud" || category === "Spotify") setContentTitle("Plays");
            else setContentTitle("Views");
            setInstagramState(false)

            const FollowersHighQuality = [
                { id: 0, Count: 100, Type: "Views", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
            ]
            setBuyItems(FollowersHighQuality);
        }
        else if (id === 2) {
            setButItemDetailState(true);
            setContentTitle("Likes");
            setInstagramState(false)

            const FollowersHighQuality = [
                { id: 0, Count: 100, Type: "Likes", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
            ]
            setBuyItems(FollowersHighQuality);
        }
        else if (id === 3) {
            setButItemDetailState(true);
            setContentTitle("AutoLikes");
            if (category === "Instagram") setInstagramState(true)

            const FollowersHighQuality = [
                { id: 0, Count: 100, Type: "AutoLikes", OldPrice: 8.68, NewPrice: 4.34, Active: true, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 1, Count: 500, Type: "Save55%", OldPrice: 23.31, NewPrice: 10.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 2, Count: 1000, Type: "Save58%", OldPrice: 46.40, NewPrice: 19.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 3, Count: 2500, Type: "Save60%", OldPrice: 93.73, NewPrice: 37.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 4, Count: 5000, Type: "Save80%", OldPrice: 374.95, NewPrice: 74.99, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 5, Count: 10000, Type: "Save67%", OldPrice: 568.15, NewPrice: 187.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 6, Count: 15000, Type: "Save70%", OldPrice: 824.97, NewPrice: 247.49, Active: false, parentID: 0, BestSelling: false, PlusButton: false },
                { id: 7, Count: 25000, Type: "Save75%", OldPrice: 1679.96, NewPrice: 419.99, Active: false, parentID: 0, BestSelling: true, PlusButton: true }
            ]
            setBuyItems(FollowersHighQuality);
        }
    }

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
            } else if (category === "Spotify" || category === "Soundcloud") { //Spotify and Soundcloud Click
                if (contentTitle === "Followers") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active followers" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeFollowersTemp);
                } else if (contentTitle === "Plays") {
                    const activeViewsTemp = [
                        { id: 0, content: "Real Active plays" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(activeViewsTemp);
                }
            } else if (category === "Twitch") { //Twitch Click
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
                }
            } else if (category === "Google") { //Google Click
                if (contentTitle === "Reviews") {
                    const activeFollowersTemp = [
                        { id: 0, content: "Real Active reviews" },
                        { id: 1, content: "Guaranteed Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                        { id: 4, content: "30 days refill" },
                    ]
                    setActive(activeFollowersTemp);
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
            } else if (category === "Spotify" || category === "Soundcloud") { //Spotify Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Plays") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality plays" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                }
            } else if (category === "Twitch") { //Twitch Click
                if (contentTitle === "Followers") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality followers" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityFollowersTemp);
                } else if (contentTitle === "Plays") {
                    const highQualityViewsTemp = [
                        { id: 0, content: "High quality views" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                    ]
                    setActive(highQualityViewsTemp);
                }
            } else if (category === "Google") { //Google Click
                if (contentTitle === "Reviews") {
                    const highQualityFollowersTemp = [
                        { id: 0, content: "High quality reviews" },
                        { id: 1, content: "Fast Delivery" },
                        { id: 2, content: "No password required" },
                        { id: 3, content: "24/7 support" },
                        { id: 4, content: "30 days refill" },
                    ]
                    setActive(highQualityFollowersTemp);
                }
            }
        }
    }

    //Buy Item Press
    const handleBuyItemPress = (id: number) => {
        setNewPrice(buyItems[id].NewPrice);
        setOldPrice(buyItems[id].OldPrice);
        const buyItemsTemp = [];

        for (let i = 0; i < buyItems.length; i++) {
            if (i === id) {
                if (buyItems[i].Active) {
                    buyItemsTemp.push(
                        {
                            id: i,
                            Count: buyItems[i].Count,
                            Type: buyItems[i].Type,
                            OldPrice: buyItems[i].OldPrice,
                            NewPrice: buyItems[i].NewPrice,
                            Active: buyItems[i].Active,
                            parentID: buyItems[i].id,
                            BestSelling: buyItems[i].BestSelling,
                            PlusButton: buyItems[i].PlusButton
                        }
                    )
                } else {
                    buyItemsTemp.push(
                        {
                            id: i,
                            Count: buyItems[i].Count,
                            Type: buyItems[i].Type,
                            OldPrice: buyItems[i].OldPrice,
                            NewPrice: buyItems[i].NewPrice,
                            Active: true,
                            parentID: buyItems[i].id,
                            BestSelling: buyItems[i].BestSelling,
                            PlusButton: buyItems[i].PlusButton
                        }
                    )
                }
            } else {
                buyItemsTemp.push(
                    {
                        id: i,
                        Count: buyItems[i].Count,
                        Type: buyItems[i].Type,
                        OldPrice: buyItems[i].OldPrice,
                        NewPrice: buyItems[i].NewPrice,
                        Active: false,
                        parentID: buyItems[i].id,
                        BestSelling: buyItems[i].BestSelling,
                        PlusButton: buyItems[i].PlusButton
                    }
                )
            }
        }
        setBuyItems(buyItemsTemp);
    }

    const subscribeToNewsletter = () => {
        setShowModal(false);
    };

    const instagramButtonParee = (index: number) => {
        const instagramBtn = []
        for (let i = 0; i < instagramAutoLikeBtn.length; i++) {
            if (i === index) {
                if (instagramAutoLikeBtn[i].active === true) {
                    instagramBtn.push(
                        {
                            id: i,
                            title: instagramAutoLikeBtn[i].title,
                            content: instagramAutoLikeBtn[i].content,
                            active: instagramAutoLikeBtn[i].active
                        }
                    )
                } else {
                    instagramBtn.push(
                        {
                            id: i,
                            title: instagramAutoLikeBtn[i].title,
                            content: instagramAutoLikeBtn[i].content,
                            active: true
                        }
                    )
                }
            } else {
                instagramBtn.push(
                    {
                        id: i,
                        title: instagramAutoLikeBtn[i].title,
                        content: instagramAutoLikeBtn[i].content,
                        active: false
                    }
                )
            }
        }
        setInstagramAutoLikeBtn(instagramBtn);
    }

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
                    <h1 className="text-2xl xl:text-3xl font-extrabold">Our Services</h1>
                    <span className="text-sm text-center">The best place to grow your social media account.</span>
                    <div className="card bg-white py-3 flex flex-col">
                        <div className="w-full py-3 text-center">
                            {
                                categorybutton.map((item) => (
                                    <div className="inline-block px-2 py-1" key={item.id}>
                                        <button type="button" onClick={() => handleButtonPress(item.id)}
                                            className={`focus:outline-none text-white text-sm py-2.5 px-4 rounded-md hover:opacity-80 hover:shadow-lg flex items-center border duration-300 ${item.state ? "bg-[#581C87]" : "border-[#581C87]"}`}>
                                            <FontAwesomeIcon icon={item.icon} color={item.state ? "white" : "#581C87"} style={{ "width": "15px", "height": "15px" }} />
                                            <span className={`ml-0.5 ${item.state ? "text-white" : "text-[#581C87]"}`}>{item.title}</span>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="card bg-white py-3 flex flex-col">
                        <div className="w-full py-3 text-center">
                            {
                                contentbutton.map((item) => (
                                    <div className="inline-block px-2 py-1" key={item.id}>
                                        <button type="button" onClick={() => handleContentTitlePress(item.id)}
                                            className={`focus:outline-none text-white text-sm py-2.5 px-4 rounded-md hover:bg-[#581C87] hover:shadow-lg flex items-center border duration-300 bg-[#581C87]`}>
                                            <FontAwesomeIcon icon={item.icon} color={"white"} style={{ "width": "15px", "height": "15px" }} />
                                            <span className={`ml-0.5 text-white`}>{item.title}</span>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="card bg-white flex py-3 flex-col">
                        <div className="w-full text-center">
                            <div className="font-bold text-2xl xl:text-3xl lg:text-4xl md:text-4xl items-center text-black">Buy {category} {contentTitle}</div>
                            <span className={`py-2 text-sm ${buyItemDetailState ? "hidden" : ""}`}>
                                At Influencity, you can buy Instagram followers quickly, safely,<br />
                                and easily with just a few clicks. See our deals below!
                            </span>
                            <div className="w-full py-3 text-center">
                                {/* {
                                    instgramState ? (
                                        instagramAutoLikeBtn.map((item) => (
                                            <div className="inline-block px-2 py-1" key={item.id}>
                                                <button type="button" onClick={() => instagramButtonParee(item.id)}
                                                    className={`focus:outline-none text-white text-sm py-2.5 px-4 rounded-md hover:opacity-80 hover:shadow-lg flex items-center flex-col border duration-300 shadow-slate-800 drop-shadow-2xl ${item.active ? "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" : "bg-white"}`}>
                                                    <span className={`ml-0.5 text-sm ${item.active ? "text-white" : "text-green-600"}`}>{item.title}</span>
                                                    <span className={`ml-0.5 text-sm ${item.active ? "text-white" : "text-green-600"}`}>{item.content}</span>
                                                </button>
                                            </div>
                                        ))
                                    ) : (
                                        <div></div>
                                    )
                                } */}
                            </div>
                        </div>
                        <div className="bg-gray-200 mt-6 text-sm text-gray-500 border-[#F3E8FF] rounded-full inline-flex shadow-lg">
                            <button onClick={() => ChangeBuyModePress(false)} className={`w-2/4 flex justify-center items-center transition-colors duration-300 ease-in focus:outline-none focus:text-white-400 rounded-l-full px-4 py-2 ${buyMode ? "bg-white text-[#581C87]" : "bg-[#581C87] text-white"}`}>
                                High Quality {contentTitle}
                            </button>
                            <button onClick={() => ChangeBuyModePress(true)} className={`w-2/4 flex justify-center items-center transition-colors duration-300 ease-in focus:outline-none focus:text-white-400 rounded-r-full px-4 py-2 ${buyMode ? "bg-[#581C87] text-white" : "bg-white text-[#581C87]"}`}>
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
                                            <button onClick={() => handleBuyItemPress(item.id)} type="button" className={`focus:outline-none text-white w-full h-full flex-col text-sm py-5 px-6 rounded-md hover:opacity-80 hover:shadow-lg flex items-center border border-[#F3E8FF] duration-300 ${item.Active ? "bg-[#581C87]" : "bg-[white]"}`}>
                                                <span className={`font-bold ${item.Active ? "text-white" : "text-black"}`}>{item.Count}</span>
                                                <span className={`text-xs ${item.Active ? "text-white text-xs" : "text-[#581C87]"}`}>{item.Type}</span>
                                            </button>
                                            <button type="button" className={item.PlusButton ? "border flex justify-center items-center absolute rounded-full" : "hidden"}
                                                style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "26px", "right": "-13px" }}>
                                                <img src="/image/icon/plus.png" alt="" />
                                            </button>
                                            <button type="button" className={item.PlusButton ? "border flex justify-center items-center absolute rounded-full" : "hidden"}
                                                style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "26px", "left": "-13px" }}>
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
                                                    <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center duration-300 border-[#581C87] bg-[#581C87]`}>
                                                        <span className={`ml-0.5 text-white`}>{item.count}</span>
                                                        <span className={`ml-0.5 text-white`}>{item.content}</span>
                                                    </div>
                                                    <div className="border flex justify-center items-center absolute rounded-full"
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "24px", "right": "15px" }}>
                                                        <img src={item.plusImage} alt="" />
                                                    </div>
                                                    <div className="border flex justify-center items-center absolute rounded-full"
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "24px", "left": "15px" }}>
                                                        <img src={item.minuseImage} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            followersBuy.map((item) => (
                                                <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative" key={item.id}>
                                                    <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center duration-300 border-[#581C87] bg-[#581C87]`}>
                                                        <span className={`ml-0.5 text-white`}>{item.title}</span>
                                                        <span className={`ml-0.5 text-white`}>{item.content}</span>
                                                    </div>
                                                    <div className={`border flex justify-center items-center absolute rounded-full ${item.id === 2 ? "" : "hidden"}`}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "24px", "right": "15px" }}>
                                                        <img src={item.plusImage} alt="" />
                                                    </div>
                                                    <div className={`border flex justify-center items-center absolute rounded-full ${item.id === 2 ? "" : "hidden"}`}
                                                        style={{ "width": "25px", "height": "25px", "backgroundColor": "#581C87", "top": "24px", "left": "15px" }}>
                                                        <img src={item.minuseImage} alt="" />
                                                    </div>
                                                </div>
                                            ))
                                        )
                                    }
                                </div>
                                <div className="lg:w-full md:w-full sm:w-full lg:flex justify-center items-center py-5">
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <button type="button" className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#581C87] bg-white`}>
                                            <span className="ml-0.5 text-[#581C87]">Free Trial 25 {contentTitle}</span>
                                        </button>
                                    </div>
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <div className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#581C87] bg-white`}>
                                            <span className="ml-0.5 text-[#581C87]">$359.56</span>
                                        </div>
                                    </div>
                                    <div className="inline-block lg:w-4/12 sm:w-1/3 w-full px-2 py-1 relative">
                                        <button onClick={() => router.push("/Checkout")} type="button" className={`w-full flex justify-center flex-col focus:outline-none text-sm py-2.5 px-4 rounded-md hover:bg-opacity-90 hover:shadow-lg flex items-center border duration-300 border-[#581C87] bg-[#581C87]`}>
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
                                                        <div className="w-1/4 flex justify-center items-center font-bold text-[#581C87] text-xl">100%</div>
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
                                                                    <div className="w-full flex justify-center items-center text-[#581C87] text-sm">{item.title}</div>
                                                                    <div className="w-full flex justify-center items-center text-[#581C87] text-sm font-bold">{item.count}</div>
                                                                </div>
                                                            ))
                                                        }
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="lg:w-full md:w-5/12 lg:h-full flex justify-center items-center mb-8">
                                                        <div className="lg:w-3/4 md:w-3/4 sm:w-3/4 w-full p-1 flex justify-center items-center flex-col">
                                                            <span className="lg:text-base md:text-sm sm:text-base text-sm font-bold text-[#581C87]">
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
                                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                    <div className="border w-64 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" style={{ "marginTop": "80px" }}>
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
                                                                        <img src="/image/icon/tick.png" className="w-5 h-5" alt="" />
                                                                        <span className="text-sm cursor-pointer">{item.content}</span>
                                                                    </div>
                                                                ))
                                                            ) : (
                                                                active.map((item) => (
                                                                    <div className="w-full flex items-center mt-2" key={item.id}>
                                                                        <img src="/image/icon/tick.png" className="w-5 h-5" alt="" />
                                                                        <span className="text-sm cursor-pointer">{item.content}</span>
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
                                        <div className="bg-gray-50 py-2 sm:px-6 sm:flex sm:flex-row-reverse">
                                            <button onClick={subscribeToNewsletter} type="button"
                                                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#581C87] text-base font-medium text-white hover:bg-opacity-80 
                                                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#581C87] sm:ml-3 sm:w-auto sm:text-sm">OK</button>
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