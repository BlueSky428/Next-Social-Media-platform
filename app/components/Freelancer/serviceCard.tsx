import Image from 'next/image';

interface ServiceCardProps {
    title: string;
    description: string;
    price: string;
    rating: number;
    reviews: number;
    imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, rating, reviews, imageUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border shadow-lg">
            <div className='w-full flex items-center'>
                <div className='w-[45%] p-2'>
                    <img src={imageUrl} alt={title} className="w-full h-28 rounded-lg" width={400} height={200} />
                </div>
                <div className="w-[55%]">
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="text-gray-600 mt-2 text-sm">{description}</p>
                    <span className="text-yellow-500">
                        {Array(Math.round(rating)).fill('★').join('')}
                    </span>
                    <span className="text-gray-600 ml-2">({reviews})</span>
                </div>
            </div>
            <div className="flex items-center w-full p-2 justify-between">
                <div className="mt-2 text-sm font-semibold">{price}</div>
                <a className="p-1 border border-gray-600 rounded cursor-pointer text-xs">More details</a>
            </div>
        </div>
    );
};

export default ServiceCard;