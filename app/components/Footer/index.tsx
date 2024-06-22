import { faFacebook, faGoogle, faInstagram, faLinkedin, faSoundcloud, faSpotify, faTiktok, faTwitch, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-w-xs mx-auto sm:max-w-2xl lg:max-w-full">
                    <div className="col-span-full lg:mb-10 max-lg:border-b max-lg:pb-8 lg:border-r border-gray-200 lg:col-span-2 lg:max-w-xs lg:mb-0">
                        <a className="flex lg:justify-start">
                            <img src="/image/logo.png" className="w-40" alt="" />
                        </a>
                        <div className="w-full flex justify-center items-center py-7 text-xs">
                            Trusted in more than 100 countries & 5 million customers. Follow us social media.
                        </div>
                        <div className="w-full flex justify-start items-center py-5">
                            <a href="" className="w-9 h-9 rounded-full bg-[#581C87] border flex justify-center items-center px-4 mr-2"><FontAwesomeIcon icon={faInstagram} style={{ "color": "white" }} /></a>
                            <a href="" className="w-9 h-9 rounded-full bg-[#581C87] border flex justify-center items-center px-4 mr-2"><FontAwesomeIcon icon={faFacebook} style={{ "color": "white" }} /></a>
                            <a href="" className="w-9 h-9 rounded-full bg-[#581C87] border flex justify-center items-center px-4 mr-2"><FontAwesomeIcon icon={faTiktok} style={{ "color": "white" }} /></a>
                            <a href="" className="w-9 h-9 rounded-full bg-[#581C87] border flex justify-center items-center px-4 mr-2"><FontAwesomeIcon icon={faYoutube} style={{ "color": "white" }} /></a>
                        </div>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Useful Links</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">FAQ</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Blog</a></li>
                            <li><a href="/" className=" text-gray-600 hover:text-gray-900">Contact</a></li>

                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Services</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="/" className="text-gray-600 hover:text-gray-900">Marketplace</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Instagram Services</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">TikTok Services</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Facebook Services</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Spotify Services</a></li>
                            <li><a href="/" className=" text-gray-600 hover:text-gray-900">Youtube Services</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Tools & Resources</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="/" className="text-gray-600 hover:text-gray-900">Instagram Video Downloader</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Instagram Profile Picture Viewer</a></li>
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Instagram Story Downloader</a></li>
                            <li ><a href="/" className=" text-gray-600 hover:text-gray-900">Instagram Followers Counter</a></li>
                        </ul>
                    </div>
                    <div className="lg:mx-auto text-left ">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">My Account</h4>
                        <ul className="text-sm  transition-all duration-500">
                            <li className="mb-6"><a href="/" className=" text-gray-600 hover:text-gray-900">Login</a></li>
                            <li ><a href="/" className=" text-gray-600 hover:text-gray-900">Sign up</a></li>
                        </ul>
                    </div>
                </div>
                <div className="py-7 border-t border-gray-200 flex justify-center items-center relative">
                    <div className="flex items-center justify-center lg:absolute lg:left-0 md:absolute md:left-0 sm:absolute sm:left-0">
                        <span className="text-sm text-gray-500 ">©<a href="https://pagedone.io/">Influencit.io</a> 2024, All rights reserved.
                        </span>
                    </div>
                    <div className="flex justify-between items-center w-32 lg:absolute lg:right-0 md:absolute md:right-0 sm:absolute sm:right-0">
                        <a className="cursor-pointer text-[#581C87] text-sm">Terms</a>
                        <a className="cursor-pointer text-[#581C87] text-sm">Privacy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;