"use client"
import React, { useState } from 'react';
import Carousel from './Carousel';
import { popularServiceData, imageData, socialType } from '@/app/data/Marketplace/marketplaceData';
import { useRouter } from 'next/navigation';

type PopularServices = {
    id: number;
    icon: any;
    title: string;
    content: string;
    reviewMark: number;
    reviewCount: number;
    userAvatar: string;
    userName: string;
    money: string;
    socialTypeID: number
}

type Image = {
    id: number;
    image: string;
    parentID: number;
}

type CategoryProps = {
    categoryID?: number
}

const Marketplace: React.FC<CategoryProps> = ({ categoryID }) => {

    const [popularServices, serPopularServices] = useState<PopularServices[]>(popularServiceData);
    const router = useRouter();

    const [images] = useState<Image[]>(imageData);

    const ServicePage = () => {
        router.push("/Service")
    }

    return (
        <div className="mx-auto max-w-screen-xl px-4 w-full justify-center mt-8">
            <div className="lg:flex items-center justify-between mb-5">
                {
                    categoryID === -1 ? (
                        <h2 className="font-bold text-2xl text-gray-600">All Service</h2>
                    ) : (
                        <h2 className="font-bold text-2xl text-gray-600">{socialType.filter((socialtype => socialtype.id === categoryID)).map((socialtype) => (socialtype.content))}</h2>
                    )
                }
            </div>
            <div className="grid w-full md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 grid-cols-1 gap-6 justify-center">
                {
                    categoryID === -1 ? (
                        popularServices.map((service) => (
                            <div key={service.id} className="cursor-pointer relative flex flex-col shadow-lg rounded-xl max-w-sm border" onClick={() => ServicePage()}>
                                <span className="hover:text-orange-600 text-red-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 
                                                11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 
                                                19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 
                                                11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 
                                                19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 
                                                3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 
                                                6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 
                                                11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 
                                                9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 
                                                13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 
                                                16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 
                                                2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 
                                                5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 
                                                19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#664481" />
                                    </svg>
                                </span>

                                <Carousel images={images} parentID={service.id} />

                                <div className="bg-white py-4 px-2">
                                    <div className="flex items-center px-2 relative py-8">
                                        <div className="flex items-center justify-center absolute left-0">
                                            <div className="flex items-center justify-center">
                                                <img className="w-10 h-10 rounded-full" src={service.userAvatar} alt="" />
                                            </div>
                                            <div className="flex items-center justify-center text-sm px-2 py-3">
                                                <a href="" className="hover:border-b-2 border-gray-600">{service.userName}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center absolute right-0">
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
                                        <a className="text-sm text-gray-400">
                                            <p className="border-gray-600 hover:text-black">
                                                {service.content}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center py-3">
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center justify-center px-2 py-3">
                                            {service.reviewMark}
                                        </div>
                                        <div className="flex items-center justify-center text-gray-400 py-3">
                                            ({service.reviewCount})
                                        </div>
                                    </div>
                                    <div className="flex items-center px-1 text-gray-400">
                                        From ({service.money})
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        popularServices.filter((service => service.socialTypeID === categoryID)).map((service) => (
                            <div key={service.id} className="cursor-pointer relative flex flex-col shadow-lg rounded-xl max-w-sm border" onClick={() => ServicePage()}>
                                <span className="hover:text-orange-600 text-red-600 absolute z-30 top-2 right-0 mt-2 mr-3">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.96173 18.9109L9.42605 18.3219L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 
                                                11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L15.5026 
                                                19.4999L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 
                                                11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 
                                                19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 
                                                3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 
                                                6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55954 20.3343 10.1168 20.6599C10.6739 20.9854 
                                                11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 
                                                9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 
                                                13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 
                                                16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 
                                                2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 
                                                5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 
                                                19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z" fill="#664481" />
                                    </svg>
                                </span>

                                <Carousel images={images} parentID={service.id} />

                                <div className="bg-white py-4 px-2">
                                    <div className="flex items-center px-2 relative py-8">
                                        <div className="flex items-center justify-center absolute left-0">
                                            <div className="flex items-center justify-center">
                                                <img className="w-10 h-10 rounded-full" src={service.userAvatar} alt="" />
                                            </div>
                                            <div className="flex items-center justify-center text-sm px-2 py-3">
                                                <a href="" className="hover:border-b-2 border-gray-600">{service.userName}</a>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center absolute right-0">
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
                                        <a className="text-sm text-gray-400">
                                            <p className="border-gray-600 hover:text-black">
                                                {service.content}
                                            </p>
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center py-3">
                                            <svg
                                                className="w-4 h-4 text-yellow-300"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 22 20"
                                            >
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <div className="flex items-center justify-center px-2 py-3">
                                            {service.reviewMark}
                                        </div>
                                        <div className="flex items-center justify-center text-gray-400 py-3">
                                            ({service.reviewCount})
                                        </div>
                                    </div>
                                    <div className="flex items-center px-1 text-gray-400">
                                        From ({service.money})
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div >
    );
};

export default Marketplace;