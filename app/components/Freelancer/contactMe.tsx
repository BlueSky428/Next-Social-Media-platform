import { faClose, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useState, ChangeEvent } from "react";
import EmojiPicker from 'emoji-picker-react';

type ConatactMeProps = {
    isOpen?: boolean
    onClose?: any
}

const ContactMe: FC<ConatactMeProps> = ({ isOpen, onClose }) => {

    const [text, setText] = useState<string>("");
    const [isEmojiOpen, setEmojiOpen] = useState<boolean>(false)

    const onChangeTextLength = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    }

    return (
        <div className={`${isOpen ? "fixed left-0 top-0 flex flex-col h-screen z-50 w-full justify-center items-end bg-black bg-opacity-50" : "hidden"}`}>
            <div className="lg:w-[25%] md:w-[25%] sm:w-[50%] w-full h-full flex flex-col items-center bg-white animate-slide-right">
                <div className="w-full h-[15%] flex items-center p-4 mt-4 relative">
                    <div className="flex items-center gap-4">
                        <div className="flex relative">
                            <img className="w-20 h-20 shadow-2xl rounded-full" src="https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/46a596258a27f2b484867a1abcf3e20f-1658346767965/30275ed2-16e7-4371-b0c4-e7a734a92755.png" alt="" />
                            <div className="absolute bottom-0 right-1">
                                <span className="relative flex h-4 w-4">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-2">
                            <span className="text-xl font-bold">Vitalii D.</span>
                            <span>Active - Avg. response time: <strong>1 Hour</strong></span>
                        </div>
                    </div>
                    <FontAwesomeIcon icon={faClose} className="absolute right-4 w-8 h-8 top-0" onClick={onClose} />
                </div>
                <div className="w-full h-[85%] border flex flex-col justify-center p-4 mt-8">
                    <span className="text-xl font-bold text-black">Your Message</span>
                    <div className="w-full flex flex-col justify-center items-center mt-4 border realtive border-[#664481] rounded-lg">
                        <div className="w-full flex justify-center items-center">
                            <textarea id="message" rows={18} onChange={onChangeTextLength}
                                className="block p-2.5 w-full text-xl text-gray-900 bg-gray-50 
                                        rounded-lg border border-gray-600  outline-none
                                          dark:placeholder-gray-400 border-none
                                         dark:focus:border-[#664481]" placeholder="Send Vitalii D details about your business and project, like your timeline and budget">
                            </textarea>
                        </div>
                        <div className="w-full flex items-center px-4 relative">
                            <div className="w-12 h-12 flex justify-center items-center text-3xl cursor-pointer hover:bg-gray-200 rounded-full">
                                <span onClick={() => setEmojiOpen(!isEmojiOpen)}>😀</span>
                                <div className={`${isEmojiOpen ? "w-auto absolute bottom-12 right-28 z-50 text-sm shadow-2xl" : "hidden"}`}>
                                    {/* <EmojiPicker /> */}
                                </div>
                            </div>
                            <div className="w-12 h-12 flex justify-center items-center text-3xl cursor-pointer ml-4">
                                <input type="file" name="file" id="file" className="sr-only" />
                                <label htmlFor="file"
                                    className="relative flex items-center justify-center rounded-full hover:bg-gray-200 text-center py-2 w-full h-full">
                                    <FontAwesomeIcon icon={faUpload} color="gray" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-between items-center mt-2">
                        <span className="text-gray-500">Use at least 40 characters</span>
                        <span className="text-gray-500">{text.length} / 2000</span>
                    </div>
                    <div className={`w-full flex justify-center items-center mt-4 py-3 bg-[#664481] transition duration-300 ${text.length < 40 ? "opacity-80" : "opacity-100"}`}>
                        <button className="text-white font-bold text-xl">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;