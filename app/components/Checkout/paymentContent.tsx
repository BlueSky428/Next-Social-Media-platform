import { FC, useEffect, useState } from "react";

type CheckProps = {
    setSelectCheck?: any,
    setPayCheck?: any,
    SelectCheck?: boolean,
    setNextStep?: any,
    NextStep?: boolean
}

const PaymentContent: FC<CheckProps> = ({ setSelectCheck, setPayCheck, SelectCheck, setNextStep, NextStep }) => {

    const handelContifuButton = () => {
        if (SelectCheck) setPayCheck(true);
        else setSelectCheck(true);

        if (NextStep === false) setNextStep(true);
        else setNextStep(false);
    }

    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg">
            <div className="w-full bg-white rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-xs mb-2">Instagram UserName</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 text-xs mb-2">Product package</label>
                        <select id="package-select" name="package-select" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 text-xs" required>
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
                    <div>
                        <button type="button" className="bg-[#581c87] text-white px-4 py-2 rounded-lg hover:opacity-80 text-xs" onClick={handelContifuButton}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentContent;