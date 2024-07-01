// "use client"
// import { FC } from "react";
// import Image from 'next/image';

// const UserService: FC = () => {
//     return (
//         <div className="mx-auto max-w-screen-xl lg:px-4 md:px-4 sm:px-0 px-0 w-full flex flex-col justify-center lg:mt-8 md:mt-14 sm:mt-20 mt-28">
//             <h1 className="text-xl font-bold">See my Services</h1>
//             <div className="w-full flex justify-center items-center mt-4 lg:flex-row md:flex-row sm:flex-col flex-col">
//                 <div className="lg:w-[30%] md:w-[40%] sm:w-full w-full flex justify-center items-center border p-3 rounded-lg shadow-lg h-[26rem]">
//                     <div className="max-w-sm mx-auto bg-white overflow-hidden">
//                         <div className="relative">
//                             <img
//                                 src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/152407082/original/60502a4d067ad5f019ebd2b5f89de6edd7cf3ded.png"
//                                 alt="Instagram promotion"
//                                 width={400}
//                                 height={300}
//                             />
//                         </div>
//                         <div className="p-4 flex flex-col justify-center">
//                             <div className="flex items-center gap-2">
//                                 <h3 className="lg:text-sm md:text-sm sm:text-xs text-xs font-semibold">Organic Social Promotions</h3>
//                                 <span className="text-xs px-2 py-1 bg-[#581c87] text-white rounded">Most Relevant</span>
//                             </div>
//                             <p className="mt-2 text-gray-600 lg:text-sm md:text-sm sm:text-xs text-xs">I will increase Instagram followers and grow organic engagement</p>
//                             <div className="mt-3 flex items-center">
//                                 <div className="text-yellow-500">
//                                     <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                         <path d="M12 .587l3.668 7.571L24 9.748l-6 5.828L19.336 24 12 19.771 4.664 24l1.336-8.424L0 9.748l8.332-1.59z" />
//                                     </svg>
//                                 </div>
//                                 <span className="text-gray-600 ml-2 lg:text-sm md:text-sm sm:text-xs text-xs">4.9 (66)</span>
//                             </div>
//                             <div className="mt-3 flex justify-between items-center">
//                                 <span className="lg:text-sm md:text-sm sm:text-xs text-xs font-semibold">From €215 / project</span>
//                                 <button className="px-2 py-1 border text-xs text-white bg-[#581c87] font-semibold rounded">More details</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-[70%] h-[26rem] flex justify-center items-center px-4 lg:flex-row md:flex-row sm:flex-col flex-col">
//                     <div className="grid lg:grid-rows-2 md:grid-rows-3 sm:grid-rows-4 grid-rows-4 grid-flow-col gap-4 w-full h-full">
//                         <div className="flex justify-center items-center flex-col border py-2 shadow-lg lg:mt-0 md:mt-0 sm:mt-4">
//                             <div className="flex w-full lg:h-[60%] md:h-[50%] sm:h-auto h-auto flex items-center">
//                                 <div className="flex w-[45%] h-full flex justify-center items-center px-2">
//                                     <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png" className="w-full h-full" alt="" />
//                                 </div>
//                                 <div className="flex flex-col w-[55%] justify-center px-2">
//                                     <span className="font-bold text-xs">Analytics & Tracking</span>
//                                     <span className="text-xs py-1">I will remove bot and clean up instagram ghost followers</span>
//                                     <div className="flex items-center">
//                                         <div className="text-yellow-500">
//                                             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                                 <path d="M12 .587l3.668 7.571L24 9.748l-6 5.828L19.336 24 12 19.771 4.664 24l1.336-8.424L0 9.748l8.332-1.59z" />
//                                             </svg>
//                                         </div>
//                                         <span className="text-gray-600 ml-2 lg:text-sm md:text-sm sm:text-xs text-xs">4.9 (66)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full h-[40%] flex items-center justify-between px-2">
//                                 <div className="flex flex-col justify-center">
//                                     <span className="text-sm font-bold">From</span>
//                                     <span className="text-sm">€34 / project</span>
//                                 </div>
//                                 <div className="flex flex-col justify-center p-2 border cursor-pointer rounded">
//                                     <a className="text-sm font-bold">More details</a>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center flex-col border py-2 shadow-lg">
//                             <div className="flex w-full h-[60%] flex items-center">
//                                 <div className="flex w-[45%] h-full flex justify-center items-center px-2">
//                                     <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png" className="w-full h-full" alt="" />
//                                 </div>
//                                 <div className="flex flex-col w-[55%] justify-center px-2">
//                                     <span className="font-bold text-xs">Analytics & Tracking</span>
//                                     <span className="text-xs py-1">I will remove bot and clean up instagram ghost followers</span>
//                                     <div className="flex items-center">
//                                         <div className="text-yellow-500">
//                                             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                                 <path d="M12 .587l3.668 7.571L24 9.748l-6 5.828L19.336 24 12 19.771 4.664 24l1.336-8.424L0 9.748l8.332-1.59z" />
//                                             </svg>
//                                         </div>
//                                         <span className="text-gray-600 ml-2 lg:text-sm md:text-sm sm:text-xs text-xs">4.9 (66)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full h-[40%] flex items-center justify-between px-2">
//                                 <div className="flex flex-col justify-center">
//                                     <span className="text-sm font-bold">From</span>
//                                     <span className="text-sm">€34 / project</span>
//                                 </div>
//                                 <div className="flex flex-col justify-center p-2 border cursor-pointer rounded">
//                                     <a className="text-sm font-bold">More details</a>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="flex justify-center items-center flex-col border py-2 shadow-lg">
//                             <div className="flex w-full h-[60%] flex items-center">
//                                 <div className="flex w-[45%] h-full flex justify-center items-center px-2">
//                                     <img src="https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png" className="w-full h-full" alt="" />
//                                 </div>
//                                 <div className="flex flex-col w-[55%] justify-center px-2">
//                                     <span className="font-bold text-xs">Analytics & Tracking</span>
//                                     <span className="text-xs py-1">I will remove bot and clean up instagram ghost followers</span>
//                                     <div className="flex items-center">
//                                         <div className="text-yellow-500">
//                                             <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
//                                                 <path d="M12 .587l3.668 7.571L24 9.748l-6 5.828L19.336 24 12 19.771 4.664 24l1.336-8.424L0 9.748l8.332-1.59z" />
//                                             </svg>
//                                         </div>
//                                         <span className="text-gray-600 ml-2 lg:text-sm md:text-sm sm:text-xs text-xs">4.9 (66)</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="w-full h-[40%] flex items-center justify-between px-2">
//                                 <div className="flex flex-col justify-center">
//                                     <span className="text-sm font-bold">From</span>
//                                     <span className="text-sm">€34 / project</span>
//                                 </div>
//                                 <div className="flex flex-col justify-center p-2 border cursor-pointer rounded">
//                                     <a className="text-sm font-bold">More details</a>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default UserService;
// pages/index.tsx
import Head from 'next/head';
import ServiceCard from './serviceCard';
// import ServiceCard from '../components/ServiceCard';

const services = [
    {
        title: 'Organic Social Promotions',
        description: 'I will increase instagram followers and grow organic engagement',
        price: 'From €215 / project',
        rating: 4.9,
        reviews: 66,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png'
    },
    {
        title: 'Analytics & Tracking',
        description: 'I will remove bot and clean up instagram ghost followers',
        price: 'From €113 / project',
        rating: 5.0,
        reviews: 407,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/155398405/original/3e4c7fdbfa7210e2f8a4d6612ae9d83f2e23bcf9.png'
    },
    {
        title: 'Analytics & Tracking',
        description: 'I will unfollow on instagram and normalize number of your following',
        price: 'From €98 / project',
        rating: 5.0,
        reviews: 17,
        imageUrl: 'https://fiverr-res.cloudinary.com/t_main1,q_auto,f_auto/gigs/206773320/original/801f9d82824ea2ccdf13b78729c479376d7e38a5.png'
    },
    {
        title: 'Digital Marketing',
        description: 'I will make a list of your instagram ghost and fake followers so you can remove them',
        price: 'From €34 / project',
        rating: 5.0,
        reviews: 10,
        imageUrl: 'https://fiverr-res.cloudinary.com/video/upload/so_5.836217,t_gig_cards_web/seokwuld9e8uba3d5ta3.png'
    },
];

export default function Home() {
    return (
        <div className='bg-white'>
            <Head>
                <title>My Services</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="py-10 bg-gray-100 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold mb-8">See my services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                description={service.description}
                                price={service.price}
                                rating={service.rating}
                                reviews={service.reviews}
                                imageUrl={service.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
