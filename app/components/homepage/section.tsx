import { FC } from "react";

const Section: FC = () => {
    return (
        <div className="w-full py-2 bg-white">
            <div className="mx-auto lg:w-full max-w-screen-xl px-4 w-full justify-center bg-white">
                <div id="details" className="pt-12 pb-16 lg:pt-16">
                    <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-12 lg:gap-x-12">
                        <div className="lg:col-span-5">
                            <div className="lg:mb-16 md:mb-12 sm:mb-8 mb-4 lg:mb-0 xl:mt-16">
                                <h2 className="mb-6 lg:text-2xl font-bold">Results driven ground breaking technology</h2>
                                <p className="mb-4">Based on our team's extensive experience in developing line of business applications
                                    and constructive customer feedback we reached a new level of revenue.</p>
                                <p className="mb-4">We enjoy helping small and medium sized tech businesses take a shot at established
                                    Fortune 500 companies</p>
                            </div>
                            <button type="button" className="flex justify-center items-center px-6 text-white rounded-lg py-3 bg-[#664481] lg:mt-12 md:mt-4 sm:mt-4 mt-4">Start For Free</button>
                        </div>
                        <div className="lg:col-span-7 md:mt-8 sm:mt-8 mt-4">
                            <div className="xl:ml-14">
                                <img className="inline" src="image/img/details-1.jpg" alt="alternative" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;