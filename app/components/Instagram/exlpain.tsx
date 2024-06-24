import { FC } from "react";

type InstagramProfilePictureViewerExplain = {
    id: number,
    title: string,
    content: string,
    avatar: string,
    fcontent: string,
    scontent: string,
    tcontent: string,
    focontent: string,
    fifcontent: string
}

type Type = {
    type?: any
}

const ExplainInstagramDownloader: FC<Type> = ({ type }) => {

    const instagramprofilepictureviewerexplain: InstagramProfilePictureViewerExplain[] = [
        {
            id: 0,
            title: "What is the Instagram Profile Picture Viewer?",
            content: "This viewer is one of many free tools that Twicsy provides as a service to our clients and our website visitors.",
            avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
            fcontent: "As the leading social media service delivering real Instagram followers, likes, views, and comments, we know that all of our customers spend a good deal of time on the Gram. This free Instagram profile picture viewer is one of many tools that can help make regular IG users’ time on the app more enjoyable and productive.",
            scontent: "Instagram has designed its platform to prevent easy downloading of most photos, videos, and other features. That’s a sensible approach since it gives users a measure of protection. The content they upload belongs to them, and making it difficult to download that content prevents some disreputable Insta users from taking the content and using it as if it were their own. If you’ve ever had someone steal your photo from a social media site and then use it as their profile picture, you can understand why Instagram would want to protect its users’ content.",
            tcontent: "That can create other problems for ordinary and trustworthy people, though. For example, have you ever tried to see if your Instagram profile picture represents you properly on the app? No matter how big the photo was when you uploaded it, the system makes profile pics so small (110 by 100 pixels) that it’s virtually impossible to make out facial features and be sure that the photo uploaded properly.",
            focontent: "No worries; that’s where Twicsy’s free Instagram profile picture viewer comes in. This handy tool takes an Insta profile photo and displays it in full size, giving you a clear and realistic view of the picture.",
            fifcontent: "There’s no way to do this when you’re in the Instagram app; our viewer is an invaluable tool for viewing and checking profile photos — and it’s absolutely free to use, even if you’re not a Twicsy customer.",
        },
        {
            id: 1,
            title: "What is Twicsy’s Free Instagram Video Downloader?",
            content: "Instagram has become one of the world’s leading social media platforms because of the robust features that make the app useful and fun. There’s one feature missing, though, and it’s one that most users have longed for ever since they first logged onto the system: the ability to download videos.",
            avatar: "https://demoapus1.com/freeio/wp-content/uploads/2022/10/5-150x150.jpg",
            fcontent: "We’ve all experienced the problem. You watch a video that’s hilarious, or poignant, or fascinating — and you wish you could share it with a friend or family member who isn’t on the Gram. However, Instagram videos can’t be downloaded from the app; all you can do is share them with others who have IG accounts.",
            scontent: "That’s not unusual. Most big social platforms prohibit people from saving videos that users have uploaded. There are two reasons why; millions of people downloading content would put tremendous stress on the system, and many downloaders would take vids they don’t own and use them for unauthorized or even nefarious purposes.",
            tcontent: "That prohibition against downloading Instagram videos is the issue that Twicsy’s free video downloader has been designed to solve. As long as a vid hasn’t been posted by a protected account that has been set to “private,” our free capture tool allows you to download it, watch it, and save it to your device or computer. It’s the feature that most IG users have always wished for, and now it’s simple to do with Twicsy’s Insta downloader.",
            focontent: "This tool, like all of the free Instagram tools we offer on our website, is completely free to use with no obligation. We don’t ask for any personal information like your login information, credit card number, or email, and you don’t have to be a Twicsy customer to use our video downloader as often as you’d like.",
            fifcontent: "With just a few quick and easy steps, you can now keep almost any IG video in your personal collection to be watched over and over again, or to be shared with relatives and friends. In many ways, this Twicsy tool “completes” the Instagram experience and makes the app even more enjoyable to use.",
        }
    ]

    return (
        <>
            {
                type === "Instagram Profile Picture Viewer" ? (
                    <div className="w-full flex flex-col justify-center items-center lg:mt-20 md:mt-8 sm:mt-8 mt-14">
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-2xl text-[18px] text-black">{instagramprofilepictureviewerexplain[0].title}</h1>
                            <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs border-b">
                                {instagramprofilepictureviewerexplain[0].content}
                            </span>
                        </div>
                        <div className="mt-6"></div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-[20%] md:w-full sm:w-full w-full flex justify-center items-center">
                                <img src={instagramprofilepictureviewerexplain[0].avatar} className="w-20 h-20 rounded-full" alt="" />
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[0].fcontent}
                                </span>
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[0].scontent}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-full md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[0].tcontent}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-[20%] md:w-full sm:w-full w-full flex justify-center items-center">
                                <img src={instagramprofilepictureviewerexplain[0].avatar} className="w-20 h-20 rounded-full" alt="" />
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[0].focontent}
                                </span>
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[0].fifcontent}
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-col justify-center items-center lg:mt-20 md:mt-8 sm:mt-8 mt-14">
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full flex flex-col justify-center items-center px-4">
                            <h1 className="font-bold lg:text-3xl md:text-2xl sm:text-2xl text-[18px] text-black">{instagramprofilepictureviewerexplain[1].title}</h1>
                            <span className="py-4 text-center lg:text-base md:text-sm sm:text-sm text-xs border-b">
                                {instagramprofilepictureviewerexplain[1].content}
                            </span>
                        </div>
                        <div className="mt-6"></div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-[20%] md:w-full sm:w-full w-full flex justify-center items-center">
                                <img src={instagramprofilepictureviewerexplain[1].avatar} className="w-20 h-20 rounded-full" alt="" />
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[1].fcontent}
                                </span>
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[1].scontent}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-full md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[1].tcontent}
                                </span>
                            </div>
                        </div>
                        <div className="lg:w-[50%] md:w-4/5 sm:w-4/5 w-full lg:flex justify-center px-4">
                            <div className="lg:w-[20%] md:w-full sm:w-full w-full flex justify-center items-center">
                                <img src={instagramprofilepictureviewerexplain[1].avatar} className="w-20 h-20 rounded-full" alt="" />
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[1].focontent}
                                </span>
                            </div>
                            <div className="lg:w-2/5 md:w-full sm:w-full w-full flex justify-center">
                                <span className="py-4 lg:text-base md:text-sm sm:text-sm text-xs px-2">
                                    {instagramprofilepictureviewerexplain[1].fifcontent}
                                </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default ExplainInstagramDownloader;