"use client"
import { FC, useRef } from "react";

type CheckProps = {
    setSelectCheck?: any,
    setPayCheck?: any,
    setMediaCheck?: any,
    SelectCheck?: boolean,
    MediaCheck?: boolean
    setNextStep?: any,
    NextStep?: string,
    setInstagramUsername?: any
    setSelectPackage?: any
}

const PaymentContent: FC<CheckProps> = ({ setSelectCheck, setPayCheck, SelectCheck, setNextStep, NextStep, setMediaCheck, MediaCheck, setInstagramUsername, setSelectPackage }) => {

    const username = useRef<HTMLInputElement>(null);
    const packageName = useRef<HTMLSelectElement>(null);

    const handelContifuButton = () => {
        if (SelectCheck) setMediaCheck(true);
        else if (MediaCheck) setPayCheck(true);
        else setSelectCheck(true);

        if (NextStep === "Select") {
            if (username.current?.value !== "") {
                setInstagramUsername(username.current?.value);
                setSelectPackage(packageName.current?.value);
                setNextStep("Media");
            } else {
                alert("Error" + ":" + "Input Instagram Username!!!")
            }
        }
        else if (NextStep === "Media") setNextStep("Pay");
        else setNextStep("Select");
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            if (username.current?.value !== "") {
                setInstagramUsername(username.current?.value);
                setSelectPackage(packageName.current?.value);
                setNextStep("Media");
            } else {
                alert("Error" + ":" + "Input Instagram Username!!!")
            }
        }
    };

    return (
        <div className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-full lg:flex flex justify-center flex-col items-center border
                                lg:mt-4 md:mt-4 sm:mt-4 rounded-lg">
            <div className="w-full bg-white rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-xs mb-2">Instagram UserName</label>
                        <input type="text" id="name" name="name" ref={username} onKeyDown={handleKeyDown}
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-gray-700 text-xs mb-2">Product package</label>
                        <select ref={packageName} name="package-select" className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 text-xs" required>
                            <option disabled value="">Select package...</option>
                            <option value="50 followers / €4.99">50 followers / €1.39</option>
                            <option value="100 followers / €4.99">100 followers / €2.49</option>
                            <option value="250 followers / €4.99">250 followers / €4.49</option>
                            <option value="500 followers / €6.99">500 followers / €6.99</option>
                            <option value="750 followers / €9.99">750 followers / €9.99</option>
                            <option value="1000 followers / €12.99">1000 followers / €12.99</option>
                            <option value="1500 followers / €18.99">1500 followers / €18.99</option>
                            <option value="2000 followers / €24.49">2000 followers / €24.49</option>
                            <option value="2500 followers / €29.99">2500 followers / €29.99</option>
                            <option value="5000 followers / €39.99">5000 followers / €39.99</option>
                            <option value="7500 followers / €49.99">7500 followers / €49.99</option>
                            <option value="10000 followers / €60.00">10000 followers / €60.00</option>
                        </select>
                    </div>
                    <div>
                        <button type="button" className="bg-[#664481] text-white px-4 py-2 rounded-lg hover:opacity-80 text-xs" onClick={handelContifuButton}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentContent;