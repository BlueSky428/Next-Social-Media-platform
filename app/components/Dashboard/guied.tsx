"use client"
import { FC } from 'react';

type guideProps = {
    isShow?: boolean
}

const Guide: FC<guideProps> = ({ isShow }) => {

    return (
        <div className={`${isShow ? "container mx-auto px-6 md:px-12 xl:px-32 flex justify-cetner flex-col items-center py-12" : "hidden"}`}>
            <div className="mb-4 text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl text-black">How to Buy Instagram Followers</h2>
                <div className='flex flex-col justify-center'>
                    <span>Buying Instagram followers through Buzzoid is created to make it as easy for ther user as possible.<br />
                        We do not require any private or sensitive information whatsoever, such as loing credentials.<br />
                        We strive to keep the process as hassle-free as possible, in order to get your order delivered to you as quickly as possible.<br />
                        <strong>(Did you know that most orders get delivered within 10 minutes?)</strong><br />
                    </span>
                    <span className="w-full mt-10">
                        You can easily and quickly gain followers using our service.<br />
                        The Buzzoid purchase experience is only a 4 step process:
                    </span>
                </div>
            </div>
            <div className="mt-16 grid divide-x divide-y divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                <div className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="gray" style={{ color: 'gray' }} height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                            <path d="M10 10l2 -2v8" />
                        </svg>
                        <div className="space-y-2">
                            <h5 className="text-xl font-semibold text-gray transition">Pick A Package</h5>
                            <p className="text-gray">We have many different options for every type of client. If you are looking for only a fundred followers, or up to 20, 000 followers - we got you! Make sure you select the follower quality via our tabs as well.</p>
                        </div>
                    </div>
                </div>
                <div className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="gray" style={{ color: 'gray' }} height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                            <path d="M10 8h3a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h3" />
                        </svg>
                        <div className="space-y-2">
                            <h5 className="text-xl font-semibold text-gray transition group-hover:text-secondary">Enter Your Username</h5>
                            <p className="text-gray">Fill out the first field with your Instagram profile name. This is all we need to deliver your followers. YOu should also use a valid 3-mail for us to send you the receipt, but this is optional.</p>
                        </div>
                    </div>
                </div>
                <div className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="gray" style={{ color: 'gray' }} height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                            <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1" />
                        </svg>
                        <div className="space-y-2">
                            <h5 className="text-xl font-semibold text-gray transition group-hover:text-secondary">Review Order Details</h5>
                            <p className="text-gray">Make sure your go through your order to verify that you have not missed anything. We also have a lot of extras you can add on the last step such as likes and AI generated tailored comments.</p>
                        </div>
                    </div>
                </div>
                <div className="group relative bg-gray-100 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                    <div className="relative space-y-8 py-12 p-8">
                        <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="gray" style={{ color: 'gray' }} height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                            <path d="M10 8v3a1 1 0 0 0 1 1h3" />
                            <path d="M14 8v8" />
                        </svg>
                        <div className="space-y-2">
                            <h5 className="text-xl font-semibold text-gray transition group-hover:text-secondary">Complete Purchase</h5>
                            <p className="text-gray">Finally, click on 'Buy Now' to complete the process and watch your followers grow! It really is that easy.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center mt-12 lg:px-48 md:px-48 py-4 rounded shadow-lg bg-gray-100 lg:w-auto md:w-auto sm:w-full w-full">
                <div className='flex justify-center items-center flex-col'>
                    <span className='font-bold'>Ready to boost your Instagram presence?</span>
                    <span className='font-bold text-[#664481]'>Start growing your following today!</span>
                </div>
                <div className='w-full flex justify-center items-center mt-4'>
                    <button className='lg:p-4 md:p-4 sm:p-3 p-2 bg-[#664481] text-white rounded hoveropacity-90'>Get Started Now</button>
                </div>
            </div>
        </div>
    );
};

export default Guide;