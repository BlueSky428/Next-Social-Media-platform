import { FC, useEffect } from "react";

type PreviousProps = {
    setPrevious?: any,
}

const AddCart: FC<PreviousProps> = ({ setPrevious }) => {

    const PreviousClick = () => {
        setPrevious(false);
    }

    return (
        <>
            <div className="w-full flex justify-center items-center mt-4">
                <div onClick={PreviousClick} className="cursor-pointer relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-[#581C87] rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-[#581C87] group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-[#581C87] transition-all duration-300 transform group-hover:translate-x-full ease">To previous step</span>
                    <span className="relative invisible">To previous step</span>
                </div>
            </div>
            <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 mt-4 rounded-lg" style={{ "border": "1px solid #581c87" }}>

                <div className="lg:w-full md:w-full sm:w-full w-full lg:px-1 lg:py-2 sm:py-1 lg:px-2 md:px-2 sm:px-2 px-2 md:py-2 py-2 flex justify-center flex-col">
                    <h1 className="text-base font-bold lg:px-2 md:px-2 sm:px-2 px-2">🔥 Get more followers at 14% off!</h1>
                    <h1 className="text-xs lg:px-2 md:px-2 sm:px-2 px-2 lg:py-2 md:py-2 sm:py-2 py-2">Add 50 more followers to your order for only €1.29. Unique offer with 14% discount!</h1>
                    <button type="button" className="bg-[#581c87] text-white px-4 py-2 rounded-lg hover:opacity-80 text-xs" >Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default AddCart;