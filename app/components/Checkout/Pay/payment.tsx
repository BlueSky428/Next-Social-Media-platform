import { FC, useState } from "react";
import { getData } from "country-list";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey, faKeyboard, faLock, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faKeycdn } from "@fortawesome/free-brands-svg-icons";

type Country = {
    name: string,
    code: string
}

const Payment: FC = () => {

    const [price, setPrice] = useState<string>("€2.49");
    const [value, setValue] = useState<string>('');
    const [isShowCountry, setIsShowCountry] = useState<boolean>(false);
    const [date, setDate] = useState<string>("");
    const [cardNumber, setCardNumber] = useState<string>("");

    const countries: Country[] = getData();
    const [countryName, setCountryName] = useState<string>("Andorra")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue)
        }
    };

    const handleCardNumber = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const inputValue = event.target.value;
        if (/^\d*$/.test(inputValue)) {
            setCardNumber(inputValue);
        }
    }

    const handleSetCountryName = (countryName: string) => {
        setCountryName(countryName);
        setIsShowCountry(false);
    }

    const [selectedDate, setSelectedDate] = useState<string>('');

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedDate(event.target.value);
    };

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
                                    Buy with Apple pay
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
                                <div className="w-full flex items-center flex-col relative">
                                    <div onClick={() => setIsShowCountry(true)} className="cursor-pointer w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">{countryName}</div>
                                    <div className={`${isShowCountry ? "flex flex-col w-full h-96 overflow-y-scroll border" : "hidden"}`}>
                                        {
                                            countries.map((country) => (
                                                <div key={country.code} onClick={() => handleSetCountryName(country.name)} className="w-full flex items-center px-6 py-1 cursor-pointer hover:bg-blue-300">{country.name}</div>
                                            ))
                                        }
                                    </div>
                                </div>
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
                                    Card number <FontAwesomeIcon icon={faLock} color="green" className="px-1" />
                                </label>
                                <input type="text" placeholder="•••• •••• •••• ••••" onChange={handleCardNumber} value={cardNumber}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                            </div>
                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
                                            Date <FontAwesomeIcon icon={faLock} color="green" className="px-1" />
                                        </label>
                                        <input
                                            type="month"
                                            id="month-picker"
                                            name="month-picker"
                                            placeholder="MM/YY"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
                                            CVV/CVC <FontAwesomeIcon icon={faLock} color="green" className="px-1" />
                                        </label>
                                        <input type="text" name="time" id="time" placeholder="•••" value={value} onChange={handleChange}
                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-5">
                                <label className="block text-gray-500 font-bold">
                                    <input className="mr-2 leading-tight" type="checkbox" />
                                    <span className="text-sm">
                                        Remember this card <FontAwesomeIcon icon={faQuestion} className="px-1" />
                                    </span>
                                </label>
                            </div>
                            <div>
                                <button
                                    className="hover:shadow-form w-full flex justify-center items-center rounded-md bg-[#664481] py-3 px-8 text-center text-base font-semibold text-white outline-none">
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