import { FC, useState } from "react";

const Payment: FC = () => {

    const [price, setPrice] = useState<string>("€2.49")

    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg">
            <div className="w-full bg-white rounded-lg px-8 mx-auto my-8 max-w-2xl">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col justify-center">
                        <h1 className="text-2xl font-bold py-1">Security Payment</h1>
                        <span className="text-xs py-1">Transaction details are always encrypted in transit and are stored securely in compliance with PCI DDS standard.</span>
                    </div>
                    <div className="mx-auto w-full max-w-[550px] bg-white mt-2">
                        <form>
                            <div className="mb-5">
                                <button
                                    className="hover:shadow-form w-full flex justify-center items-center rounded-md bg-black py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Buy with <pre> </pre> <img src="/image/icon/apple.png" className="w-4" /> pay
                                </button>
                            </div>
                            <div className="my-8 border-b text-center">
                                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                    Or
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" className="mb-3 block text-sm font-medium text-[#07074D]">
                                    Your email for receipt
                                </label>
                                <input type="text" name="name" id="name" placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="gender" className="block text-gray-700 text-sm mb-2">Your country of residence</label>
                                <select id="package-select" name="package-select" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" required>
                                    <option disabled value="">Select package...</option>
                                    <option value="250">250 followers / €4.99</option>
                                    <option value="500">500 followers / €6.99</option>
                                    <option value="750">750 followers / €9.99</option>
                                    <option value="100">100 followers / €2.99</option>
                                    <option value="1000">1000 followers / €12.99</option>
                                    <option value="1500">1500 followers / €18.99</option>
                                    <option value="2000">2000 followers / €24.49</option>
                                    <option value="2500">2500 followers / €29.99</option>
                                    <option value="5000">5000 followers / €39.99</option>
                                    <option value="7500">7500 followers / €49.99</option>
                                    <option value="10000">10000 followers / €60.00</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-sm font-medium text-[#07074D]">
                                    Postal/Zip code
                                </label>
                                <input type="email" name="email" id="email" placeholder="90028"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-sm font-medium text-[#07074D]">
                                    Cardholer name
                                </label>
                                <input type="text" name="email" id="email" placeholder="Jone Doe"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="mb-3 block text-sm font-medium text-[#07074D]">
                                    Card number
                                </label>
                                <input type="number" name="email" id="email" placeholder="•••• •••• •••• ••••"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Date
                                        </label>
                                        <input type="date" name="date" id="date"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                            CVV/CVC
                                        </label>
                                        <input type="number" name="time" id="time" placeholder="•••"
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Remember this card
                                    </span>
                                </label>
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form w-full flex justify-center items-center rounded-md bg-[#581c87] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Pay {price}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;