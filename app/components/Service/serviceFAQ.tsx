"use client"
import { FC, useState } from "react";

interface AccordionItemProps {
    id: number;
    question: string;
    answer: string;
}

const ServiceFAQ: FC = () => {
    const accordionData: AccordionItemProps[] = [
        {
            id: 1,
            question: 'When will my order arrive?',
            answer: 'Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional details can be found in the order confirmation.',
        },
        {
            id: 2,
            question: 'How do I track my order?',
            answer: 'Once shipped, you’ll get a confirmation email that includes a tracking number and additional information regarding tracking your order.',
        },
        {
            id: 3,
            question: 'What’s your return policy?',
            answer: 'We allow the return of all items within 30 days of your original order’s date. If you’re interested in returning your items, send us an email with your order number and we’ll ship a return label.',
        },
        {
            id: 4,
            question: 'How do I make changes to an existing order?',
            answer: 'Changes to an existing order can be made as long as the order is still in “processing” status. Please contact our team via email and we’ll make sure to apply the needed changes. If your order has already been shipped, we cannot apply any changes to it. If you are unhappy with your order when it arrives, please contact us for any changes you may require.',
        },
        {
            id: 5,
            question: 'What shipping options do you have?',
            answer: 'For USA domestic orders we offer FedEx and USPS shipping.',
        },
        {
            id: 6,
            question: 'What payment methods do you accept?',
            answer: 'Any method of payments acceptable by you. For example: We accept MasterCard, Visa, American Express, PayPal, JCB Discover, Gift Cards, etc.',
        },
    ];

    const AccordionItem: React.FC<AccordionItemProps> = ({ id, question, answer }) => {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [bgColor, setBgColor] = useState<boolean>(false);

        const handleClick = () => {
            setIsOpen(!isOpen);
            if (bgColor) setBgColor(false);
            else setBgColor(true);
        };

        const handleRotate = () => (isOpen ? 'rotate-180' : '');

        const handleToggle = () => (isOpen ? 'max-h-screen' : 'max-h-0');

        return (
            <li className={`my-2 shadow-sm transition duration-400 ${bgColor ? "bg-[#F1FCFA]" : "bg-white"}`}>
                <h2
                    onClick={handleClick}
                    className="flex flex-row justify-between items-center font-semibold p-3 cursor-pointer"
                >
                    <span>{question}</span>
                    <svg
                        className={`fill-current text-purple-700 h-6 w-6 transform transition-transform duration-500 ${handleRotate()}`}
                        viewBox="0 0 20 20"
                    >
                        <path d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10"></path>
                    </svg>
                </h2>
                <div
                    className={`overflow-hidden duration-350 transition-all bg-[#F1FCFA] ${handleToggle()}`}
                >
                    <p className="p-3 text-gray-900">{answer}</p>
                </div>
            </li>
        );
    };

    return (
        <main className="w-full bg-white lg:px-24">
            <div className="relative lg:w-[65%] md:w-[70%] overflow-hidden rounded-md p-2 sm:p-4 border-t border-b">
                <div className="lg:w-full sm:w-full md:w-full my-1 w-full">
                    <h2 className="text-xl font-semibold text-vnet-blue font-bold w-full">Frequently Asked Questions</h2>
                    <ul className="flex flex-col py-6">
                        {accordionData.map((item) => (
                            <AccordionItem key={item.id} {...item} />
                        ))}
                    </ul>
                </div>
            </div>
        </main>

    )
}

export default ServiceFAQ;