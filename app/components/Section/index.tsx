import { faHistory } from "@fortawesome/free-solid-svg-icons/faHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

type Section = {
    id: number,
    icon: any,
    title: string,
    content: string
}

const LeadershipSection: FC = () => {

    return (
        <section className="py-10 bg-white sm:py-12 lg:py-16">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-center flex-col items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold leading-tight text-black sm:text-2xl xl:text-3xl py-10">
                        We've got your back. In more ways than one.
                    </h2>
                </div>
                <div className="grid grid-cols-1 text-center sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-2 lg:w-3/4 md:w-3/4 sm:w-3/4 w-full">
                    <div className="md:p-8 lg:p-14 p-4 flex flex-col justify-center items-center  rounded-lg shadow-lg">
                        <div className="w-20 h-20 rounded-full shadow-2xl flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" className="w-8">
                                <g id="budicon-forward-time">
                                    <circle cx="12.5" cy="12.5" r="8.5" style={{ fill: 'white' }} />
                                    <path
                                        d="M24.5,4a.5.5,0,0,0-.5.5V7.616a12.4932,12.4932,0,1,0-2.1221,13.15.5.5,0,1,0-.75-.6621A11.5076,11.5076,0,1,1,23.0715,8H20.5a.5.5,0,0,0,0,1h4a.5.5,0,0,0,.5-.5v-4A.5.5,0,0,0,24.5,4Z"
                                        style={{ fill: '#581C87' }}
                                    />
                                    <path
                                        d="M12.5,6a.5.5,0,0,0-.5.5v6l0,.0016a.4956.4956,0,0,0,.1423.3462l.0038.0057,4,4a.5.5,0,0,0,.7071-.707L13,12.2932V6.5A.5.5,0,0,0,12.5,6Z"
                                        style={{ fill: '#581C87' }}
                                    />
                                </g>
                            </svg>
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-black">Zero Lag Time</h3>
                        <p className="mt-5 text-base text-gray-600 text-sm">
                            As soon as you finish your order, we'll start sending your real and authentic followers.
                        </p>
                    </div>
                    <div className="md:p-8 lg:p-14 p-4 md:border-gray-200 flex flex-col justify-center items-center rounded-lg shadow-lg">
                        <div className="w-20 h-20 rounded-full shadow-2xl flex justify-center items-center">
                            <img src="/image/icon/car.png" alt="" className="w-10" />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-black">React-Time Delivery Tracking</h3>
                        <p className="mt-5 text-base text-gray-600 text-sm">
                            After your order, you'll get a tracking link to see your delivery progress in real-time.
                        </p>
                    </div>
                    <div className="md:p-8 lg:p-14 p-4 md:border-gray-200 flex flex-col justify-center items-center rounded-lg shadow-lg">
                        <div className="w-20 h-20 rounded-full shadow-2xl flex justify-center items-center">
                            <img src="/image/icon/like.png" alt="" className="w-10" />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-black">Award-Winning Service</h3>
                        <p className="mt-5 text-base text-gray-600 text-sm">
                            For a reason, We don't only deliver top-tier Instagram followers, but service too.
                        </p>
                    </div>
                    <div className="md:p-8 lg:p-14 p-4 md:border-gray-200 flex flex-col justify-center items-center rounded-lg shadow-lg">
                        <div className="w-20 h-20 rounded-full shadow-2xl flex justify-center items-center">
                            <img src="/image/icon/message.png" alt="" style={{ "width": "30px" }} />
                        </div>
                        <h3 className="mt-5 text-xl font-bold text-black">Anytime Support</h3>
                        <p className="mt-5 text-base text-gray-600 text-sm">
                            Need help or have an issue? We're always standing by to deliver quick & friendly help.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LeadershipSection;