import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface Image {
    id: number;
    image: string;
    parentID: number;
}

interface CarouselProps {
    images: Image[];
    parentID: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, parentID }) => {

    const filteredImages = images.filter(image => image.parentID === parentID);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % filteredImages.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + filteredImages.length) % filteredImages.length);
    };

    const servicePage = () => {
        router.push("/Service");
    }

    return (
        <div className="h-auto overflow-hidden">
            <a className="h-auto overflow-hidden relative">
                <div className="relative w-full h-48 overflow-hidden rounded-lg shadow-lg">
                    {filteredImages.map((image, index) => (
                        <img
                            onClick={servicePage}
                            key={image.id}
                            src={image.image}
                            alt={`Slide ${index}`}
                            className={`absolute w-full h-full object-cover transition-transform duration-500 ${index === currentIndex ? 'translate-x-0' : 'translate-x-full'}`}
                            style={{ transform: `translateX(${100 * (index - currentIndex)}%)` }}
                        />
                    ))}

                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
                    >
                        <img src="/image/svg/next.svg" alt="" className="w-4 rotate-180" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
                    >
                        <img src="/image/svg/next.svg" alt="" className="w-4" />
                    </button>
                </div>
            </a>
        </div>

    );
};

export default Carousel;

{/* <div className="h-auto overflow-hidden">
    <a className="h-auto overflow-hidden relative">
        <button
            onClick={previous}
            className="absolute left-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
        >
            <img src="/image/svg/next.svg" alt="" className="w-4 rotate-180" />
        </button>
        <button
            onClick={() => forward(item.id)}
            className="absolute right-0 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md border"
        >
            <img src="/image/svg/next.svg" alt="" className="w-4" />
        </button>
        <div className="relative h-44 w-full" onClick={() => Service()}>
            {
                image.filter((Image => Image.parentID === item.id)).map((imagedata, index) => (
                    <div key={imagedata.id}
                        className={`absolute top-0 transition-opacity duration-300 w-full h-full ${currentIndex === index + 1 ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img src={imagedata.image} className="rounded-sm w-full h-full" />
                    </div>
                ))
            }
        </div>
    </a>
</div> */}