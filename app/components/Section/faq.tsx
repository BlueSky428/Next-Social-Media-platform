"use client"
import { FC, useState } from 'react';

const FAQ: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            ),
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            )
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            )
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            )
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            )
        },
        {
            question: 'Lorem ipsum dolor sit amet?',
            answer: (
                <>
                    <p className="text-gray-600 mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed nulla porttitor, porttitor arcu ut, dictum augue. Vestibulum consequat in urna in bibendum. Praesent sed magna risus. Nunc elementum in mauris ac pharetra. Ut blandit ut lorem sit amet rutrum. Vivamus ut purus fringilla, euismod nibh ut, blandit.
                    </p>
                    <p className="text-gray-600">
                        Nunc ac efficitur sapien. Mauris eu lectus odio. Mauris ac erat tortor. Nulla consectetur commodo justo. Pellentesque eget ornare quam. Pellentesque sodales metus non semper luctus. Praesent non ornare tellus, eget vulputate tellus. Donec luctus non sapien sed semper.
                    </p>
                </>
            )
        },
    ];

    return (
        <div className="container mx-auto px-6 md:px-12 xl:px-32 flex justify-cetner flex-col items-center py-12">
            <div className="mb-4 text-center">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl text-black">Frequently Asked Questions</h2>
            </div>
            <span className="w-3/4 flex text-center text-gray-700 py-1">
                Dive into our comprehensive FAQ to ease your concerns. Remember, over 10,000 daily customers trust us as the best site to deliver real Instagram likes.
            </span>
            <div className="bg-gray mx-auto lg:w-3/4 md:w-3/4 w-full py-5">
                {faqs.map((faq, index) => (
                    <div className="mb-4" key={index}>
                        <div
                            className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
                            onClick={() => toggleFAQ(index)}
                        >
                            {faq.question}
                            <span className="h-6 w-6 flex items-center justify-center text-teal-500 bg-[#664481] rounded-full">
                                {activeIndex === index ? (
                                    <img src='/image/icon/minuse.png' />
                                ) : (
                                    <img src='/image/icon/plus.png' />
                                )}
                            </span>
                        </div>
                        {activeIndex === index && faq.answer && (
                            <div className="p-3">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div>
                <button type="button"
                    className="focus:outline-none text-white text-sm py-2.5 px-4 rounded-md hover:opacity-80 hover:shadow-lg flex items-center border duration-300 bg-[#664481]">
                    <span className="text-white">View more</span>
                </button>
            </div>
        </div>
    );
};

export default FAQ;