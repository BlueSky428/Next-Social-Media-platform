import { FC } from "react";

const LastSection: FC = () => {
    return (
        <div className="w-full py-2 bg-white">
            <div className="mx-auto lg:w-full max-w-screen-xl px-4 w-full flex justify-center flex-col bg-gray-100">
                <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center py-4">
                    <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full flex flex-col justify-center px-2 py-2">
                        <div className="text-2xl text-[#581c87] py-2 font-bold">3 million</div>
                        <div className="text-sm">rated freelancers, covering 8,766 skills</div>
                    </div>
                    <div className="lg:w-[40%] md:w-[40%] sm:w-full w-full flex flex-col justify-center px-2  py-2">
                        <div className="text-2xl text-[#581c87] py-2 font-bold">$150 million</div>
                        <div className="text-sm">earned by freelancers, with top freelancers earning over $7,000/m</div>
                    </div>
                    <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full flex flex-col justify-center px-2  py-2">
                        <div className="text-2xl text-[#581c87] py-2 font-bold">10 minutes</div>
                        <div className="text-sm">to task a freelancer, with 90% of projects completed in 7 days</div>
                    </div>
                </div>
                <div className="w-full lg:flex-row md:flex-row sm:flex-col flex-col flex items-center items-center mt-8">
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full h-80 flex flex-col justify-center bg-[#581c87] py-4 px-4 lg:rounded-l-lg">
                        <span className="font-bold text-sm text-white">Grow your business</span>
                        <span className="font-bold lg:text-4xl md:text-4xl sm:text-2xl text-xl text-white py-2">Trusted globally by over 1 million businesses, small to large</span>
                        <button type="button" className="lg:w-[35%] md:w-[45%] sm:w-[30%] w-full flex justify-center items-center px-6 text-[#581c87] rounded-lg py-3 bg-white lg:mt-12 md:mt-4 sm:mt-4 mt-4">Start For Free</button>
                    </div>
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full h-full flex flex-col justify-center lg:py-4 md:py-4 md:py-0 py-0 lg:rounded-l-lg flex items-center objuect-over">
                        <img src="/image/img/1.jpg" className="w-full h-80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LastSection;