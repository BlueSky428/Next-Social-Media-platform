"use client"
import { FC, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';


type FooterComponent = {
    id: number,
    image: string,
    content: string,
}

const PriceComponent: FC = () => {

    const [isMobileMD, setIsMobileMD] = useState<boolean>(false);
    const [isMobileSM, setIsMobileSM] = useState<boolean>(false);
    const [isMobileXS, setIsMobileXS] = useState<boolean>(false);
    const [sliderCount, setSliderCount] = useState<number>(3);

    const [footerComponent, setFooterComponent] = useState<FooterComponent[]>([
        { id: 0, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/94cd1fb842d2f83673cb82471cf31391-1681338894376/1679327104976-Socialmediacampaignexamples.png", content: "10 Inspiring social media campaign examples(+tips)" },
        { id: 1, image: "https://fiverr-res.cloudinary.com/image/upload/w_430/f_auto,q_auto/v1/attachments/generic_asset/asset/f8b90c2d98253cab80acab0fcdb7ccfe-1683018247626/1679327122574-Socialmediatrends.png", content: "Top 10 social media trends to add to your strategy" },
        { id: 2, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/12fb4aa47ab0418009abf26a668c3068-1683117055632/1682363404403-Tiktokvsinta_howtochoosethebestoneforyourbrand_.jpeg", content: "Tiktok vs. Instagram: how to choose the best platform for your brand" },
        { id: 3, image: "https://fiverr-res.cloudinary.com/f_auto,q_auto/v1/attachments/generic_asset/asset/6826e34b1484e1335aa97b54071def3f-1686782493289/1685545819018-9UGCStrategiesThatCanSkyrocketYourEngagementandConversions.jpg", content: "9 UGC strategies to skyrocket engagement and conversions" }
    ])

    useEffect(() => {
        if (window.innerWidth <= 1150 && window.innerWidth >= 700) {
            setIsMobileMD(true);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(3);
        } else if (window.innerWidth <= 700 && window.innerWidth >= 640) {
            setIsMobileMD(false);
            setIsMobileSM(true);
            setIsMobileXS(true);
            setSliderCount(2);
        } else if (window.innerWidth <= 640) {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(true);
            setSliderCount(1);
        } else {
            setIsMobileMD(false);
            setIsMobileSM(false);
            setIsMobileXS(false);
            setSliderCount(3);
        }
    }, [isMobileMD, isMobileSM, isMobileXS, sliderCount])

    return (
        <section className="bg-white dark:bg-white">
            <div className="max-w-screen-xl px-4 py-4 mx-auto lg:px-6">
                <Swiper spaceBetween={10} slidesPerView={sliderCount}>
                    {
                        footerComponent.map((item) => (
                            <SwiperSlide key={item.id}>
                                <div className="w-full lg:flex-row md:flex-row sm:flex-col flex-col items-center cursor-pointer" key={item.id}>
                                    <div className="w-full flex flex-col hover:opacity:80">
                                        <img className="" src={item.image} alt="" />
                                        <div className="w-full flex justify-center items-center mt-2 text-base">{item.content}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default PriceComponent;