import { FC } from "react";

const ServiceHeader: FC = () => {
    return (
        <div className="lg:w-full items-center lg:py-4 md:py-12 sm:py-12 lg:px-24 lg:mt-0 sm:mt-6 mt-6 px-1 relative">
            <div className="flex items-center">
                <h1 className="font-bold lg:text-2xl md:text-2xl sm:text-xl text-xl">Full Service host that will do most of the work for you</h1>
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex lg:items-center md:items-center lg:flex-row md:flex-row sm:flex-row flex-row">
                    <div className="flex justify-center items-center lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-16 sm:h-16 w-14 h-14 relative">
                        <img className="w-full h-full" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png" alt="" />
                        <div className="absolute bottom-0 lg:right-0 md:right-0 sm:right-0 -right-1 lg:h-8 lg:w-8 md:h-8 md:w-8 sm:w-6 sm:h-6 w-6 h-6 flex justify-center items-center rounded-full bg-[#664481]">
                            <svg width="16" height="16" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="#fff">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-col lg:px-4 md:px-4 sm:px-2 px-2 lg:py-2 md:py-2 sm:py-0 py-0">
                        <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col">
                            <div className="flex items-center">
                                <span className="text-base font-bold">Vitalii D.</span>
                                <div className="flex justify-center items-center px-1 ml-4 rounded" style={{ "color": "#fff", "backgroundColor": "#664481" }}>
                                    <svg width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M8.203.432a1.891 1.891 0 0 0-2.406 0l-1.113.912a1.904 1.904 0 0 1-.783.384l-1.395.318c-.88.2-1.503.997-1.5 1.915l.007 1.456c0 .299-.065.594-.194.863L.194 7.59a1.978 1.978 0 0 0 .535 2.388l1.12.903c.231.185.417.422.543.692l.615 1.314a1.908 1.908 0 0 0 2.166 1.063l1.392-.33c.286-.068.584-.068.87 0l1.392.33a1.908 1.908 0 0 0 2.166-1.063l.615-1.314c.126-.27.312-.507.542-.692l1.121-.903c.707-.57.93-1.563.535-2.388l-.625-1.309a1.983 1.983 0 0 1-.194-.863l.006-1.456a1.947 1.947 0 0 0-1.5-1.915L10.1 1.728a1.904 1.904 0 0 1-.784-.384L8.203.432Zm2.184 5.883a.742.742 0 0 0 0-1.036.71.71 0 0 0-1.018 0L6.565 8.135 5.095 6.73a.71.71 0 0 0-1.018.032.742.742 0 0 0 .032 1.036L6.088 9.69a.71.71 0 0 0 1.001-.016l3.297-3.359Z">
                                        </path>
                                    </svg>
                                    <p className="text-sm px-1">Pro</p>
                                </div>
                            </div>
                            <pre className="lg:flex md:flex sm:hidden hidden"> | </pre>
                            <div className="flex items-center">
                                <span className="text-xs">Level 2</span>
                                <div className="flex px-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="currentColor">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" width="10" height="10" fill="#E4E5E7">
                                        <path d="M4.839.22a.2.2 0 0 1 .322 0l1.942 2.636a.2.2 0 0 0 .043.043L9.782 4.84a.2.2 0 0 1 0 .322L7.146 7.105a.2.2 0 0 0-.043.043L5.161 9.784a.2.2 0 0 1-.322 0L2.897 7.148a.2.2 0 0 0-.043-.043L.218 5.163a.2.2 0 0 1 0-.322l2.636-1.942a.2.2 0 0 0 .043-.043L4.839.221Z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <svg
                                    className="w-4 h-4 text-yellow-300"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="lg:px-2 px-1 py-1 lg:text-sm md:text-sm sm:text-xs text-xs">5.0</span>
                                <span className="lg:px-2 px-1 py-1 lg:text-sm md:text-sm sm:text-xs text-xs">(1200)</span>
                            </div>
                            <pre> | </pre>
                            <div className="flex items-center">
                                <span className="lg:text-sm md:text-sm sm:text-xs text-xs">22 orders in quenue</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader;