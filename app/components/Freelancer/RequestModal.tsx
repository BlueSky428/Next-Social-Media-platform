"use client"
import { orderDurationData } from "@/app/data/Freelancer/freelancerData";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, FC, useRef, useState } from "react";

type ModalProps = {
    isOpen?: boolean
    onClose?: any
}

type OrderDuration = {
    id: number,
    content: string,
    active: boolean
}

const RequestModal: FC<ModalProps> = ({ isOpen, onClose }) => {

    const [orderDuration, setOrderDuration] = useState<OrderDuration[]>(orderDurationData)

    const [isInput, setIsInput] = useState<boolean>(false);
    const inputRef = useRef<HTMLDivElement>(null);
    const [inputValue, setInputValue] = useState<string>("");
    const [budgetType, setBudgetType] = useState<string>("SEK");
    const [budget, setBudget] = useState<string>("");

    const handleActiveSet = (id: number) => {
        const temp = orderDuration.map((item) =>
            item.id === id
                ? { ...item, active: true }
                : { ...item, active: false }
        );
        if (id === 3) setIsInput(true);
        else setIsInput(false)
        setOrderDuration(temp);
    }

    const handleInputSet = () => {
        if (isInput) setIsInput(false);

        if (inputValue !== "") {
            const temp = orderDuration.map((item) =>
                item.id === 3
                    ? { ...item, content: inputValue + " Days" }
                    : { ...item, content: item.content }
            );
            setOrderDuration(temp);
        }
    }

    const onChangeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(event.target.value)) || event.target.value === '') {
            setInputValue(event.target.value);
        }
    }

    const onChangeBudget = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isNaN(Number(event.target.value)) || event.target.value === '') {
            setBudget(event.target.value)
        }
    }

    const handleChangeBudgetType = () => {
        if (budgetType === "SEK") {
            setBudgetType("$");
        } else {
            setBudgetType("SEK")
        }
    }

    return (
        <div className={`${isOpen ? "fixed z-50 inset-0 flex items-center justify-center animate-slide-in" : "hidden"}`}>
            <div className="absolute inset-0"></div>
            <div className="relative bg-white rounded-lg overflow-hidden shadow-xl max-w-screen-sm w-full m-4 transition-transform transform-gpu">
                <div className="px-6 py-4 bg-[#664481]">
                    <h3 className="text-lg leading-6 font-medium text-white"> Request A Quote </h3>
                    <div className="w-6 h-6 rounded-full bg-white absolute top-4 right-2 flex justify-center items-center cursor-pointer" onClick={onClose}>
                        <FontAwesomeIcon icon={faClose} color="#591c87" />
                    </div>
                </div>
                <div className="prose max-w-screen-md p-6 overflow-y-auto" style={{ maxHeight: '70vh', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '0.375rem', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)' }}>
                    <div className="flex ustify-center">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#664481] text-white rounded-full flex items-center justify-center">
                                H
                            </div>
                        </div>
                        <div className="px-4">
                            <div className="font-bold lg:text-sm md:text-sm sm:text-xs text-xs">Brian And Dee</div>
                            <div className="text-gray-600 lg:text-sm md:text-sm sm:text-xs text-xs">Hi, please provide your request details below and I'll get back to you.</div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-8">
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-bold">Describe the service you're looking to pruchase - please be as detailed as possible:</span>
                        </div>
                        <div className="flex">
                            <textarea name="feedback" id="feedback" rows={4}
                                cols={80}
                                className="mt-4 w-full border px-3 py-3 bg-gray-100 placeholder-black text-gray-800 rounded-lg text-sm focus:outline-none"
                                placeholder="I'm looking for..." required>
                            </textarea>
                        </div>
                        <div className="flex">
                            <label htmlFor="dropzone-file" className="flex items-center justify-center w-auto px-2 h-auto border-2 border-gray-200 cursor-pointer bg-gray-50 mt-2">
                                <div className="flex items-center justify-center py-1">
                                    <p className="text-xs text-gray-900 font-bold">Attach Files</p>
                                    <svg className="w-6 h-6 text-gray-400 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                                        </path>
                                    </svg>
                                </div>
                                <input id="dropzone-file" type="file" className="hidden" />
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-8 w-full">
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-bold">Once you place your order, when would you like your service delivered?</span>
                        </div>
                        <div className="lg:px-4 md:px-4 sm:px-0 px-0 w-full mt-2 flex items-center justify-center lg:flex-row md:flex-row sm:flex-row flex-col">
                            {
                                orderDuration.map((items) => (
                                    <div key={items.id} className="lg:w-1/4 md:w-1/4 sm:w-1/4 w-full relative">
                                        <div className={`w-full h-10 flex justify-center items-center border cursor-pointer text-sm hover:bg-gray-200 transition duration-300 ${items.active ? "bg-gray-200" : "bg-white"}`} onClick={() => handleActiveSet(items.id)}>{items.content}</div>
                                        <div ref={inputRef} className={`${items.id === 3 && isInput ? "w-full flex border text-sm absolute right-0 top-0 bottom-0 border" : "hidden"}`}>
                                            <input type="text" className="w-full h-full focus:outline-none px-2 border-none outline-none" value={inputValue} placeholder="# Day..." onChange={onChangeInputValue} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-8 w-full">
                        <div className="flex flex-col justify-center">
                            <span className="text-sm font-bold">What is your budget for this service?</span>
                        </div>
                        <div className="w-full mt-4">
                            <div className="lg:w-[25%] md:w-[25%] sm:w-[25%] w-[50%] flex items-center h-10 border">
                                <div className="w-[30%] h-full flex justify-center items-center">
                                    <span className="text-xs text-[#664481]">{budgetType}</span>
                                </div>
                                <div className="w-[70%] h-full flex items-center">
                                    <input type="text" className="w-full h-full focus:outline-none border-none text-sm outline-none" value={budget} onChange={onChangeBudget} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center mt-4 w-full">
                        <div className="w-auto px-1">
                            <span className="text-xs text-[#664481] cursor-pointer hover:border-b border-[#664481]" onClick={handleChangeBudgetType}>{budgetType === "SEK" ? "Convert to USD" : "Convert to SEK"}</span>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 flex justify-end p-4 gap-4 flex-row">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 sm:w-auto sm:text-sm"
                        onClick={onClose}
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RequestModal;