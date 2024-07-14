"use client"
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

type SaveModalProps = {
    isOpen?: boolean
    onClose?: any
}

const SaveModal: FC<SaveModalProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`${isOpen ? "fixed left-0 top-0 flex flex-col h-screen z-50 w-full justify-center bg-black bg-opacity-50" : "hidden"}`}>
            <div x-show="showModal" className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center animate-slide-in lg:w-auto md:w-auto sm:w-full w-full px-1">
                <div className="lg:w-[30%] md:w-[30%] sm:w-full w-full bg-white flex flex-col justify-center p-4 rounded-lg">
                    <div className="w-full text-2xl font-bold relative">
                        <span>Create new list</span>
                        <FontAwesomeIcon icon={faClose} className="w-6 h-6 absolute right-0 cursor-pointer" color="black" onClick={onClose} />
                    </div>
                    <div className="w-full flex flex-col justify-center mt-6">
                        <span className="font-bodl text-base font-bold">List name</span>
                        <input type="email" x-model="email" className="mt-2 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-500"
                            placeholder="For example: Voice over options"></input>
                        <div className="w-full flex items-center gap-2 mt-4">
                            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                            </div>
                            <span className="font-bold text-base text-black">Set as a private list</span>
                        </div>
                    </div>
                    <div className="w-full flex items-center justify-end mt-6 lg:flex-row md:flex-row sm:flex-col flex-col space-y-1">
                        <button onClick={onClose} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"> Cancel </button>
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#664481] text-base font-medium text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"> Create </button>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default SaveModal;